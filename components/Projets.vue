<template>
  <div>
    <v-card
      variant="flat"
      class="bg-transparent d-flex flex-column align-center"
    >
      <h2>Skills</h2>
      <div>
        <div class="d-flex align-center justify-center g-3 ">
          <v-img  :src="`nuxt.png`" width="125" />
          <v-img  :src="`vue.png`" width="90" />
          <v-img  :src="`vuetify.png`" width="125" />
          <v-img  :src="`ts.png`" width="90" />
        </div>
        <div class="d-flex align-center justify-center g-4 " style="gap: 20px;">
          <v-img  :src="`python.png`" width="125" />
          <v-img  :src="`docker.png`" width="90" />
          <v-img  :src="`mongo.png`" width="125" />
          <v-img  :src="`node.svg`" width="90" />
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
