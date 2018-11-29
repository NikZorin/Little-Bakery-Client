<template>
  <div id="master">

    <header id="nav" class="dark-menu" :class="{ stick: isScrolledStick, 'affix-top': isScrolledAffix, 'op-0': isScrolledOp }">
      <div class="container">
        <!-- Logo container-->
        <div class="logo">
          <img class="logo-light" src="images/logo_light.png" alt="">
          <img class="logo-dark" src="images/logo_dark.png" alt="">
        </div>
        <!-- End Logo container-->
      
        <div id="navigation">
          <ul>
            <li>
              <a href="#home" class="navBtn" data-scroll="true">Главная</a>
            </li>
            <li class="dropdown">
              <a data-scroll="true" class="navBtn dropdown-btn">Каталог</a>
              <div class="dropdown-content">
                <a v-for="photo in photos" :href="'#' + photo.id">{{ photo.category }}</a>
              </div>
            </li>
            <li>
              <a href="#gallery" class="navBtn" data-scroll="true">Конструктор</a>
            </li>
            <li>
              <a href="#team" class="navBtn" data-scroll="true">Прайс</a>
            </li>
            <li>
              <a href="#works" class="navBtn" data-scroll="true">Отзывы</a>
            </li>
            <li>
              <a href="#testimonials" class="navBtn" data-scroll="true">Блог</a>
            </li>
            <li>
              <a href="#contact" class="navBtn" data-scroll="true">Контакты</a>
            </li>
        </ul>
      </div>
    </div>
    </header>

    <section id="slide">
      <div>
        <transition name="fade" mode="out-in">
          <div class="home-slider" v-for="(slide,index) in slides" v-if="index == slideIndex" :key="index">
            <div class="slide-image" :style="{ backgroundImage: 'url(' + getImage(slide.image) + ')' }"></div>

            <div class="slide-wrap">
              <div class="slide-content">
                  <h1 class="upper">{{ slide.title }}</h1>
                  <h5>{{ slide.text }}</h5>
              </div>
            </div>
          </div>
        </transition>
    </div>
    </section>

    <section id="advantages">
      <div class="advantageContainer">
        <div class="adv">
          <img src="../assets/adv1.jpg"/>
          <p class="advTitle">Индивидуальный дизайн</p>
          <p>Собери торт сам в нашем конструкторе либо пришли фотографию</p>
        </div>
        <div class="adv">
          <img src="../assets/adv2.jpg"/>
          <p class="advTitle">Натуральные ингридиенты</p>
          <p>Делаем торты только из натуральных компонентов</p>
        </div>
        <div class="adv">
          <img src="../assets/adv4.jpg"/>
          <p class="advTitle">Быстрый срок исполнения</p>
          <p>Срок исполнения состовляет до 2-ух дней</p>
        </div>
        <div class="adv">
          <img src="../assets/adv5.jpg"/>
          <p class="advTitle">Бесплатная доставка</p>
          <p>Доставим в любую точку Минска абсолютно бесплатно</p>
        </div>
        <div class="adv">
          <img src="../assets/adv3.jpg"/>
          <p class="advTitle">Низкие цены</p>
          <p>Низкие цены по сравнению с конкурентами</p>
        </div>
        <div class="adv">
          <img src="../assets/adv6.jpg"/>
          <p class="advTitle">Профессиональная консультация</p>
          <p>Мы поможем Вам определиться с идеей</p>
        </div>
      </div>
    </section>

    <section id="portfolio">
      <div class="portfolioContainer">
        <div class="photo" :class="'photo-' + photo.cells" v-for="photo in photos">
          <img :src="getImage(photo.image)"/>
          <div class="photoOverlap">
              <div>
                {{ photo.category }}
              </div>
          </div>
        </div>
      </div>
    </section>

    <section id="feedbacks">
      <div class="feedbackContainer">
        
        <transition :name="sliderDirectionAnimation" mode="out-in">
          <div v-for="(feed, index) in feedbacks" v-if="index == feedbackIndex" :key="index">
              <div class="message"> 
                {{ feed.message }}
              </div>
              <div class="author">
                -{{ feed.author }}
              </div>
            </div>
        </transition>

        <ul class="feedSwitcher">
          <li v-for="(feed, index) in feedbacks">
            <div :class="{ active: isFeedActive(index) }" 
                class="switchItem" 
                @click="switchFeed(index)">
            </div>
          </li>
        </ul>

      </div>
    </section>

    <section id="constructor">
      <div class="constrOverlay"></div>
      <div class="constrContainer">
        <div class="constructorButton">
          Конструктор торта
        </div>
      </div>
    </section>

    <section id="posts">
      <div class="postsContainer">
        <h2>Блог</h2>

        <ul>
          <li class="post" v-for="(post,index) in posts">
            <div class="imageFrame">
              <img :src="getImage(post.image)"/>
            </div>
            <p>{{ post.text }}</p>
          </li>
        </ul>
      </div>
    </section>

    <section id="connect">
      <div class="connectContainer">
        <h2>Связаться с нами</h2>

        <div class="connectContacts">
          <div class="contactItem">
            <div class="contactImage">
              <img src="../assets/contact1.png"/>
            </div>
            <p>+375(29) 270-30-20</p>
          </div>

          <div class="contactItem">
            <div class="contactImage">
              <img src="../assets/contact2.png"/>
            </div>
            <p>littlebakery@gmail.com</p>
          </div>
        </div>

        <div class="connectInfo">
          Если у вас есть вопросы, отправьте сообщение и мы с Вами свяжемся в течении 1 дня
        </div>

        <div>
          <div class="connectData">
            <input placeholder="Имя*"/>
            <input placeholder="Телефон*"/>
            <input placeholder="E-mail"/>
          </div>
          
          <textarea rows="5" placeholder="Сообщение"/>
        </div>

        <div class="sendMessageBtn">Отправить сообщение</div>
      </div>
    </section>

    <footer>
      <div class="footerContainer">
        <div class="logo-footer">
          <img src="../assets/logo_pink.png">
        </div>

        <div class="info">
          <p>+375(29) 270-30-20</p>
          <p>littlebakery@gmail.com</p>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      isScrolledStick: false,
      isScrolledOp: false,
      isScrolledAffix: false,
      slideIndex: 0,
      slides: [
        {
          image: "slide1.jpg",
          title: "Хреновые Тортики?",
          text: "Это к нам!"
        },
        {
          image: "slide2.jpg",
          title: "Захотелось сладенького?",
          text: "А жопа не треснет?"
        },
        {
          image: "slide3.jpg",
          title: "Купи два торта",
          text: "И получи целлюлит в подарок"
        }
      ],
      photos: [
        {
          id: 'cat1',
          category: 'Категория 1',
          image: 'photo1.jpg',
          cells: 3
        },
        {
          id: 'cat2',
          category: 'Категория 2',
          image: 'photo2.jpg',
          cells: 2
        },
        {
          id: 'cat3',
          category: 'Категория 3',
          image: 'photo3.jpg',
          cells: 1
        },
        {
          id: 'cat4',
          category: 'Категория 4',
          image: 'photo4.jpg',
          cells: 1
        },
        {
          id: 'cat5',
          category: 'Категория 5',
          image: 'photo5.jpg',
          cells: 1
        },
        {
          id: 'cat6',
          category: 'Категория 6',
          image: 'photo6.jpg',
          cells: 1
        },
        {
          id: 'cat7',
          category: 'Категория 7',
          image: 'photo7.jpg',
          cells: 1
        },
        {
          id: 'cat8',
          category: 'Категория 8',
          image: 'photo7.jpg',
          cells: 2
        },
        {
          id: 'cat9',
          category: 'Категория 9',
          image: 'photo7.jpg',
          cells: 3
        }
      ],
      feedbackIndex: 0,
      feedbackIndexOld: 0,
      feedbacks: [
        {
          message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel odio ac augue cursus sodales. Ut non nulla imperdiet massa feugiat sollicitudin id at purus. Sed ac orci eleifend, venenatis magna et, semper turpis. Pellentesque et vulputate quam. Aenean ullamcorper bibendum luctus. Nulla non libero posuere, congue nisi ac, laoreet sem. Fusce eleifend sapien ac diam eleifend, vel rhoncus sem mattis. Donec sem dui, bibendum eget mollis dignissim, dignissim quis dui. Nam id pellentesque massa, ut egestas lectus. Aliquam sem risus, sagittis in risus vitae, fringilla sagittis nulla. Maecenas at lorem maximus, eleifend neque sed, elementum erat. Nam sodales risus ut metus scelerisque, sit amet imperdiet mi posuere. Quisque aliquam mollis sapien, quis blandit turpis. Fusce sodales mattis orci, eu tincidunt odio porta et.",
          author: "Author 1"
        },
        {
          message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel odio ac augue cursus sodales. Ut non nulla imperdiet massa feugiat sollicitudin id at purus. Sed ac orci eleifend, venenatis magna et, semper turpis. Pellentesque et vulputate quam. Aenean ullamcorper bibendum luctus. Nulla non libero posuere, congue nisi ac, laoreet sem. Fusce eleifend sapien ac diam eleifend, vel rhoncus sem mattis. Donec sem dui, bibendum eget mollis dignissim, dignissim quis dui. Nam id pellentesque massa, ut egestas lectus. Aliquam sem risus, sagittis in risus vitae, fringilla sagittis nulla. Maecenas at lorem maximus, eleifend neque sed, elementum erat. Nam sodales risus ut metus scelerisque, sit amet imperdiet mi posuere. Quisque aliquam mollis sapien, quis blandit turpis. Fusce sodales mattis orci, eu tincidunt odio porta et.",
          author: "Author 2"
        },
        {
          message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel odio ac augue cursus sodales. Ut non nulla imperdiet massa feugiat sollicitudin id at purus. Sed ac orci eleifend, venenatis magna et, semper turpis. Pellentesque et vulputate quam. Aenean ullamcorper bibendum luctus. Nulla non libero posuere, congue nisi ac, laoreet sem. Fusce eleifend sapien ac diam eleifend, vel rhoncus sem mattis. Donec sem dui, bibendum eget mollis dignissim, dignissim quis dui. Nam id pellentesque massa, ut egestas lectus. Aliquam sem risus, sagittis in risus vitae, fringilla sagittis nulla. Maecenas at lorem maximus, eleifend neque sed, elementum erat. Nam sodales risus ut metus scelerisque, sit amet imperdiet mi posuere. Quisque aliquam mollis sapien, quis blandit turpis. Fusce sodales mattis orci, eu tincidunt odio porta et.",
          author: "Author 3"
        }
      ],
      posts: [
        {
          image: 'post1.jpg',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel odio ac augue cursus sodales. Ut non nulla imperdiet massa feugiat sollicitudin id at purus. Sed ac orci eleifend, venenatis magna et, semper turpis. Pellentesque et vulputate quam. Aenean ullamcorper bibendum luctus. Nulla non libero posuere, congue nisi ac, laoreet sem. Fusce eleifend sapien ac diam eleifend, vel rhoncus sem mattis. Donec sem dui, bibendum eget mollis dignissim, dignissim quis dui. Nam id pellentesque massa, ut egestas lectus. Aliquam sem risus, sagittis in risus vitae, fringilla sagittis nulla. Maecenas at lorem maximus, eleifend neque sed, elementum erat. Nam sodales risus ut metus scelerisque, sit amet imperdiet mi posuere. Quisque aliquam mollis sapien, quis blandit turpis. Fusce sodales mattis orci, eu tincidunt odio porta et.'
        },
        {
          image: 'post2.jpg',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel odio ac augue cursus sodales. Ut non nulla imperdiet massa feugiat sollicitudin id at purus. Sed ac orci eleifend, venenatis magna et, semper turpis. Pellentesque et vulputate quam. Aenean ullamcorper bibendum luctus. Nulla non libero posuere, congue nisi ac, laoreet sem. Fusce eleifend sapien ac diam eleifend, vel rhoncus sem mattis. Donec sem dui, bibendum eget mollis dignissim, dignissim quis dui. Nam id pellentesque massa, ut egestas lectus. Aliquam sem risus, sagittis in risus vitae, fringilla sagittis nulla. Maecenas at lorem maximus, eleifend neque sed, elementum erat. Nam sodales risus ut metus scelerisque, sit amet imperdiet mi posuere. Quisque aliquam mollis sapien, quis blandit turpis. Fusce sodales mattis orci, eu tincidunt odio porta et.'
        },
        {
          image: 'post3.jpg',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel odio ac augue cursus sodales. Ut non nulla imperdiet massa feugiat sollicitudin id at purus. Sed ac orci eleifend, venenatis magna et, semper turpis. Pellentesque et vulputate quam. Aenean ullamcorper bibendum luctus. Nulla non libero posuere, congue nisi ac, laoreet sem. Fusce eleifend sapien ac diam eleifend, vel rhoncus sem mattis. Donec sem dui, bibendum eget mollis dignissim, dignissim quis dui. Nam id pellentesque massa, ut egestas lectus. Aliquam sem risus, sagittis in risus vitae, fringilla sagittis nulla. Maecenas at lorem maximus, eleifend neque sed, elementum erat. Nam sodales risus ut metus scelerisque, sit amet imperdiet mi posuere. Quisque aliquam mollis sapien, quis blandit turpis. Fusce sodales mattis orci, eu tincidunt odio porta et.'
        }
      ]
    };
  },
  computed: {
    selectedFeedback() {
      return this.feedbacks[this.feedbackIndex];
    },
    sliderDirectionAnimation() {
      var result = 'slide';
      if (this.feedbackIndex > this.feedbackIndexOld) {
        result += 'r';
      } else {
        result += 'l';
      }
      return result;
    }
  },
  methods: {
    isFeedActive(index) {
      return this.feedbackIndex == index;
    },
    getImage(image) {
      return require("../assets/" + image);
    },
    switchFeed(index) {
      this.feedbackIndexOld = this.feedbackIndex;
      this.feedbackIndex = index;
    },
    handleScroll(event) {
      console.log(event.pageY);
      this.isScrolledStick = event.pageY > 100;
      this.isScrolledOp = event.pageY > 50 && event.pageY < 200;
      this.isScrolledAffix = event.pageY > 600;
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
    setInterval(() => {
      if(this.slideIndex < this.slides.length - 1) {
        this.slideIndex++;
      } else {
        this.slideIndex = 0;
      }
    }, 30000);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* Animations */

.slider-enter-active {
  animation: slide-in-right 0.5s ease-in forwards;
}

.slider-leave-active {
  animation: slide-out-right 0.5s ease-in forwards;
}

.slidel-enter-active {
  animation: slide-in-left 0.5s ease-in forwards;
}

.slidel-leave-active {
  animation: slide-out-left 0.5s ease-in forwards;
}

.fade-enter-active {
  animation: fade-in 1s ease-out forwards;
}

.fade-leave-active {
  animation: fade-out 1s ease-in forwards;
}

@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slide-in-right {
  from {
    transform: translateX(20vw);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slide-out-right {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-20vw);
    opacity: 0;
  }
}

@keyframes slide-in-left {
  from {
    transform: translateX(-20vw);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slide-out-left {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(20vw);
    opacity: 0;
  }
}

input,
textarea {
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #333;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  font-weight: 400;
  font-family: "Montserrat", sans-serif;
  color: #2d2d2d;
}

#nav {
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  z-index: 999;
  background: transparent;
  border: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  padding: 15px;
  transition: all .5s ease;
}

#nav.stick {
  top: -57px;
  position: fixed;
  border-bottom: 0;
}

#nav.op-0 {
  opacity: 0;
  transition-duration: 0s;
}

#nav.stick.dark-menu {
  background: #333;
  box-shadow: 0 5px 10px -7px rgba(0, 0, 0, 0.8);
}

#nav.affix-top {
  top: 0!important;
}

#navigation {
  text-align: center;
}

.container {
  padding: 0 20vw;
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
.navBtn {
  color: #fff;
  text-decoration: none;
  padding: 0 5px;
}

.dropdown {
    position: relative;
    display: inline-block;
    cursor: pointer;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #333;
    width: 300%;
    left: -100%;
    border-radius: 5px;
    box-shadow: 0 0 5px #333;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.stick .dropdown-content {
  background-color: rgb(255, 255, 255);
}

.dropdown-content a {
    color: #fff;
    padding: 12px 16px;
    text-decoration: none;
    padding: 10px 5px;
    display: block;
}

.stick .dropdown-content a {
  color: #333;
}

.dropdown-content a:hover {
  background-color: rgb(255, 244, 255);
  color: #333;
  border-radius: 5px;
}

.stick .dropdown-content a:hover {
  background-color: #333;
  color: rgb(255, 200, 255);
  border-radius: 5px;
}

.navBtn:hover,
.dropdown:hover .navBtn.dropdown-btn {
  color: #333;
}

.stick .navBtn:hover,
.stick .dropdown:hover .navBtn.dropdown-btn {
  color: rgb(255, 200, 255);
}

#slide {
  height: 100vh;
  border: 0;
  margin: 0;
  background: #222225;
}

.home-slider {
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
  padding: 0 20vw;
}

.slide-content h1 {
  font-size: 100px;
  margin: 0;
  color: #fff;
}

.slide-content h5 {
  font-size: 30px;
  margin: 0;
  color: #fff;
  margin-bottom: 50px;
}

.upper {
  text-transform: uppercase;
}

.advantageContainer {
  padding: 0 20vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.adv {
  flex-basis: 15vw;
  height: 15vw;
  flex-grow: 0;
  flex-shrink: 0;
  margin: 3.25vw 0;
  text-align: center;
}

#advantages {
  position: relative;
  background: #fff;
  padding-top: 50px;
}

.adv img {
  width: 40%;
  height: 40%;
}

.advTitle {
  font-weight: 700;
  margin-top: 5px;
}

.portfolioContainer {
  padding: 0 20vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.photo {
  height: 20vw;
  flex-grow: 0;
  flex-shrink: 0;
  margin: 1vw 0;
  text-align: center;
  border: 2px solid #fff;
  overflow: hidden;
  position: relative;
}

.photo img {
  transition: .5s all ease-out;
}

.photo:hover img {
  transform: scale(1.05);
}

.photo.photo-1 {
  flex-basis: 18vw;
}

.photo.photo-2 {
  flex-basis: 38.5vw;
}

.photo.photo-3 {
  flex-basis: 59vw;
}

#portfolio {
  position: relative;
  background: rgb(255, 244, 255);
  padding-top: 150px;
  padding-bottom: 150px;
}

.photo img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.photoOverlap {
  display: none;
  color: #fff;
  font-size: 20px;
  text-transform: uppercase;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  text-align: center;
  cursor: pointer;
}

.photo:hover .photoOverlap {
  display: table;
}

.photoOverlap div {
  display: table-cell;
  vertical-align: middle;
}

#feedbacks {
  position: relative;
  background: #fff;
  padding-top: 150px;
  padding-bottom: 150px;
}

.feedbackContainer {
  padding: 0 20vw;
}

.feedbackContainer .message {
  text-align: justify;
  margin-bottom: 10px;
  font-size: 18px;
}

.feedbackContainer .author {
  text-align: center;
  margin-bottom: 10px;
  font-style: italic;
}

.switchItem {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #ccc;
  border-radius: 50%;
}

.switchItem.active {
  background: #555;
  width: 12px;
  height: 12px;
}

.feedSwitcher {
  text-align: center;
}

.feedSwitcher li {
  margin: 0 5px;
  cursor: pointer;
}

#constructor {
  position: relative;
  background: url('../assets/constBackground.jpg') no-repeat center;
  background-attachment: fixed;
  padding-top: 150px;
  padding-bottom: 150px;
}

.constrOverlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(173, 173, 173, 0.3);
}

.constrContainer {
  display: inline-block;
  position: relative;
  width: 100%;
  background-position: center;
  background-size: cover;
  text-align: center;
}

.constructorButton{
  display: inline-block;
  background: rgba(255, 223, 245, 0.9);
  border-radius: 40px;
  width: 40%;
  padding: 40px 0;
  font-size: 35px;
  font-weight: 700;
  border: 1px solid #bbb;
  cursor: pointer;
}

.constructorButton:hover {
  box-shadow: 0 0 4px #333;
}

.constructorButton:active {
  box-shadow: 0 0 2px #333;
}

#posts {
  position: relative;
  background: #fff;
  padding-top: 150px;
  padding-bottom: 150px;
}

.postsContainer {
  padding: 0 20vw;
}

.postsContainer ul {
  display: flex;
}

.postsContainer h2 {
  text-align: center;
  font-size: 50px;
  font-weight: 700;
  margin: 0 0 20px 0;
}

.post {
  flex-basis: 25%;
  flex-grow: 1;
  flex-shrink: 1;
  cursor: pointer;
  padding: 15px;
}

.post:hover {
  background: rgb(255, 244, 255);
  box-shadow: 0 0 3px #aaa;
}

.post:first-child {
  margin-left: 0;
}

.post:last-child {
  margin-right: 0;
}

.post .imageFrame {
  height: 200px;
}

.post img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.post p {
  text-align: justify;
  text-indent: 25px;
}

#connect {
  position: relative;
  background: rgb(255, 244, 255);
  padding-top: 150px;
  padding-bottom: 150px;
}

.connectContainer {
  padding: 0 20vw;
  text-align: center;
}

.connectContainer h2 {
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  margin: 0 0 70px 0;
}

.connectContacts {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 0 10vw;
}

.contactItem {
  display: inline-block;
  flex-basis: 30%;
  flex-grow: 0;
  flex-shrink: 0;
}

.contactItem p {
  font-size: 20px;
  margin: 5px 0 0 0;
}

.contactImage img {
  width: 40%;
  object-position: bottom;
}


.connectInfo {
  font-size: 20px;
  margin-bottom: 30px;
}

.connectData {
  display: flex;
  flex-wrap: wrap;
}

.connectData input {
  flex-basis: 25%;
  flex-grow: 1;
  flex-shrink: 0;
  margin: 0 20px;
  padding: 10px;
  font-size: 18px;
}

.connectData input:first-child {
  margin-left: 0;
}

.connectData input:last-child {
  margin-right: 0;
}

textarea {
  padding: 10px;
  margin: 30px 0;
  box-sizing: border-box;
  width: 100%;
  resize: none;
  font-size: 18px;
}

.sendMessageBtn {
  display: inline-block;
  font-size: 30px;
  padding: 0 40px;
  border: 1px solid #bbb;
  border-radius: 15px;
  background-color: rgb(255, 226, 255);
  cursor: pointer;
}

.sendMessageBtn:hover {
  box-shadow: 0 0 4px #333;
}

.sendMessageBtn:active {
  box-shadow: 0 0 2px #333;
}

footer {
  position: relative;
  background: #333;
  padding-top: 25px;
  padding-bottom: 25px;
}

.footerContainer {
  padding: 0 20vw;
  display: flex;
}

.logo-footer {
  flex-basis: 50%;
  height: 86px;
}

.footerContainer img {
  height: 100%;
}

.footerContainer .info {
  text-align: right;
  flex-basis: 50%;
  flex-grow: 0;
  flex-shrink: 0;
}

.footerContainer p {
  color: rgb(228, 184, 228);
}

</style>