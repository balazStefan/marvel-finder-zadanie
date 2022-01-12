<template>
  <section class="text-white m-1">
    <base-card>
      <main class="flex-col justify-center items-center">
        <h1 class="heading-style">
          {{ clickedHero.name }}
        </h1>
        <aside>
          <p class="paragraf-style">
            {{ heroDesc }}
          </p>
        </aside>
        <div class="img-container">
          <img :src="getPhoto" alt="" class="" />
          <button
            @click="changeStateofFavorite('changeState', 'checkState')"
            class="btn-basic"
          >
            Add to Favorite
          </button>
          <button @click="backHome" class="hidden">Back Home</button>
        </div>
      </main>
    </base-card>
  </section>
</template>

<script>
import BaseCard from "./UI/BaseCard.vue";
import { mapGetters } from "vuex";
export default {
  // section: class="m-4 my-6 flex justify-center align-middle lg:my-28
  //main  class=":lg:flex lg:justify-center lg:align-middle"
  //h1 class="text-center font-bold text-lg lg:p-2.5 lg:text-3xl"
  //p class="w-200 mb-5 lg:max-w-2xl lg:p-2.5 lg:mb-0"
  // button class="m-1 p-2 bg-white justify-center font-bold align-middle no-underline self-center border-0 text-center lg:m-2 lg:p-4 lg:bg-white lg:justify-center lg:no-underline lg:self-center lg:font-bold lg:cursor-pointer lg:border-0 lg:text-center text-gray-800"
  // button 2 class=" lg:visible lg:p-2.5 bg-red-800 font-bold lg:self-start text-white m-3 rounded-lg border-white border-2"
  // img class="mx-auto mt-3 lg:mx-0 lg:mt-0"

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
      return this.clickedHero?.thumbnail.path + `/portrait_xlarge.jpg`;
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
