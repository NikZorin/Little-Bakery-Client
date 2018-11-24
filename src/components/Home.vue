<template>
  <div id="master">

    <header style="position: fixed">
      <div class="container">
        <!-- Logo container-->
        <div class="logo">
          <img class="logo-light" src="images/logo_light.png" alt="">
          <img class="logo-dark" src="images/logo_dark.png" alt="">
        </div>
        <!-- End Logo container-->
      
        <div id="navigation">
          <ul class="navigation-menu nav">
            <li class="active">
              <a href="#home" data-scroll="true">Главная</a>
            </li>
            <li class="">
              <a href="#about" data-scroll="true">Каталог</a>
            </li>
            <li class="">
              <a href="#gallery" data-scroll="true">Конструктор</a>
            </li>
            <li class="">
              <a href="#team" data-scroll="true">Прайс</a>
            </li>
            <li class=""><a href="#works" data-scroll="true">Отзывы</a>
            </li>
            <li class="last-elements">
              <a href="#testimonials" data-scroll="true">Блог</a>
            </li>
            <li class="last-elements">
              <a href="#contact" data-scroll="true">Контакты</a>
            </li>
        </ul>
      </div>
    </div>
    </header>

    <section id="slide">
      <div class="flexslider" id="home-slider">
          <div class="slide-image" :style="{ backgroundImage: 'url(' + slideImage + ')' }"></div>

          <div class="slide-wrap">
            <div class="slide-content">
                <h1 class="upper" style="opacity: 1; transform: translateY(0px);">{{ slide.title }}</h1>
                <h5 style="opacity: 1; transform: translateY(0px);">{{ slide.text }}</h5>
            </div>
          </div>
    </div>
    </section>

    <section id="advantage">
      
    </section>

    <section id="category">
      
    </section>

    <section id="feedback">
      
    </section>

    <section id="cunstructor">
      
    </section>

    <section id="blog">
      
    </section>

    <section id="connect">
      
    </section>

    <footer>

    </footer>

  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      slideIndex: 0,
      slides: [
        {
          image: 'slide1.jpg',
          title: 'Тортики-Хуёртики',
          text: 'Это к нам!'
        },
        {
          image: 'slide1.jpg',
          title: 'Захотелось сладенького?',
          text: 'А жопа не треснет?'
        },
        {
          image: 'slide1.jpg',
          title: 'Купи два торта',
          text: 'И получи целлюлит в подарок'
        }
      ]
    };
  },
  computed: {
    slideImage() {
      return require('../assets/' + this.slide.image);
    },
    slide() {
      return this.slides[this.slideIndex];
    }
  },
  created() {
    setInterval(() => {
      if(this.slideIndex < this.slides.length - 1) {
        this.slideIndex++;
      } else {
        this.slideIndex = 0;
      }
    }, 5000);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 400;
  font-family: 'Montserrat', sans-serif;
  color: #2d2d2d;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #000;
  text-decoration: none;

}

#slide {
  height: 100vh;
  border: 0;
  margin: 0;
  background: #222225;
}

#home-slider {
  height: 100vh;
}

.slide-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.slide-wrap {
  display: table;
  table-layout: fixed;
  height: 100%;
  width: 100%;
  position: relative;
  background-color: rgba(255, 222, 255, 0.35);
}

.slide-content {
  display: table-cell;
  vertical-align: middle;
  position: relative;
  width: 100%;
  color: #fff;
  text-align: center;
}

.slide-content h1 {
  font-size: 100px;
  margin: 0;
  color: #fff;
}

.slide-content h5 {
  font-size: 30px;
  margin: 0;
  color: #fff;margin-bottom: 50px;
}

.upper {
  text-transform: uppercase
}

</style>
