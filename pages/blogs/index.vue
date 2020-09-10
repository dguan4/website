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
            <h1 class="text-h1 font-weight-bold mb-4"> Blogs </h1>
          </v-col>
        </v-row>
      </v-parallax>

      <v-row
        justify="center"
        class="py-5 px-3"
        >
        <v-col v-for="(card, idx) in blogPosts"
          :key="idx"
          class="px-2"
          md="4"
          cols="12">
          <v-card 
            class="card"
            >
            <v-card-title v-html="card.title"></v-card-title>
            <v-card-subtitle v-html="getDate(card.date)"></v-card-subtitle>
            <v-card-text v-html="card.description"></v-card-text>
            <v-card-actions>
              <v-btn
                small
                link
                color="green darken-4"
                :to="getBlogSlug(card.slug)"
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
// .hero-image {
//   &::after {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     box-shadow: inset 0 0 10px 60vw rgba(0, 0, 0, 0.3);
//     z-index: 1;
//   }
// }
</style>

<script>
export default {
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts;
    },
    blogLanding() {
      return this.$store.state.blogLandingPost
    }
  },
  methods: {
    getBlogSlug(slug) {
      return `/blogs/${slug}`;
    },
    goToBlog(slug) {
      this.$router.push(this.getBlogSlug(slug))
    },
    getDate(dateTime) {
      const blogDate = new Date(dateTime)
      const offset = blogDate.getTimezoneOffset()
      const myDate = new Date(blogDate.getTime() + (offset*60*1000))
      return `${myDate.getMonth()+1}/${myDate.getDate()}/${myDate.getFullYear()}` 
    }
  }
}
</script>