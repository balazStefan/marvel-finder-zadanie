<template>
  <section class="m-1">
    <base-card>
      <aside>
        <h1 class="heading-style">{{ name }}</h1>
        <p class="paragraf-style">{{ description }}</p>
      </aside>
      <div class="img-container">
        <img :src="img" alt="" />
        <button @click="removeHeroFromFavorite" class="btn-basic w-28">
          Remove from Favorite
        </button>
      </div>
    </base-card>
  </section>
</template>
<script>
export default {
  // section: class="flex align-middle justify-center my-28"
  // h1: class="text-4xl font-bold p-2.5"
  //p:class="text-4xl font-bold p-2.5"
  // img::src="img" alt="" class="p-2.5"
  // btn: p-2.5 rounded-lg text-black border-black border-4 m-5 font-bold self-start"
  //
  //
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
