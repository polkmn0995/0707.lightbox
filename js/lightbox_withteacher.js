var pics = document.querySelectorAll(".pic");
var lightBox = document.querySelector("#lightbox");
var lightBoxImage = document.querySelector("#lightboxImage");

for (var i = 0; i < pics.length; i++) {
  pics[i].addEventListener("click", showLightBox);
}
function showLightBox() {
  var bigLocation = this.getAttribute("data-src");
  lightBoxImage.setAttribute("src", bigLocation);
  lightBox.style.display = "block";
}
