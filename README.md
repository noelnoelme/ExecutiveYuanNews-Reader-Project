# 政府 API 閱讀器

# 專案簡介

> 本專案提供一個簡單的即時資訊閱讀平台，使用者可註冊、登入，並能發表個人筆記。
> 適合 Node.js/Express/MongoDB/API 學習者參考與練習。

## 功能特色

- 使用者註冊/登入/登出
- ~~即時新聞瀏覽~~ (行政院全球資訊網OpenAPI 目前掛掉了)
- 台北市即時雨量 (臺北市水利處雨量站即時資料OpenAPI)
- 個人筆記發表、瀏覽、搜尋
- RWD 響應式設計
- 字體大小自訂並儲存於 Cookie
- Express + EJS 模板引擎
- MongoDB Atlas 雲端資料庫

## 使用說明

- 除 [首頁、登入、註冊] 以外所有功能皆須登入後才可使用
- 上方選單可註冊新帳號或登入。
- 登入後可發表、瀏覽個人筆記。
- [即時雨量]可瀏覽、搜尋各站點雨量資訊。
- [即時新聞]可瀏覽、搜尋平台所有文章。
- 右下角[大中小]按鈕可調整字體大小，使用者偏好會被儲存在 Cookie。
- 專案測試用登入帳號密碼可使用以下或自行註冊一組帳號
帳號: example@example.com
密碼: example

## 使用技術

- Node.js
- Express.js
- Axios
- EJS
- MongoDB Atlas
- Passport.js
- connect-flash
- dotenv
- RWD CSS（手工）

## 安裝方式

1.下載或 clone 此專案：

```
git clone https://github.com/noelnoelme/ExecutiveYuanNews-Reader-Project.git
cd ExecutiveYuanNews-Reader-Project
```

2.安裝相依套件：

```
npm install
```

## 環境變數設定

請在專案根目錄建立 .env 檔案，範例如下：

```
DB_CONNECT=你的MongoDB連線字串
SECRET=你的Session密鑰
```

若有需要也可加上

```
GOOGLE_CLIENT_ID=你的Google OAuth Client ID
GOOGLE_CLIENT_SECRET=你的Google OAuth Client Secret
GOOGLE_CALLBACK_URL=你的Google OAuth Redirect URI
```

## 啟動方式

```
nodemon index.js
```

啟動後預設於 http://localhost:8080 運行。

## 授權

MIT License
