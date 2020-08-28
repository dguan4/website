<template>
  <v-container column justify-center align-center>
    <h1 class="text-center">Contact Me</h1>

    <!-- <v-expansion-panels class="">
      <v-expansion-panel v-for="(contact, idx) in contacts" :key="idx">
        <v-expansion-panel-header expand-icon="mdi-menu-down" v-html="contact.title">
          
        </v-expansion-panel-header>
        <v-expansion-panel-content v-html="contact.description">

        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels> -->

    <v-row>
      <v-col v-for="(contact, idx) in contacts" :key="idx" cols="12" md="4">
        <v-item-group>
          <v-item v-slot:default="{ active, toggle }">
            <v-card
              :color="active ? 'blue darken-4' : 'grey darken-4'"
              class="d-flex align-center"
              height="200"
              @click="toggle"
            >
              <v-scroll-y-transition>
                <div
                  v-if="!active"
                  class="display-3 flex-grow-1 text-center"
                  v-html="contact.title"
                ></div>
              </v-scroll-y-transition>
              <v-scroll-y-transition>
                <div
                  v-if="active"
                  class="display-5 flex-grow-1 text-center"
                  v-html="contact.description"
                ></div>
              </v-scroll-y-transition>
            </v-card>
          </v-item>
        </v-item-group>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      contacts: [
        {
          title: "Email",
          description: "david@guan.codes"
        },
        {
          title: "LinkedIn",
          description: "https://www.linkedin.com/in/dguan4"
        },
        {
          title: "GitHub",
          description: "https://www.github.com/dguan4"
        }
      ]
    };
  }
};
</script>
