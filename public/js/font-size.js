// Cookie 操作工具
const FontCookie = {
  set: (size) => {
    document.cookie = `fontSize=${size}; path=/; max-age=${30 * 24 * 60 * 60}`; // 保存30天
  },
  get: () => {
    return document.cookie
      .split("; ")
      .find((row) => row.startsWith("fontSize="))
      ?.split("=")[1];
  },
};

// 字體大小配置
const FontSizes = {
  small: 0.875, // 14px
  medium: 1, // 16px
  large: 1.125, // 18px
};

// 初始化字體
function initFontSize() {
  const savedSize = FontCookie.get() || "medium";
  setFontSize(savedSize);
}

// 設定字體大小
function setFontSize(size) {
  const multiplier = FontSizes[size] || 1;
  document.documentElement.style.fontSize = `${multiplier * 16}px`;

  // 更新按鈕狀態
  document.querySelectorAll(".font-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.size === size);
  });

  FontCookie.set(size);
}

// 事件綁定
document.querySelectorAll(".font-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    setFontSize(btn.dataset.size);
  });
});

// 頁面載入時初始化
document.addEventListener("DOMContentLoaded", initFontSize);
