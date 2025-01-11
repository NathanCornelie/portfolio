<template>
  <div class="my-4 d-flex flex-column align-center" style="font-family:'Kanit',serif;">
    <h2 >Work Experiences</h2>
    <div class="px-8 pt-4 d-flex justify-center">
      <div
        
        class="d-flex flex-column  justify-center "
      >
        <div v-for="(exp, i) in experiences" class="d-flex ">
          <ExperienceCard class="container" :index="i" />
        </div>
      </div>
      <!-- <div style="width: 40%" class="d-flex flex-column align-start ml-5">
        <div v-for="(exp, i) in experiences">
          <ExperienceCard
            style="margin-top: 300px"
            v-if="i % 2 == 1"
            class="container"
            :index="i"
          />
        </div> -->
      <!-- </div> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { experiences } from "~/informations";
</script>

<style scoped>

.container {
 
  display: flex;
  align-items: center;
}
h1 {
  font-weight: 700;
  font-size: 32px;
}

h3 {
  font-weight: 500;
  font-size: 20px;
}
</style>
