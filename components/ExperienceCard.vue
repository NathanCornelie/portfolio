<template>
  <div class="main w-100">
    <v-card variant="flat" class="bg my-4 w-100 container py-3">
      <!-- desc -->
      <v-card variant="flat" class="bg-transparent d-flex ">
        <div class="mx-4 d-flex align-center">
          <v-img :src="experience.logo.link" :width="experience.logo.size"></v-img>
        </div>

        <div class="title">
          <h1>{{ experience.title }}</h1>
          <h2>{{ experience.company }}</h2>
          <h3>{{ experience.dates }}</h3>
        </div>
      </v-card>
      <v-divider class="pb-4"></v-divider>
      <!-- content -->
      <v-card
        variant="flat"
        v-for="job in experience.jobs"
        class="bg-transparent d-flex align-center px-5"
      >
        <div class="d-flex align-center">
          <v-img class="bg-white py-3 mx-3" :src="job.image" width="70px" height="70px" />
        </div>
        <div>
          <div v-for="task in job.tasks">
            <h4>{{ task.title }}</h4>

            <p class="pl-2 text-white" v-for="sub in task.subtitle">
              {{ sub }}
            </p>
          </div>
        </div>
      </v-card>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import { experiences } from "~/informations";
const Props = defineProps<{ index: number }>();
const experience = experiences[Props.index];
</script>

<style scoped>
.main { 
  font-family: "Kanit", serif;
  font-size: 20px;
  .title {
    h1,h2,h3{
      line-height: 35px;
    color: white;
    text-decoration: none;
    text-align: start;
    }
   
    h1 {
      font-weight: 500;
    }
    h2{
      font-size: 34px;
    }
    h2,
    h3 {
      font-weight: 400;
    }
   
  } h4 {
      color: var(--title-color);
    }
}
.bg {
  background-color: var(--bg-color) !important;
  color: white !important;
}
.bg-white {
  background: none !important;
}
</style>
