// For your Google Apps Script (not part of the React file)
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1H4afxbO91caTuGcNpm6qTEiZGqR8Fo2BTYB959dWYKY/edit?pli=1&gid=0#gid=0").getSheetByName('Sheet1');
    
    // Log what we're receiving for debugging
    console.log("Received parameters:", JSON.stringify(e.parameter));
    
    const name = e.parameter.Name || '';
    const email = e.parameter.Email || '';
    const product = e.parameter.Product || '';
    const quantity = e.parameter.Quantity || '';
    const deliveryTimeline = e.parameter.DeliveryTimeline || '';
    const message = e.parameter.Message || '';
    
    // Use the timestamp from the client or create a new one
    const timestamp = e.parameter.Timestamp || new Date().toISOString();
    
    // Add the row with all fields
    sheet.appendRow([name, email, product, quantity, deliveryTimeline, message, timestamp]);
    
    return ContentService.createTextOutput('Message received successfully!');
  } catch (error) {
    console.error("Error in doPost:", error);
    return ContentService.createTextOutput('Error: ' + error.message);
  }
}
