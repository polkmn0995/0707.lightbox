const indicator = document.querySelectorAll(".indicator button");
const lightbox = document.querySelector("#lightbox");
const block = document.querySelector("#block");

// 라이트 박스 표시
function lightbox_open(num) {
  lightbox.setAttribute("class", "active");
  block.setAttribute("class", "active");

  change_img(num);
  indicator[num - 1].focus();
}

// 라이트 박스 종료
function lightbox_close() {
  lightbox.removeAttribute("class");
  block.removeAttribute("class");
}

// 이미지 전환 표시 함수
function change_img(val) {
  let imgs = document.querySelectorAll("figure > img");

  for (let i = 0; i < imgs.length; i++) {
    imgs[i].removeAttribute("class");
  }
  // console.log(val);
  imgs[val - 1].setAttribute("class", "active");
}
