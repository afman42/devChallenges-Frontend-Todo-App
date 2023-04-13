<script setup>
import { Input, Button, Tabs } from "./components";
import { useListTabStore } from "./store";
import { ref } from "vue";
const storeListTab = useListTabStore();
function submitHandler(e) {
  e.preventDefault();
  storeListTab.addItem();
}
</script>

<template>
  <div class="flex flex-col items-center w-1/2 mx-auto">
    <h1 class="font-raleway-sans font-bold text-3xl my-4">#Todo</h1>
    <Tabs />

    <div
      v-if="storeListTab.listTab[0].selected"
      class="flex w-full flex-col mt-4"
    >
      <form @submit="submitHandler" class="flex w-full flex-row">
        <Input tipe="text" />
        <Button tipeButton="submit" classExtra="bg-[#2F80ED] h-12 ml-10 w-2/12"
          >Add</Button
        >
      </form>
      <div
        v-for="listItem in storeListTab.listItems"
        class="flex flex-row items-center space-x-2 mt-2"
      >
        <Input tipe="checkbox" />
        <div class="font-montserrat-sans font-medium">
          {{ listItem.name }}
        </div>
      </div>
    </div>
    <div
      v-else-if="storeListTab.listTab[1].selected"
      class="flex w-full mt-4 flex-col"
    >
      <div class="flex flex-row items-center space-x-2">
        <Input tipe="checkbox" />
        <div class="font-montserrat-sans font-medium">
          Do coding challenges #1
        </div>
      </div>
    </div>
    <div
      v-else-if="storeListTab.listTab[2].selected"
      class="flex w-full mt-4 flex-col"
    >
      <div class="flex flex-row items-center space-x-2">
        <Input tipe="checkbox" />
        <div class="font-montserrat-sans font-medium">
          Do coding challenges #2
        </div>
      </div>
    </div>
  </div>
</template>
