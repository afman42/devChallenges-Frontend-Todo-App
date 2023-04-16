import { defineStore } from "pinia";

export const useListTabStore = defineStore("listTab", {
  state: () => {
    return {
      inputName: "",
      listItems: JSON.parse(localStorage.getItem("vue-store")) || [
        {
          id: +new Date(),
          name: "Do Coding Challenges",
          completed: false,
        },
      ],

      listTab: [
        {
          name: "All",
          selected: true,
          class: "border-b-4 border-[#2F80ED] pr-16 -ml-10",
        },
        {
          name: "Active",
          selected: false,
          class: "border-b-4 border-[#2F80ED] pr-20 -ml-16",
        },
        {
          name: "Completed",
          selected: false,
          class: "border-b-4 border-[#2F80ED] pr-20 -ml-20",
        },
      ],
    };
  },
  getters: {
    activeListItems: (state) =>
      state.listItems.filter((itm) => itm.completed == false),
    completedListItems: (state) =>
      state.listItems.filter((itm) => itm.completed),
  },
  actions: {
    changeTab(name) {
      let temp = this.listTab.map((item) => {
        let item1, item2;
        if (item.name === name) {
          if (item.selected) {
            item2 = item;
          } else {
            item2 = {
              ...item,
              selected: !item.selected,
            };
          }
        }
        if (item.selected) {
          item1 = {
            ...item,
            selected: !item.selected,
          };
        } else {
          item1 = item;
        }
        return {
          ...item1,
          ...item2,
        };
      });
      this.listTab = [...temp];
    },
    addItem() {
      let listItems = [
        ...this.listItems,
        { name: this.inputName, id: +new Date(), completed: false },
      ];
      localStorage.setItem("vue-store", JSON.stringify(listItems));
      this.listItems = listItems;
      this.inputName = "";
    },
    updateCompleted(id) {
      let tempArray = this.listItems.map((itm) => {
        if (itm.id === id) {
          return {
            ...itm,
            completed: !itm.completed,
          };
        }
        return itm;
      });
      localStorage.setItem("vue-store", JSON.stringify(tempArray));
      this.listItems = [...tempArray];
    },
    removeItem(id) {
      let tempArray = this.listItems.filter((itm) => itm.id !== id);
      localStorage.setItem("vue-store", JSON.stringify(tempArray));
      this.listItems = [...tempArray];
    },
    removeAll(dataListItems) {
      let tempArray = this.listItems.filter((item) => item.completed !== true);
      localStorage.setItem("vue-store", JSON.stringify(tempArray));
      this.listItems = [...tempArray];
    },
  },
});
