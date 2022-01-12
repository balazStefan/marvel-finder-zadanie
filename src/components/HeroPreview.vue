<template>
  <div
    class="cursor-pointer flex justify-between items-center m-4 rounded-lg mb-4 opacity-80 bg-red-600"
    @click="loadPreview"
  >
    <h2 class="text-white text-center p-1 text-2xl w-full lg:text-black">
      {{ name }}
    </h2>
    <img :src="photo" />
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
