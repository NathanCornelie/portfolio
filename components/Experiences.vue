<template>
  <div class=" my-4 d-flex flex-column align-center">
    <p style="font-weight: 0; font-size: 32px">Work Experiences</p>
    <div class="pa-8 d-flex justify-center">
      <div
        style="width: 40%"
        class="d-flex flex-column align-end justify-center mr-5"
      >
        <div v-for="(exp, i) in experiences" class="d-flex justify-end">
          <ExperienceCard class="container" v-if="i % 2 == 0" :index="i" />
        </div>
      </div>
      <div style="width: 40%" class="d-flex flex-column align-start ml-5">
        <div v-for="(exp, i) in experiences">
          <ExperienceCard
            style="margin-top: 300px"
            v-if="i % 2 == 1"
            class="container"
            :index="i"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { experiences } from "~/informations";
</script>

<style>
.container {
  height: 620px;
  display: flex;
  align-items: center;
}
h1 {
  font-weight: 700;
  font-size: 32px;
}
h2 {
  font-weight: 500;
  font-size: 26px;
}
h3 {
  font-weight: 500;
  font-size: 20px;
}
</style>
