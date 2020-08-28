<template>
  <v-container
    column
    justify-center
    align-center
  >
    <h1 class="text-center"> About Me </h1>
    <v-timeline :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item
        color="blue darken-1"
        fill-dot
        v-for="(item, idx) in timeline"
        :key="idx"
      >
        <template v-slot:opposite>

        </template>
        <v-card>
          <v-card-title class="blue darken-1">
            <v-icon
              dark
              size="42"
              class="mr-4"
            >
              {{ item.icon }}
            </v-icon>
            <h2 class="display-1 white--text font-weight-light" v-html="item.title">  </h2>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col cols="12" md="10" v-html="item.description">
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      timeline: [
        {
          icon: "mdi-timeline-clock",
          title: "How I Got Into Coding",
          description: "Started out in high school and took an intro to computer science class. At one point, the teacher of that class had us do some coding challenges on a website using Java and I got really into it. I started doing these challenges at home, things that were like random simple problems like removing a letter from a string or reordering things. Eventually, I ended up taking the AP Computer Science test and absolutely failed it. Reading code was so much harder than just writing code from scratch, as I soon grew to realize. My teacher then told me I should apply to Computer Science rather than Computer Engineering which was my original choice."
        },
        {
          icon: "mdi-timeline-clock",
          title: "College and CS",
          description: "Eventually, I had applied to various colleges and got accepted to UIUC's College of Engineering for the Computer Science field. My teacher recommended me to go to UIUC because of their engineering courses being at the top. I decided to go for it and struggled through my undergrad years in simply developing websites. I have a few projects in my GitHub that I can show here for random class projects I did during that time."
        },
        {
          icon: "mdi-timeline-clock",
          title: "My First Internship",
          description: "During my Junior year, I had applied for internships at various companies and landed at DuPont Pioneer over in Johnston, IA. I've never traveled by myself before and ended up having an amazing time over in Iowa where I learned a ton about web development and agile processes in general. I learned a lot of Angular, toolkits like Gulp, and a little bit about deployment processes with Jenkins and various AWS tools. Needless to say a lot of these flew over my head but they had said it felt like I was part of the team even though I was only there for like 3 months, so that counts for something right?"
        },
        {
          icon: "mdi-timeline-clock",
          title: "My First Job",
          description: "In between that and my senior year I did participate in various other side jobs where I worked on some web apps for another company. One in particular was Good Tree Capital over <a href='https://www.goodtree.capital/'>here</a>. I started using more Angular and using bootstrap and other CSS frameworks to scaffold out pages since I didn't know how to do CSS very well at the time. I still don't think I'm great at it but I can manage. Eventually I wanted to use Nuxt for their site and ended up building a good portion of their application tool with Nuxt.js. Finally, I started working at <a href='https://www.onenorth.com'>One North Interactive</a> after I graduated where I currently work and do code primarily in the backend with C# and .NET MVC. However I still work on a lot of front end stuff using Vue/HTML/SCSS and all that. It's been fun so far and I'm looking forward to seeing where the future takes me!"
        }
      ]
    }
  }
}
</script>