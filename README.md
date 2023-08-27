## TranslateBot-LINE

GAS を使用した LINE の翻訳 Bot

## 翻訳 API の使用方法

### Parameter

| 名前           | 型     | 説明                                                                   |
| :------------- | :----- | :--------------------------------------------------------------------- |
| text           | String | 翻訳するテキスト                                                       |
| sourceLanguage | String | テキストが書かれている言語コード<br> ※空の文字列は言語コードが自動検出 |
| targetLanguage | String | テキストを翻訳する言語コード                                           |

※文字コード<br>
https://cloud.google.com/translate/docs/languages?hl=ja

### Request URL

```js
${ deployURL } + "?text=" + ${ text } + "&sourceLanguage=" + ${ sourceLanguage } + "&targetLanguage=" + ${ targetLanguage }
```

### Response

```js
Success
{ code: 200, text: ${ translatedText} }
```

```js
Error
{ code: 400, text: "Bad Request" }
```
