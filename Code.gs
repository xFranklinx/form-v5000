const doGet = (e) => {
  var params = JSON.stringify(e);
  return HtmlService.createTemplateFromFile('Form')
      .evaluate();
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}
