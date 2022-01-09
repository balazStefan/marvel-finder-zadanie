<template>
  <div
    class="lg:shadow-black lg:flex lg:justify-center lg:items-center lg:gap-16 lg:bg-transparent lg:text-white lg:shadow-md lg:border lg:border-black lg:"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
@media (min-width: 768px) {
  div {
    box-shadow: 7px 5px 18px 10px rgba(0, 0, 0, 0.75);
  }
}
</style>
