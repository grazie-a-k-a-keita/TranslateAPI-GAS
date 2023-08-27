function doGet(translateText) {
  var textParameter = translateText.parameter;
  var translatedText = LanguageApp.translate(
    // text：Hello
    // sourceLanguage：en（※空文字なら自動判別）
    // targetLanguage：ja
    // 【言語サポート 文字コード】
    // https://cloud.google.com/translate/docs/languages?hl=ja
    textParameter.text,
    textParameter.sourceLanguage,
    textParameter.targetLanguage
  );
  var body;

  if (translatedText) {
    body = {
      code: 200,
      text: translatedText,
    };
  } else {
    body = {
      code: 400,
      text: "Bad Request",
    };
  }

  var response = ContentService.createTextOutput();
  response.setMimeType(ContentService.MimeType.JSON);
  response.setContent(JSON.stringify(body));

  return response;
}
