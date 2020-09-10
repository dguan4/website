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
            <h1 class="text-h1 font-weight-bold mb-4"> {{blogPost.title}} </h1>
          </v-col>
        </v-row>
      </v-parallax>

      <v-row
        justify="center"
        class="py-5 px-3"
        >
        <v-col
          class="px-5"
          md="12"
          cols="12">
          <div v-html="$md.render(blogPost.body)"></div>
        </v-col>
      </v-row>

  </v-container>
</template>

<script>
export default {
  async asyncData({ params, payload }) {
    if (payload) return { blogPost: payload };
    else
      return {
        blogPost: await require(`~/assets/content/blog/${params.blog}.json`)
      };
  }
};
</script>