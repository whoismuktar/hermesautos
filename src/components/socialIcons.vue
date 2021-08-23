<template>
    <div class="d-flex">
        <span v-for="(icon, index) in socials" :key="index">
            <font-awesome-icon :icon="icon.icon" :color="color" class="mr-4" />
        </span>
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
              },
              {
                  icon: { prefix: 'fab', iconName: 'twitter'},
              },
              {
                  icon: { prefix: 'fab', iconName: 'instagram'},
              },
          ]
      }
    }
}
</script>

<style>

</style>