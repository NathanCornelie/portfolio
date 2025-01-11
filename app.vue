<script setup lang="ts">
import Presentation from './components/Presentation.vue';

</script>

<template>
  <NuxtLayout>
    <v-app class="app ">
      <Presentation /> 
      <Projets />
      <Experiences />
    </v-app>
  </NuxtLayout>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
:root {
    /* --bg-color: #A1C6EA; */
    --bg-color: #a1c6eade;
    --title-color: rgba(5,155,255,1);
    --big-title: #004c83;
}
.app{
  background-color: var(--bg-color)  !important;
  font-family: "Kanit",serif;
}
h2 {
  font-weight: 0;
  font-size: 32px;
  color: var(--big-title);
  font-weight: 700;
  font-size: 42px;
  text-decoration: underline;
  text-align: center;
}
</style>