<template>
  <div>
    <header
      class="mt-2 mr-2 flex justify-end gap-6 lg:flex lg:justify-center lg:align-middle lg:gap-10 lg:mt-2 lg:mr-2"
    >
      <router-link
        to="/home"
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
a.router-link-exact-active {
  background-color: darkblue;
  color: white;
}
</style>
