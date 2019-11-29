<template>
  <v-footer
    dark
    height="auto"

  >
    <v-layout
      justify-center
    >
    <v-card
      flat
      tile
      class="white--text text-center"
      width="100%"
    >
      <v-card-text class="white--text pt-0 display-1">
        Hire us 
     </v-card-text>
      <v-card-text class="white--text pt-0 body-1 ">
        We're currently taking on new projekts. Would you like to discuss yours?
     </v-card-text>
      <v-card-text class="white--text pt-0 subheading">
        +44 (0) 2920 090 505
     </v-card-text>
      <v-card-text class="white--text pt-0 body-1">
        hello@oursite.com
     </v-card-text>


      <v-divider></v-divider>
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>
    </v-card>
    </v-layout>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook-box',
        'mdi-twitter',
        'mdi-google-plus',
        'mdi-linkedin',
        'mdi-instagram'
      ]
    })
  }
</script>