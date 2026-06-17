/* 迴聲誌 ECHO — 共用互動腳本 */
(function () {
  "use strict";

  // 行動版選單切換
  function initNav() {
    var toggle = document.querySelector(".nav-toggle");
    var links = document.querySelector(".nav-links");
    if (!toggle || !links) return;
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // 自動帶入年份
  function initYear() {
    document.querySelectorAll("[data-year]").forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  }

  // 投稿表單為靜態示範,攔截送出並提示
  function initForm() {
    var form = document.querySelector("form[data-demo]");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var note = form.querySelector(".form-note");
      if (note) note.hidden = false;
      form.reset();
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initNav();
    initYear();
    initForm();
  });
})();
