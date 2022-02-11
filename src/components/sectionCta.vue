<template>
  <div class="career-cta text-center lightBG py-12">
    <div class="font-x2b mb-5 __section_title">{{ section.title }}</div>
    <div class="mb-3 __section_subtitle">{{ section.subtitle }}</div>

    <v-btn
      v-if="!section.external"
      depressed
      color="primary"
      :to="{ name: section.ctaAction, params: section.params }"
      >
        {{ section.cta }}
      </v-btn>

      <a v-else :href="section.ctaAction" target="_blank" class="v-btn v-btn--has-bg v-btn--router theme--light v-size--default primary">
        <span class="v-btn__content">{{ section.cta }}</span>
        <v-icon class="flip320 ml-2" size="14" color="white">exit_to_app</v-icon>
      </a>
  </div>
</template>

<script>
export default {
  props: {
    section: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style>
</style>