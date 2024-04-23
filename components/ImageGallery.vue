<template>
  <v-card class="mx-5 my-5 pa-3">
    <v-row>
      <v-col v-for="n in 100" cols="4" sm="3" md="2">

        <v-img :src="`https://picsum.photos/500/300?image=${n * 3 + imageSeed}${isWithColor}`" cover aspect-ratio="1.5"
          :lazy-src="`https://picsum.photos/10/6?image=${n * 3 + imageSeed}${isWithColor}`">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts" setup>
const selectOption = useSelectOption();
const imageSeed = useImageSeed();

const isWithColor = computed(() => {
  if (selectOption.value) {
    return ''
  }
  return "&grayscale"
});

</script>




<style></style>