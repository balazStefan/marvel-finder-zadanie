<template>
  <div>
    <the-header></the-header>
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component
      ></transition>
    </router-view>
  </div>
</template>

<style>
.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.5s ease-out;
}
.route-leave-active {
  transition: all 0.5s ease-in;
}
.route-leave-from,
.route-enter-to {
  opacity: 1;
  transform: translateY(0px);
}
@media (min-width: 300px) {
  html {
    background: url("../src/assets/background.jpg") no-repeat center center
      fixed;
    background-size: cover;
    background-position: right;
  }
}
@media (min-width: 768px) {
  html {
    background: url("../src/assets/background.jpg") no-repeat center center
      fixed;
    background-size: cover;
  }
}
</style>
