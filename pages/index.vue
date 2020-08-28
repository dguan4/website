<template>
  <v-container
    column
    justify-center
    align-center
    fluid
    ma-0
    pa-0
  >
      <v-parallax
        dark
        src="/chicago-skyline.jpg"
        class="hero-image">
        <v-row
          align="center"
          justify="center"
        >
          <v-col class="text-center" cols="12">
            <h1 class="text-h1 font-weight-bold mb-4"> David Guan </h1>
            <h4 class="text-subtitle-1 font-weight-bold"> Software Developer </h4>
          </v-col>
        </v-row>
      </v-parallax>

      <v-row
        justify="center"
        class="py-5 px-3"
        >
        <v-col v-for="card in cards"
          :key="card"
          class="px-2"
          md="4"
          cols="12">
          <v-card 
            class="card"
            >
            <v-card-title v-html="card.title"></v-card-title>
            <v-card-text v-html="card.description"></v-card-text>
            <v-card-actions>
              <v-btn
                small
                link
                color="green darken-4"
                :href="card.url"
                right
                absolute>
                Go!
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

  </v-container>
</template>

<style lang="scss">
.hero-image {
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 10px 60vw rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
}
</style>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  mounted() {
    // this.sleep(50000).then(() => {
    //   console.log("test")
    // })
    
  },
  data () {
    return {
      cards: [
        { 
          title: "Personal Blog",
          description: "Built with Nuxt.js and Netlify CMS, hosted on Netlify",
          url: "https://github.com/dguan4/blog"
        },
        {
          title: "TFT App",
          description: "Built with .NET CORE and React.js, simply app to randomize team comps for me to play in the game TeamFight Tactics",
          url: "https://github.com/dguan4/TFTapp"
        },
        {
          title: "This Website!",
          description: "The current website you're on right now, all the code is done in Nuxt.js and the css framework is Vuetify. Check out Vuetify <a href='https://vuetifyjs.com'>here</a>",
          url: "https://github.com/dguan4/website"
        }
      ]
    }
  },
  methods: {
    sleep (time) {
      return new Promise((resolve) => setTimeout(resolve, time));
    }
  }
}
</script>
