<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      temporary
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      clipped-left
      app
    >
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <!-- <v-toolbar-title v-text="title" /> -->
      <logo />
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container fluid ma-0 pa-0>
        <nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>compare_arrows</v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; {{currentYear}} by David Guan</span>
      <v-spacer></v-spacer>
      <span>Built with Vuetify</span>
    </v-footer>
  </v-app>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  head() {
    return {
            script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    }
  },
  components: {
    Logo
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'home',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-post',
          title: "Blogs",
          to: '/blogs'
        },
        {
          icon: 'mdi-account',
          title: 'About Me',
          to: '/about'
        },
        {
          icon: 'mdi-email-edit',
          title: 'Contact Me',
          to: '/contact'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'David Guan',
      currentYear: ''
    }
  },
  created () {
    this.$vuetify.theme.dark = true
    this.currentYear = new Date().getFullYear()
  }
}
</script>
