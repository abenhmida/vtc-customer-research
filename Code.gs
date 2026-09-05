const SHEET_NAME = 'responses_v2';

const HEADERS = [
  'responseId', 'timestamp',
  'experience', 'organization', 'hours', 'customers', 'acquisition', 'best', 'cost',
  'direct', 'actions', 'agenda', 'conflicts', 'recurring', 'airport', 'crm', 'knowledge',
  'reactivation', 'pain', 'missing', 'change', 'price'
];

function doGet() {
  return jsonResponse({ success: true, service: 'VTC Customer Research API' });
}

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse({ success: false, error: 'Empty request' });
    }

    const payload = JSON.parse(e.postData.contents);
    validatePayload(payload);

    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = getOrCreateSheet(spreadsheet);
    ensureHeaders(sheet);

    const responseId = Utilities.getUuid();
    const timestamp = new Date().toISOString();

    const row = HEADERS.map((header) => {
      if (header === 'responseId') return responseId;
      if (header === 'timestamp') return timestamp;
      return toStringValue(payload[header]);
    });

    sheet.appendRow(row);

    return jsonResponse({ success: true, responseId });
  } catch (error) {
    console.error(error);
    return jsonResponse({ success: false, error: error.message || 'Internal error' });
  }
}

function validatePayload(payload) {
  if (!payload || typeof payload !== 'object') {
    throw new Error('Invalid payload');
  }

  if (payload.website) {
    throw new Error('Spam detected');
  }

  const required = [
    'experience', 'organization', 'hours', 'customers', 'acquisition', 'best', 'cost',
    'direct', 'agenda', 'conflicts', 'recurring', 'airport', 'crm', 'reactivation',
    'pain', 'change', 'price'
  ];

  const missing = required.filter((key) => {
    const value = payload[key];
    return value === undefined || value === null || value === '' ||
      (Array.isArray(value) && value.length === 0);
  });

  if (missing.length > 0) {
    throw new Error('Missing required fields: ' + missing.join(', '));
  }
}

function getOrCreateSheet(spreadsheet) {
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = spreadsheet.insertSheet(SHEET_NAME);
  return sheet;
}

function ensureHeaders(sheet) {
  if (sheet.getLastRow() === 0) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
  }
}

function toStringValue(value) {
  if (Array.isArray(value)) return value.join(', ');
  if (value === null || value === undefined) return '';
  return String(value);
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
