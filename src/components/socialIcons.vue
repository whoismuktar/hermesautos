<template>
    <div class="d-flex">
        <v-btn plain v-for="(icon, index) in socials" :key="index" class="socials ma-0 pa-0" :href="icon.path" target="_blank">
            <font-awesome-icon :icon="icon.icon" :color="color" class="mr-4" />
        </v-btn>
    </div>
</template>

<script>
export default {
    props: {
        color: {
            type: String,
            default: "white"
        }
    },
  data() {
      return {
          socials: [
              {
                  icon: { prefix: 'fab', iconName: 'facebook-square'},
                  path: "https://www.facebook.com/hermesautos/",
              },
              {
                  icon: { prefix: 'fab', iconName: 'twitter'},
                  path: "https://www.twitter.com/hermesautos/",
              },
              {
                  icon: { prefix: 'fab', iconName: 'instagram'},
                  path: "https://www.instagram.com/hermesautos/",
              },
          ]
      }
    }
}
</script>

<style>

</style>