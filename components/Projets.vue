<template>
  <div>
    <v-card
      variant="flat"
      class="bg-transparent d-flex flex-column align-center"
    >
      <h2>Skills</h2>
     
      <div class="w-sm-50" style="max-width:450px">
        <div class="d-flex align-center  justify-space-around " style="">
          <v-img  :src="`nuxt.png`" style="max-width: 25%;" />
          <v-img  :src="`vue.png`" style="max-width: 18%;"/>
          <v-img  :src="`vuetify.png`" style="max-width: 25%;" />
          <v-img  :src="`ts.png`" style="max-width: 18%;" />
        </div>
        <div class="d-flex align-center justify-space-around " style="">
         <img :src="`python.png`" style="width: 22%;">
         <img :src="`mongo.png`" style="width: 25%;">
         <img :src="`docker.png`" style="width: 22%;">
         <img :src="`node.svg`" style="width: 22%;">
        </div>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
const row1 = ["vue", "ts", "nuxt", "vuetify"];
const row2 = ["python", "mongo", "sql", "docker"];
</script>

<style>
.icons {
  height: 125px;
  width: 50%;
}
</style>
