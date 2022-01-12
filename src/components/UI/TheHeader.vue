<template>
  <div>
    <header class="mt-2 mr-2 flex justify-end gap-6">
      <router-link to="/home" class="link-navbar lg:p-4">Home Page</router-link>
      <router-link
        v-if="favoriteHeroes.length"
        to="/favorite"
        class="link-navbar lg:p-4"
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
