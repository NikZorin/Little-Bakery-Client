<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Poppins', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

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

.dropfade-enter-active {
  animation: fade-in 800ms linear forwards;
}

.dropfade-leave-active {
  animation: fade-out 800ms linear forwards;
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

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
li {
  display: inline-block;
}

</style>
