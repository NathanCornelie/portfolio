<template>
  <div class="my-4 d-flex flex-column align-center w-100" style="font-family:'Kanit',serif;">
    <h2 >Work Experiences</h2>
    <div class="px-lg-8 pt-4 d-lg-flex d-block justify-center w-100" style="max-width: 100%;">
      <div
        class="d-flex flex-column  justify-center "
      >
        <div v-for="(exp, i) in experiences" class="d-flex w-100 ">
          <ExperienceCard class="container" :index="i" />
        </div>
      </div>
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
