<script setup>
const props = defineProps({
  tipeButton: String,
  classExtra: String,
});
</script>

<template>
  <button
    :type="props.tipeButton"
    class="rounded-lg font-semibold font-montserrat-sans text-[#FFF]"
    :class="props.classExtra"
  >
    <slot />
  </button>
</template>
