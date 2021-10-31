<template>
  <div class="career-cta text-center lightBG py-12">
      <div class="font-x2b mb-5 __section_title">{{ section.title }}</div>
      <div class="mb-3 __section_subtitle">{{ section.subtitle }}</div>

      <v-btn depressed color="primary">{{ section.cta }}</v-btn>
  </div>
</template>

<script>
export default {
  props: {
    section: {
      type: Object,
      default: ()=> {}
    }
  }

}
</script>

<style>

</style>