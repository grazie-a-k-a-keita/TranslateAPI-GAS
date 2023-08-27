// LINE Message API アクセストークン
const ACCESS_TOKEN = ${ ACCESS_TOKEN };
// 翻訳APIのURL
const TRANSLATE_API_URL =
  "${ deploy URL }?text=";
// 文字コード（https://cloud.google.com/translate/docs/languages?hl=ja）
const sourceLanguage = ""; // 空文字で言語を自動判別
const targetLanguage = "ko"; // 翻訳したい文字コード

function doPost(e) {
  const events = JSON.parse(e.postData.contents).events[0];
  const replyToken = events.replyToken;
  const userMessage = events.message.text;

  var response = UrlFetchApp.fetch(
    TRANSLATE_API_URL +
      userMessage +
      "&sourceLanguage=" +
      sourceLanguage +
      "&targetLanguage=" +
      targetLanguage
  ).getContentText();
  var translatedText = JSON.parse(response).text;

  UrlFetchApp.fetch("https://api.line.me/v2/bot/message/reply", {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + ACCESS_TOKEN,
    },
    method: "post",
    payload: JSON.stringify({
      replyToken: replyToken,
      messages: [
        {
          type: "text",
          text: translatedText,
        },
      ],
    }),
  });
}
