<template>
  <section class="m-4 my-6 flex justify-center align-middle lg:my-28">
    <base-card>
      <main class="lg:flex lg:justify-center lg:align-middle">
        <aside>
          <h1 class="text-center font-bold text-lg lg:p-2.5 lg:text-3xl">
            {{ clickedHero.name }}
          </h1>
          <p class="w-200 mb-5 lg:max-w-2xl lg:p-2.5 lg:mb-0">
            {{ heroDesc }}
          </p>

          <button
            @click="changeStateofFavorite('changeState', 'checkState')"
            class="cursor-pointer m-1 p-2 bg-white justify-center font-bold align-middle no-underline self-center border-0 text-center lg:m-2 lg:p-4 lg:bg-white lg:justify-center lg:no-underline lg:self-center lg:font-bold lg:cursor-pointer lg:border-0 lg:text-center text-gray-800"
          >
            Add to Favorite
          </button>

          <button
            @click="backHome"
            class="hidden lg:visible lg:p-2.5 bg-red-800 font-bold lg:self-start text-white m-3 rounded-lg border-white border-2"
          >
            Back Home
          </button>
        </aside>
        <img :src="getPhoto" alt="" class="mx-auto mt-3 lg:mx-0 lg:mt-0" />
      </main>
    </base-card>
  </section>
</template>

<script>
import BaseCard from "./UI/BaseCard.vue";
import { mapGetters } from "vuex";
export default {
  components: { BaseCard },

  data() {
    return {
      isFavorite: false,
    };
  },

  computed: {
    ...mapGetters(["clickedHero"]),

    heroDesc() {
      return this.clickedHero?.description
        ? this.clickedHero.description
        : "Daný hrdina bol tak cool, že nemá ani popis....a Ja musím písať takéto bľudy miesto toho.. 😪😪";
    },
    getPhoto() {
      return this.clickedHero?.thumbnail.path + `/portrait_fantastic.jpg`;
    },
  },
  methods: {
    changeStateofFavorite() {
      this.$store.dispatch(
        "addHeroToFavorite",
        this.clickedHero,
        this.getPhoto
      );
      this.$router.push("/favorite");
    },

    backHome() {
      this.$router.push("/home");
    },
    closeModal() {
      this.$store.dispatch("closeModal");
    },
    isThere() {
      console.log("here ..");
    },
  },
};
</script>
