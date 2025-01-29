<template>
  <div class="main">
    <v-card
      class=" d-block bg-transparent w-100 mt-6"
      min-height="500px"
      elevation="0"
      style="width: 80%"
    >
      <div style="text-align: center;" class="mt-6 mt-lg-0" >
        
          <span  class="name">CORNELIE Nathan</span>
       
        
      </div>
      <div
        class="infos-container d-flex flex-lg-row flex-column align-center justify-space-around pa-2 px-md-16"
      >
        <div
          class="w-50 mt-5 d-lg-flexmt-md-0 d-flex flex-column align-center justify-center"
        > 
          <div
         
          v-if="width >= 600"
            class="photo bg-transparent"
            max-width="360px"
            max-height="360px"
            variant="flat"
          >
            <v-img class="mb-4" src="/profile.png" width="380px"></v-img>
          </div>

          <p style="font-size: 24px">{{ informations.job }}</p>
          <div class="d-flex my-1">
            <a :href="links.linkedin"
              ><v-img src="/linkedin_logo.png" width="40px" class="mx-2"
            /></a>
            <a :href="links.github"
              ><v-img src="/github_logo.png" width="40px" class="mx-2"
            /></a>
          </div>
        </div>
        <div class="d-flex flex-column align-center justify-center">
          <v-card
            class="py-lg-10 pl-lg-10 bg-transparent text-start d-flex flex-column align-center justify-center"
            :elevation="0"
            ><div class="mb-4">
              <h3>About Me</h3>
              <p class="">
                {{ informations.about }}
              </p>
              <v-btn base-color="  mt-4" style="background-color: #0094fe">
                <mdi-icon
                  icon="mdiTrayArrowDown"
                  color="white"
                  size="1.2rem"
                  class="mr-2"
                ></mdi-icon>
                <a href="CORNELIE_Nathan.pdf" download="CV_CORNELIE_Nathan.pdf" style="color:white;text-decoration: none;">Download CV</a>
              </v-btn>
            </div>

            <div
              class="d-flex w-100 flex-md-row flex-column mt-4 justify-space-between"
            >
              <v-card class="bg-transparent text-start w-md-33" :elevation="0">
                <h3>Interest</h3>

                <div>
                  <li v-for="interest in informations.interest">
                    {{ interest }}
                  </li>
                </div>
              </v-card>

              <v-card
                class="bg-transparent text-start mt-4 mt-md-0 w-md-66"
                :elevation="0"
              >
                <h3>Education</h3>

                <div>
                  <div
                    v-for="(education, index) in informations.educations"
                    class="d-flex align-center"
                  >
                    <div class="mr-2">
                      <mdi-icon icon="mdiSchool" size="1.6rem"></mdi-icon>
                    </div>
                    <div>
                      <h4 style="color:#0094fe">{{ education.title }}</h4>
                      <p class="ml-2">{{ education.school }}</p>
                    </div>
                  </div>
                </div>
              </v-card>
            </div>
          </v-card>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { informations, links } from "~/informations";
import Experiences from "./Experiences.vue";

const width = ref(0);
let height = 0;

onMounted( async ()=>{
  await nextTick()
  updateSize()
})
  const updateSize = () => {
    
    if(window){
      width.value = window.innerWidth;
    height = window.innerHeight;
    }
    
  };

  onMounted(() => {
    window.addEventListener('resize', updateSize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', updateSize);
  });

</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");
.main {
  font-family: "Kanit", serif;
  font-size: 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .name {
    font-family: "Bebas Neue", serif;
    font-weight: 600;
    text-align: center;
    line-height: 90px;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 90px;
    background-image: linear-gradient(
      146deg,
      #003459 0%,
      rgba(30, 29, 226, 1) 20%,
      rgba(5, 155, 255, 1) 67%,
      rgb(113, 178, 235) 100%
    );
  }
  .infos-container {
    color: white !important;
    h4 {
      /* color: #fa9344; */
    }

    @media (max-width: 960px) {
      border: none;
    }
    h3 {
      font-size: 24px;
      margin-bottom: 10px;
      color: var(--big-title);
      font-weight: bolder;
    }
  }
}
.pub {
  &:hover {
    cursor: pointer;
  }
  .pub-title:hover {
    color: #2e7d32;
  }

  .pub-description {
    font-size: 14px;
  }
}
button {
  font-family: "Kanit", sans-serif;
  span {
    color: white;
    font-weight: 700;
  }
}
</style>
