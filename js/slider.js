let sliderFactory = {
  createrSlider: function () {
    let newSlider = {
      imagesUrls: [],
      currentImageIndex: 0,
      showPrevBtn: null,
      showNextBtn: null,
      slideImage: null,

      start: function (elId) {
        var elSelector = "#" + elId;
        var el = document.querySelector(elSelector);
        this.showPrevBtn = el.querySelector(".show__prev");
        this.showNextBtn = el.querySelector(".show__next");
        this.slideImage = el.querySelector(".slide__img");

        this.showPrevBtn.addEventListener(
          "click",
          this.onShowPrevBtnClick.bind(slider)
        );
        this.showNextBtn.addEventListener(
          "click",
          this.onShowNextBtnClick.bind(slider)
        );

        // let that = this;
        // this.showPrevBtn.addEventListener("click", function (e) {
        //   that.onShowPrevBtnClick(e);

        // });

        // this.showNextBtn.addEventListener("click", function (e) {
        //   that.onShowNextBtnClick(e);
        // });

        this.imagesUrls.push(
          "https://api.zapovedfoto.ru/images/0432daab-95d3-4bed-a5e2-201d37b2c3ac?size=mini"
        );
        this.imagesUrls.push(
          "https://api.zapovedfoto.ru/images/0162df17-f1a8-499c-805a-5926464ac842?size=mini"
        );
        this.imagesUrls.push(
          "https://api.zapovedfoto.ru/images/04214bf5-7c7b-4441-8da5-a4466d0802a6?size=mini"
        );
        this.imagesUrls.push(
          "https://api.zapovedfoto.ru/images/027b19cc-9827-4e3c-b91c-74f4c3c7cc0a?size=mini"
        );
        this.imagesUrls.push(
          "https://api.zapovedfoto.ru/images/02bf5e60-d659-4321-995c-6d071901181a?size=mini"
        );

        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showPrevBtn.disabled = true;
      },

      onShowPrevBtnClick: function (e) {
        this.currentImageIndex--;
        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showNextBtn.disabled = false;

        if (this.currentImageIndex === 0) {
          this.showPrevBtn.disabled = true;
        }
      },

      onShowNextBtnClick: function (e) {
        this.currentImageIndex++;
        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showPrevBtn.disabled = false;

        if (this.currentImageIndex === this.imagesUrls.length - 1) {
          this.showNextBtn.disabled = true;
        }
      },
    };
    return newSlider;
  },
};
