<template>
  <section class="m-1 mt-10">
    <base-card>
      <aside>
        <h1 class="heading-style">{{ name }}</h1>
        <p class="paragraf-style md:bg-transparent">{{ description }}</p>
      </aside>
      <div class="img-container">
        <img :src="img" alt="" />
        <button @click="removeHeroFromFavorite" class="btn-basic w-28 md:w-max">
          Remove from Favorite
        </button>
      </div>
    </base-card>
  </section>
</template>
<script>
export default {
  props: ["name", "desc", "photo", "id"],
  emits: ["remove-Fromfavorite"],
  data() {
    return {
      img: `${this.photo}/portrait_xlarge.jpg`,
    };
  },
  computed: {
    description() {
      return this.desc
        ? this.desc
        : "Daný hrdina bol tak cool, že nemá ani popis....a Ja musím písať takéto bľudy miesto toho.. 😪😪";
    },
  },
  methods: {
    removeHeroFromFavorite() {
      this.$emit("remove-Fromfavorite", this.id);
    },
  },
};
</script>
<style scoped>
img {
  max-width: 168px;
  max-height: auto;
}
</style>
