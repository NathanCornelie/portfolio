<template>
  <div class="">
    <v-card class=" py-3" >
      <!-- desc -->
      <v-card variant="flat"  class="d-flex pa-4">
        <div class="mr-4 d-flex align-center">
          <v-img
            class="bg-white "
            :src="experience.logo"
            width="200px"
          ></v-img>
        </div>

        <div>
          <h1>{{experience.title}}</h1>
          <h2>{{experience.company}}</h2>
          <h3>{{experience.dates}}</h3>
        </div>
      </v-card>
      <v-divider  class="pb-4"></v-divider>
      <!-- content -->
      <v-card variant="flat" v-for="job in experience.jobs" class="d-flex align-center px-5">
        <div class="d-flex align-center">
          <v-img class="bg-white py-3 mx-3" :src="job.image" width="80px" />
        </div>
        <div>
          <div v-for="task in job.tasks">
            <h4>{{ task.title }}</h4>

            <p class="pl-2 text-grey" v-for="sub in task.subtitle">{{ sub }}</p>
          </div>
        </div>
      </v-card>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import { experiences } from "~/informations";
const Props = defineProps<{index:number}>()
const experience = experiences[Props.index]
</script>

<style></style>