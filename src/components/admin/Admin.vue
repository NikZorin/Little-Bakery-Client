<template>
  <div id="container">

    <div id="navigation">
      <div class="navTitleContainer">
        <i class="fas fa-bars" id="navIcon"></i>
        <h2 id="navTitle">Little Bakery</h2>
      </div>

      <div id="navContent">
        <ul>
          <li :class="{ 'selected': selectedUrl == '/admin/posts'}" 
              @click="navigateTo('/admin/posts')">Posts</li>
          <li :class="{ selected: selectedUrl == '/admin/cakes'}"
              @click="navigateTo('/admin/cakes')">Cakes</li>
          <li :class="{ selected: selectedUrl == '/admin/feedbacks'}" 
              @click="navigateTo('#')">Feedbacks</li>
          <li :class="{ selected: selectedUrl == '/admin/contacts'}" 
              @click="navigateTo('#')">Contacts</li>  
        </ul>
      </div>
    </div>

    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>

    
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedUrl: ''
    };
  },
  created() {
    this.selectedUrl = this.$route.path;
  },
  methods: {
    navigateTo(url) {
      this.selectedUrl = url;
      this.$router.push(url);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.slide-enter-active {
  animation: fade-in 300ms ease-out forwards;
}

.slide-leave-active {
  animation: fade-out 300ms ease-out forwards;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

#container {
  padding: 20px 50px 20px 100px;
  margin: 0;
}

#navigation {
  display: inline-block;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 50px;
  color: #fff;
  background-color: #000;
  transition: 400ms width ease-out;
}

#navigation:hover {
  width: 250px;
}

#navTitle {
  display: inline-block;
  position: absolute;
  top: 10px;
  left: 35px;
  margin: 0;
  font-family: "Dancing Script", cursive;
  font-weight: 700;
  font-size: 28px;
  padding-left: 5px;
  height: 40px;
  overflow: hidden;
  visibility: hidden;
}

#navigation:hover #navTitle {
  visibility: visible;
}

.navTitleContainer {
  display: inline-block;
  height: 50px;
  width: 100%;
  border-bottom: 1px solid #fff;
  margin-bottom: 40px;
}

#navIcon {
  font-size: 30px;
  position: relative;
  top: 10px;
  left: calc(100% - 40px);
}

#navContent {
  display: block;
  visibility: hidden;
}

#navigation:hover #navContent {
  visibility: visible;
}

#navContent ul {
  list-style-type: none;
  margin: 0px 10px;
}

#navContent li {
  font-size: 20px;
  padding: 10px 30px 10px 10px;
  text-align: right;
  border-radius: 3px;
}

#navContent li:hover {
  background-color: #fff;
  color: #000;
  cursor: pointer;
  padding-right: 60px;
}

#navContent li:active {
  background-color: #fff;
  color: rgb(10, 196, 186);
}

#navContent li.selected {
  color: rgb(10, 196, 186);
}

#header {
  display: block;
  font-size: 40px;
  border-bottom: 3px solid #ccc;
  margin-bottom: 20px;
}

ul {
  margin: 0;
  padding: 0;
}

.post {
  border: 2px solid #999;
  border-radius: 5px;
  display: block;
  margin-bottom: 20px;
  padding: 20px 30px;
  background-color: rgb(250, 250, 250);
}

.post:last-child {
  margin-bottom: 0;
}

input,
textarea {
  display: block;
  width: 100%;
  resize: none;
  margin-bottom: 15px;
  font-size: 16px;
  border-radius: 5px;
  border: 2px solid #ccc;
  font-family: inherit;
}

.button {
  display: inline-block;
  width: 100px;
  text-align: center;
  border: 1px solid black;
  background-color: #eee;
  padding: 5px;
  border-radius: 5px;
  margin-right: 10px;
}

.button:hover {
  cursor: pointer;
  box-shadow: 0px 0px 4px #000;
}

.button:active {
  box-shadow: 0px 0px 3px #000;
}

.add {
  margin-bottom: 20px;
}

.label {
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 5px;
}
</style>
