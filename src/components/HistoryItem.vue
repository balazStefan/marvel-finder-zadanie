<template>
  <div
    class="w-72 p-1 hover:bg-gray-300 cursor-pointer flex justify-between lg:w-96 lg:min-w-min"
  >
    <p @click="loadHeroFromHistory" class="font-bold max-w-xs">
      {{ query }}
    </p>
    <button
      @click="deleteQueryFromHistory"
      class="text-red-500 font-bold lg:pr-2"
    >
      Delete
    </button>
  </div>
</template>
<script>
export default {
  //lg:pr-50 lg:max-w-sm w-full
  props: ["query"],
  emits: ["delete-query", "load-FromHistory"],
  methods: {
    deleteQueryFromHistory() {
      this.$emit("delete-query", this.query);
    },
    loadHeroFromHistory() {
      this.$emit("load-FromHistory", this.query);
    },
  },
};
</script>
