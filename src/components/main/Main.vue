<template>
  <div id="master">

    <div id="loadingContainer" v-if="isLoading">
      <div class="loadCake firstCake"></div>
      <div class="loadCake secondCake"></div>
      <div class="loadCake thirdCake"></div>
      <div class="loadingMessage">Загрузка...</div>
    </div>

    <div v-else>
      <header id="nav" class="dark-menu" :class="{ stick: isScrolledStick, 'affix-top': isScrolledAffix, 'op-0': isScrolledOp }">
        <div class="container">
          <!-- Logo container-->
          <div class="logo">
            <img class="logo-light" src="../../assets/logo_pink.png" alt="">
          </div>
          <!-- End Logo container-->
        
          <div id="navigation">
            <ul>
              <li>
                <router-link tag="a" to="/" class="navBtn">Главная</router-link>
              </li>
              <li class="dropdown">
                <router-link tag="a" to="/catalog" 
                    class="navBtn dropdown-btn"
                    @mouseover.native="isCatDropOpen = true"
                    @mouseleave.native="isCatDropOpen = false">
                  Каталог
                </router-link>
                <transition name="dropfade">
                  <div class="dropdown-content"
                      v-show="isCatDropOpen"
                      @mouseover="isCatDropOpen = true"
                      @mouseleave="isCatDropOpen = false">
                    <router-link tag="a"
                      v-for="category in categories" 
                      :to="'/catalog/' + category.id">{{ category.name }}</router-link>
                  </div>
                </transition>
              </li>
              <li>
                <router-link tag="a" to="/constructor" class="navBtn" data-scroll="true">Конструктор</router-link>
              </li>
              <li>
                <router-link tag="a" to="/price" class="navBtn" data-scroll="true">Прайс</router-link>
              </li>
              <li>
                <router-link tag="a" to="/feedbacks" class="navBtn" data-scroll="true">Отзывы</router-link>
              </li>
              <li>
                <router-link tag="a" to="/blog" class="navBtn" data-scroll="true">Блог</router-link>
              </li>
              <li>
                <router-link tag="a" to="/contacts" class="navBtn" data-scroll="true">Контакты</router-link>
              </li>
          </ul>
        </div>
      </div>
      </header>

      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>

      <footer>
        <div class="footerContainer">
          <div class="logo-footer">
            <img src="../../assets/logo_pink.png">
          </div>

          <div class="info">
            <p>+375(29) 270-30-20</p>
            <p>littlebakery@gmail.com</p>
          </div>
        </div>
      </footer>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      isScrolledStick: false,
      isScrolledOp: false,
      isScrolledAffix: false,
      isCatDropOpen: false,
      categories: [
        {
          id: "cat1",
          name: "Категория 1",
          image: "photo1.jpg",
          cells: 3
        },
        {
          id: "cat2",
          name: "Категория 2",
          image: "photo2.jpg",
          cells: 2
        },
        {
          id: "cat3",
          name: "Категория 3",
          image: "photo3.jpg",
          cells: 1
        },
        {
          id: "cat4",
          name: "Категория 4",
          image: "photo4.jpg",
          cells: 1
        },
        {
          id: "cat5",
          name: "Категория 5",
          image: "photo5.jpg",
          cells: 1
        },
        {
          id: "cat6",
          name: "Категория 6",
          image: "photo6.jpg",
          cells: 1
        },
        {
          id: "cat7",
          name: "Категория 7",
          image: "photo7.jpg",
          cells: 1
        },
        {
          id: "cat8",
          name: "Категория 8",
          image: "photo7.jpg",
          cells: 2
        },
        {
          id: "cat9",
          name: "Категория 9",
          image: "photo7.jpg",
          cells: 3
        }
      ]
    };
  },
  created() {
    this.isLoading = false;
  },
  methods: {
    handleScroll(event) {
      this.isScrolledStick = event.pageY > 100;
      this.isScrolledOp = event.pageY > 50 && event.pageY < 200;
      this.isScrolledAffix = event.pageY > 600;
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#loadingContainer {
  display: block;
  height: 100vh;
  background: rgb(255, 244, 255);
}

.loadingMessage {
  display: inline-block;
  position: absolute;
  text-align: center;
  top: 65%;
  width: 100%;
  font-size: 35px;
  text-decoration: underline;
}

.loadCake {
  background: url("../../assets/cupcake.png") no-repeat center;
  background-size: contain;
  position: absolute;
  display: inline-block;
  width: 80px;
  height: 80px;
}

.firstCake {
  left: calc(40% - 40px);
  top: calc(40% - 40px);
  animation: 6s first-cake-loading ease-in-out forwards infinite;
}

.secondCake {
  left: calc(60% - 40px);
  top: calc(40% - 40px);
  animation: 6s second-cake-loading ease-in-out forwards infinite;
}

.thirdCake {
  left: calc(50% - 40px);
  top: calc(60% - 40px);
  animation: 6s third-cake-loading ease-in-out forwards infinite;
}

@keyframes first-cake-loading {
  10% {
    left: calc(60% - 40px);
    top: calc(40% - 40px);
  }
  20% {
    left: calc(50% - 40px);
    top: calc(60% - 40px);
  }
  30% {
    left: calc(40% - 40px);
    top: calc(40% - 40px);
  }
  50% {
    left: calc(45% - 40px);
    top: calc(45% - 40px);
  }
  60% {
    left: calc(50% - 40px);
    top: calc(55% - 40px);
  }
  70% {
    left: calc(55% - 40px);
    top: calc(45% - 40px);
  }
  80% {
    left: calc(45% - 40px);
    top: calc(45% - 40px);
  }
}
@keyframes second-cake-loading {
  10% {
    left: calc(50% - 40px);
    top: calc(60% - 40px);
  }
  20% {
    left: calc(40% - 40px);
    top: calc(40% - 40px);
  }
  30% {
    left: calc(60% - 40px);
    top: calc(40% - 40px);
  }
  50% {
    left: calc(55% - 40px);
    top: calc(45% - 40px);
  }
  60% {
    left: calc(45% - 40px);
    top: calc(45% - 40px);
  }
  70% {
    left: calc(50% - 40px);
    top: calc(55% - 40px);
  }
  80% {
    left: calc(55% - 40px);
    top: calc(45% - 40px);
  }
}
@keyframes third-cake-loading {
  10% {
    left: calc(40% - 40px);
    top: calc(40% - 40px);
  }
  20% {
    left: calc(60% - 40px);
    top: calc(40% - 40px);
  }
  30% {
    left: calc(50% - 40px);
    top: calc(60% - 40px);
  }
  50% {
    left: calc(50% - 40px);
    top: calc(55% - 40px);
  }
  60% {
    left: calc(55% - 40px);
    top: calc(45% - 40px);
  }
  70% {
    left: calc(45% - 40px);
    top: calc(45% - 40px);
  }
  80% {
    left: calc(50% - 40px);
    top: calc(55% - 40px);
  }
}

#nav {
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  z-index: 999;
  border: 0;
  transition: all 0.5s ease;
}

#nav.stick {
  top: -65px;
  position: fixed;
}

#nav.op-0 {
  opacity: 0;
  transition-duration: 0s;
}

#nav.affix-top {
  top: 0 !important;
}

#navigation {
  text-align: center;
  display: inline-block;
  width: 100%;
  position: absolute;
  left: 0;
}

.dark-menu #navigation {
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  background: transparent;
}

.stick.dark-menu #navigation {
  background: #333;
  border-bottom: 0;
}

.dark-menu.affix-top #navigation {
  border: 0;
  box-shadow: 0 5px 10px -7px rgba(0, 0, 0, 0.8);
}

.container {
  padding: 0 20vw;
  position: relative;
}

.navBtn {
  color: #fff;
  text-decoration: none;
  padding: 17px 10px;
  display: block;
  font-size: 18px;
}

.dropdown {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.dropdown-content {
  display: block;
  position: absolute;
  background-color: #333;
  top: 80%;
  width: 200%;
  left: -50%;
  border-radius: 5px;
  box-shadow: 0 0 5px #333;
  transition: 1.3s all ease-in;
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

.logo {
  position: absolute;
  padding: 10px 0;
  z-index: 100;
}

.logo-light {
  display: block;
  max-height: 45px;
  max-width: 100%;
  height: auto;
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