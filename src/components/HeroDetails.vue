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
          <div class="lg:p-2.5">
            <label for="isFavorite" class="cursor-pointer lg:m-0"
              >Is this hero your Favorite ?
            </label>
            <input
              type="checkbox"
              id="isFavorite"
              @click="changeStateofFavorite"
              class="cursor-pointer"
            />
          </div>
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
      this.isFavorite = true;
      this.$store.dispatch(
        "addHeroToFavorite",
        this.clickedHero,
        this.getPhoto
      );
      this.$router.push("/favorite");
    },

    backHome() {
      this.$router.push("/");
    },
    closeModal() {
      this.$store.dispatch("closeModal");
    },
  },
};
</script>
