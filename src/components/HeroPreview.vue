<template>
  <div
    class="container-preview-style border-white border-2 md:w-72 md:flex-col md:items-center"
    @click="loadPreview"
  >
    <h2
      class="text-white text-center p-1 text-2xl w-full md:text-sm font-bold lg:text-white"
    >
      {{ name }}
    </h2>
    <img :src="photo" class="pb-2" />
  </div>
</template>
<script>
export default {
  props: ["id", "name", "photo"],
  emits: ["show-preview"],
  methods: {
    loadPreview() {
      this.$emit("show-preview", this.id);
    },
  },
};
</script>
<style scoped></style>
