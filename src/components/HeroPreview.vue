<template>
  <div
    class="cursor-pointer flex justify-between items-center m-2.5 lg:block"
    @click="loadPreview"
  >
    <p class="text-black lg:text-center">
      {{ name }}
    </p>
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
