function doGet(request) {
  return HtmlService.createTemplateFromFile('Index')
      .evaluate()
      .setTitle('Responive Form')
      .setSandboxMode(HtmlService.SandboxMode.IFRAME)
      .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

/* @Include JavaScript and CSS Files */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}

/* @Process Form */
function processForm(formObject) {
  var url = "https://docs.google.com/spreadsheets/d/1YWU_Lyn5Z595yjao7X650LhiibepfCJLfw1v1fMPpf0/edit#gid=0";
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Data");
  
  ws.appendRow([formObject.customer_name,
                formObject.cleaner_name,
                formObject.rating]);
}

