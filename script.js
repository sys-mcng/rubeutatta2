// 額縁データ（画像はあなたのファイル名に変更してOK）
const frames = [
  { name: "ABOUT", link: "about.html", img: "frame1.png" },
  { name: "SONG", link: "song.html", img: "frame2.png" },
  { name: "VOICE", link: "voice.html", img: "frame3.png" },
  { name: "GOODS", link: "goods.html", img: "frame4.png" },
  { name: "？", link: "unknown.html", img: "frame5.png" }
];

// ランダムシャッフル
frames.sort(() => Math.random() - 0.5);

const container = document.querySelector(".container");

// DOM生成
frames.forEach(f => {
  const a = document.createElement("a");
  a.href = f.link;
  a.className = "frame";

  a.innerHTML = `
    <img src="${f.img}" class="frame-img">
    <div class="frame-inner">
      <div class="menu">${f.name}</div>
    </div>
  `;

  container.appendChild(a);
});
