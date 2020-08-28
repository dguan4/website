<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
    >
      <v-parallax
        dark
        src="/chicago-skyline.jpg">
        <v-row
          align="center"
          justify="center"
          no-gutters="true"
        >
          <v-col class="text-center" cols="12">
            <h1 class="display-1 font-weight-thin mb-4"> David Guan </h1>
            <h4 class="subheading"> Software Developer </h4>
          </v-col>
        </v-row>
      </v-parallax>
    </v-flex>

  </v-layout>
</template>

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
  methods: {
    sleep (time) {
      return new Promise((resolve) => setTimeout(resolve, time));
    }
  }
}
</script>
