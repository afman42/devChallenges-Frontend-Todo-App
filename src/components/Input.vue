<script setup>
import { useListTabStore } from "../store";
const storeListTab = useListTabStore();
const props = defineProps({
  tipe: String,
  checked: Boolean,
});
</script>

<template>
  <input
    v-if="props.tipe === 'checkbox'"
    type="checkbox"
    class="w-6 h-6 outline outline-gray-500 outline-0"
  />
  <input
    v-else-if="props.tipe === 'text'"
    type="text"
    v-model="storeListTab.inputName"
    required
    class="w-9/12 border-2 border-[#BDBDBD] rounded-lg p-2 text-xs font-montserrat-sans font-normal"
    placeholder="add details"
  />
</template>
