<script setup>
import { Input, Button, Tabs } from "./components";
import { useListTabStore } from "./store";
const storeListTab = useListTabStore();
function submitHandler(e) {
  e.preventDefault();
  storeListTab.addItem();
}
function updateCompleted(e, id) {
  e.preventDefault();
  storeListTab.updateCompleted(id);
}
</script>

<template>
  <div class="flex flex-col items-center lg:w-1/2 lg:mx-auto sm:mx-2">
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
        :key="listItem.id"
      >
        <Input
          tipe="checkbox"
          v-model="listItem.completed"
          :checked="listItem.completed"
          @change="(e) => updateCompleted(e, listItem.id)"
        />
        <div
          class="font-montserrat-sans font-medium"
          :class="listItem.completed ? 'line-through' : null"
        >
          {{ listItem.name }}
        </div>
      </div>
    </div>
    <div
      v-else-if="storeListTab.listTab[1].selected"
      class="flex w-full mt-4 flex-col"
    >
      <form @submit="submitHandler" class="flex w-full flex-row">
        <Input tipe="text" />
        <Button tipeButton="submit" classExtra="bg-[#2F80ED] h-12 ml-10 w-2/12"
          >Add</Button
        >
      </form>
      <div
        v-for="listitem in storeListTab.activeListItems"
        class="flex flex-row items-center space-x-2 mt-2"
        :key="listitem.id"
      >
        <Input
          tipe="checkbox"
          v-model="listitem.completed"
          @change="(e) => updateCompleted(e, listitem.id)"
        />
        <div
          class="font-montserrat-sans font-medium ml-2"
          :class="listitem.completed ? 'line-through' : null"
        >
          {{ listitem.name }}
        </div>
      </div>
    </div>
    <div
      v-else-if="storeListTab.listTab[2].selected"
      class="flex w-full mt-4 flex-col"
    >
      <div
        v-for="listitem in storeListTab.completedListItems"
        class="flex flex-row items-center mb-2 hover:bg-slate-200"
        :key="listitem.id"
      >
        <Input
          tipe="checkbox"
          v-model="listitem.completed"
          :checked="listitem.completed"
          @change="(e) => updateCompleted(e, listitem.id)"
        />
        <div
          class="font-montserrat-sans w-full font-medium ml-2"
          :class="listitem.completed ? 'line-through' : null"
        >
          {{ listitem.name }}
        </div>
        <span
          @click.prevent="storeListTab.removeItem(listitem.id)"
          class="material-icons cursor-pointer"
          >restore_from_trash</span
        >
      </div>
      <div
        class="flex justify-end"
        v-if="storeListTab.completedListItems.length > 0"
      >
        <Button
          tipeButton="button"
          @click.prevent="storeListTab.removeAll()"
          classExtra="bg-[#EB5757] flex items-center h-10 lg:w-2/12 sm:w-4/12"
        >
          <span class="material-icons">restore_from_trash</span> delete all
        </Button>
      </div>
    </div>
  </div>
</template>
