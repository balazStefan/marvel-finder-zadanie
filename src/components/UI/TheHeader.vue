<template>
  <div>
    <header
      class="mt-5 flex justify-center gap-6 lg:flex lg:justify-end lg:align-middle lg:gap-10 lg:mt-0"
    >
      <router-link
        to="/"
        class="m-1 p-2 bg-white justify-center font-bold align-middle no-underline self-center cursor-pointer border-0 text-center lg:m-2 lg:p-4 lg:bg-white lg:justify-center lg:no-underline lg:self-center lg:font-bold lg:cursor-pointer lg:border-0 lg:text-center text-gray-800"
        >Home Page</router-link
      >
      <router-link
        v-if="favoriteHeroes.length"
        to="/favorite"
        class="m-1 p-2 bg-white justify-center font-bold align-middle no-underline self-center cursor-pointer border-0 text-center lg:m-2 lg:p-4 lg:bg-white lg:justify-center lg:no-underline lg:self-center lg:font-bold lg:cursor-pointer lg:border-0 lg:text-center text-gray-800 lg:rounded"
        >Favorite Heroes</router-link
      >
    </header>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["favoriteHeroes"]),
  },
};
</script>

<style scoped>
a {
  border-radius: 8px;
}
a.router-link-active {
  background-color: darkblue;
  color: white;
}
/*
link-navbarMobile lg:link-navbar rounded*/
</style>
