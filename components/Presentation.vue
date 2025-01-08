<template>
   <div class="pa-md-5 main">
    <v-card
      class="d-lg-flex d-block"
      min-height="500px"
      variant="flat"
      style="width: 80%"
    >
      <div
        class="infos-container d-flex flex-lg-row flex-column align-center justify-space-around pa-2 pa-md-16"
      >
        <div
          class="w-50 mt-5 mt-md-0 d-flex flex-column align-center justify-center"
        >
          <v-card
            class="photo"
            max-width="340px"
            max-height="340px"
            variant="flat"
          >
            <v-img
              class="bg-white mb-16"
              src="/profile.jpeg"
              width="380px"
            ></v-img>
          </v-card>
          <p class="font-weight-bold mt-4" style="color: #1e375a">
            {{ informations.name }}
          </p>
          <p>{{ informations.job }}</p>
          <div class="d-flex my-5">
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
              <p style="font-size: 18px" class="">
                {{ informations.about }}
              </p>
              <v-btn base-color=" bg-blue-lighten-2 mt-4">
                <mdi-icon
                  icon="mdiTrayArrowDown"
                  color="white"
                  size="1.2rem"
                  class="mr-2"
                ></mdi-icon>
                <span>Download CV</span>
              </v-btn>
            </div>

            <div
              class="d-flex flex-md-row flex-column mt-4 justify-space-between"
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
                      <h4>{{ education.title }}</h4>
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
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .infos-container {
    color: rgba(30, 55, 90, 0.7);

    @media (max-width: 960px) {
      border: none;
    }
    border: 2px solid #1e375a24;
    h3 {
      font-size: 20px;
      margin-bottom: 10px;
      color: #1e375a;
      font-weight: bolder;
    }
  }

  

 
} 
.research_card {
    font-family: "Kanit", sans-serif;
    width: 80%;
    .research_left {
      padding: 20px 0;

      h2 {
        font-weight: 500;
        font-size: 32px;
        margin-bottom: 20px;
      }
      p {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
          sans-serif;
        margin-bottom: 30px;
      }
      
    }
   
  }
.research_right {
      border-radius: 10px;
      overflow: hidden;
      max-width: 500px;
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