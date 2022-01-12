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
<style scoped>
@media (min-width: 700px) {
  section {
    box-shadow: 7px 5px 18px 10px rgba(0, 0, 0, 0.75);
  }
}
</style>
