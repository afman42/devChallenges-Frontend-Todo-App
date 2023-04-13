<script setup>
import { useListTabStore } from "../store";
const storeListTab = useListTabStore();
</script>

<template>
  <div class="flex flex-row w-full border-b-2 border-[#BDBDBD]">
    <div
      @click.prevent="storeListTab.changeTab(item.name)"
      v-for="item in storeListTab.listTab"
      :key="item.name"
      class="w-full cursor-pointer flex justify-center h-10 font-semibold font-montserrat-sans hover:bg-slate-100 hover:rounded-tl-lg hover:rounded-tr-lg"
    >
      {{ item.name }}
      <div :class="[item.selected ? item.class : null]"></div>
    </div>
  </div>
</template>
