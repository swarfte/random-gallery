<template>
  <v-navigation-drawer expand-on-hover rail>
    <v-list>
      <v-list-item prepend-avatar="https://randomuser.me/api/portraits/lego/5.jpg" subtitle="Programmer"
        title="Benjamin Chau"></v-list-item>
    </v-list>
    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-image" title="New Image" value="myImage" @click="newRandomImage()"></v-list-item>
      <v-list-item prepend-icon="mdi-palette" :title="`${isWithColor}`" value="color" @click="trigger()"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
const selectOption = useSelectOption();
const imageSeed = useImageSeed();


const trigger = () => {
  selectOption.value = !selectOption.value
}

const isWithColor = computed(() => {
  if (selectOption.value) {
    return 'Gray image'
  }
  return "Colorful image"
});

const newRandomImage = () => {
  imageSeed.value = Math.floor(Math.random() * 1000);
}
</script>

<style scope></style>