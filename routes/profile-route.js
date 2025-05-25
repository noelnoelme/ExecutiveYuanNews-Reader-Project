const router = require("express").Router();
const Post = require("../models/post-model");
const axios = require("axios");

const authCheck = (req, res, next) => {
  console.log(req.originalUrl);
  req.session.returnTo = req.originalUrl;
  if (!req.isAuthenticated()) {
    res.redirect("/auth/login");
  } else {
    next();
  }
};

router.get("/", authCheck, async (req, res) => {
  let postFound = await Post.find({ author: req.user._id });
  res.render("profile", { user: req.user, posts: postFound });
});

router.get("/news", authCheck, async (req, res) => {
  const query = req.query.q ? req.query.q.trim() : "";

  const searchCondition = query
    ? {
        $or: [
          { title: { $regex: query, $options: "i" } },
          { content: { $regex: query, $options: "i" } },
        ],
      }
    : {};

  let postAll = await Post.find(searchCondition)
    .populate("author", "name email") // 加入 populate
    .sort({ date: -1 }); // 按時間倒序

  res.render("news", { user: req.user, posts: postAll, query });
});

router.get("/rain", authCheck, async (req, res) => {
  try {
    const apiUrl =
      "https://wic.heo.taipei/OpenData/API/Rain/Get?stationNo=&loginId=open_rain&dataKey=85452C1D";
    const response = await axios.get(apiUrl);
    // 假設回傳為 JSON 陣列
    const rainData = response.data.data;
    res.render("rain", { user: req.user, rainData: rainData, error: 0 });
  } catch (err) {
    res.render("rain", { user: req.user, rainData: [], error: "資料取得失敗" });
  }
});

router.get("/post", authCheck, (req, res) => {
  res.render("post", { user: req.user });
});

router.post("/post", authCheck, async (req, res) => {
  let { title, content } = req.body;
  let newPost = new Post({ title, content, author: req.user._id });
  try {
    await newPost.save();
    res.status(200).redirect("/profile");
  } catch (err) {
    req.flash("error_msg", "欄位皆不得為空");
    res.redirect("/profile/post");
  }
});

module.exports = router;
