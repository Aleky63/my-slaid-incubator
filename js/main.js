const imagesUrls = [];
let showPrevBtn = document.getElementById("show-prev");
let showNextBtn = document.getElementById("show-next");
let slideImage = document.getElementById("slide-img");

showPrevBtn.addEventListener("click", onShowPrevBtnClick);
showNextBtn.addEventListener("click", onShowNextBtnClick);

imagesUrls.push(
  "https://api.zapovedfoto.ru/images/0432daab-95d3-4bed-a5e2-201d37b2c3ac?size=mini"
);
imagesUrls.push(
  "https://api.zapovedfoto.ru/images/0162df17-f1a8-499c-805a-5926464ac842?size=mini"
);
imagesUrls.push(
  "https://api.zapovedfoto.ru/images/04214bf5-7c7b-4441-8da5-a4466d0802a6?size=mini"
);
imagesUrls.push(
  "https://api.zapovedfoto.ru/images/027b19cc-9827-4e3c-b91c-74f4c3c7cc0a?size=mini"
);
imagesUrls.push(
  "https://api.zapovedfoto.ru/images/02bf5e60-d659-4321-995c-6d071901181a?size=mini"
);

// let currentImageIndex = 0;
slideImage.src = imagesUrls[currentImageIndex];
showPrevBtn.disabled = true;

// ---

function onShowPrevBtnClick(e) {
  currentImageIndex--;
  slideImage.src = imagesUrls[currentImageIndex];
  showNextBtn.disabled = false;

  if (currentImageIndex === 0) {
    showPrevBtn.disabled = true;
  }
}

function onShowNextBtnClick(e) {
  currentImageIndex++;
  slideImage.src = imagesUrls[currentImageIndex];
  showPrevBtn.disabled = false;

  if (currentImageIndex === imagesUrls.length - 1) {
    showNextBtn.disabled = true;
  }
}
