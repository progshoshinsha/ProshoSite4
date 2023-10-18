"use strict";
{

  /* ----- ハンバーガーメニュー ----- */

  const spMenuButton = document.querySelector(".spMenuButton");
  const spMenu = document.querySelector(".humburgerMenu")
  spMenuButton.addEventListener("click", () => {
    spMenu.classList.remove("hidden");
    document.querySelector("body").classList.add("notScroll");
  })

  /* ----- ページ内スクロール ----- */

  // aタグのhrefが#から始まるものを取得
  const menuButtonElement = document.querySelectorAll("a[href^='#']");
  // ヘッダーの要素を取得して、要素事態の高さを計算
  const headerHeight = document.querySelector("header").clientHeight;
  // 全てのボタンを監視
  menuButtonElement.forEach((button) => {
    button.addEventListener("click", (e) => {
      // idの場所まで飛ばないようにする
      e.preventDefault();
      // ボタンの対象を要素として取得
      const target = document.querySelector(button.hash);
      // Y=0から対象要素のトップとの距離を計算
      const targetTopDictance = target.getBoundingClientRect().top;
      // スクロール量調整
      const adjust = 50 + headerHeight;
      // スクロール量を計算
      const offSetTop = window.scrollY + targetTopDictance - adjust;
      // メニューをクリックすると計算した位置にスクロールする
      window.scrollTo({
        top: offSetTop,
        behavior: "smooth"
      })
      spMenu.classList.add("hidden");
    document.querySelector("body").classList.remove("notScroll");
    }); 
  });



  /* ----- スクロールでふわっと出てくるやつ ----- */

  // 出現させる要素の取得
  const targetElement = document.querySelectorAll(".fadeInAnimation");
  document.addEventListener("scroll", () => {
    targetElement.forEach((contents) => {
      // ウィンドウトップから対象要素のトップまでの距離を計算
      let contentsTopDistance = contents.getBoundingClientRect().top;
      // ウィンドウの高さを取得
      const windowHeight = window.innerHeight;
      // 対象要素のトップがウィンドウの70%の高さより上に来たら
      if (contentsTopDistance < windowHeight * .8) {
        // クラスshowをつけて表示させる
        contents.classList.add("show");
      }
    });
  });



  /* ----- 作品画像のモーダルウィンドウ ----- */

  // 作品画像をモーダルウィンドウの開くボタンとして取得
  const openButton = document.querySelectorAll(".modalOpen");
  // 作品タイトルを取得
  const workTitle = document.querySelectorAll(".workTitle");
  // 作品の説明文を取得
  const infoElement = document.querySelectorAll(".workInfo");
  // 作品の制作日を取得
  const dateElement = document.querySelectorAll(".createdDate");
  // 作品のリンクを取得
  const linkElement = document.querySelectorAll(".link");
  // モーダルウィンドウ全体を取得
  const modalWindow = document.querySelector(".modalWindow");
  // modalCloseとmaskをウィンドウを閉じる要素と取得
  const windowCloseElements = document.querySelectorAll(".modalClose");
  // モーダルウィンドウを開くとき
  // 全ての開く要素を監視
  for (let i = 0; i < openButton.length; i++) {
    // 作品画像が押されたら
    openButton[i].addEventListener("click", () => {
      // モーダルウィンドウを表示
      modalWindow.classList.remove("hidden");
      // 背景をスクロールできないようにする
      document.querySelector("body").classList.add("notScroll");
      // 作品によって紹介画像を切り替える
      document.querySelector(".modalWindow img").src = openButton[i].getAttribute("src");
      document.querySelector(".modalWindow img").alt = openButton[i].getAttribute("alt");
      // 作品によってタイトルを切り替える
      document.querySelector(".modalTitle").textContent = workTitle[i].textContent;
      // 作品によって説明文を切り替える
      document.querySelector(".modalInfo").textContent = infoElement[i].textContent;
      // 作品によって制作日を切り替える
      document.querySelector(".modalDate").textContent = dateElement[i].textContent;
      // 作品によってリンクを切り替える
      document.querySelector(".modalLinkImg").href = linkElement[i].getAttribute("href");
      document.querySelector(".modalLink").href = linkElement[i].getAttribute("href");
      // 開くときにスクロール位置を一番上に持ってくる
      document.querySelector(".modalContents").scrollTop = 0;
    });
  };
  // モーダルウィンドウを閉じるとき
  // 全ての閉じる要素を監視
  windowCloseElements.forEach((element) => {
    // 何かしらの閉じる要素が押されたら
    element.addEventListener("click", () => {
      // ウィンドウを閉じる
      modalWindow.classList.add("hidden");
      // スクロールできるようにする
      document.querySelector("body").classList.remove("notScroll");
    });
  })
}

