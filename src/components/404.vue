<template>
  <div class="brands-page page 404 notfound">
    <div
      style="min-height: 50vh"
      class="d-flex flex-column justify-center align-center"
    >
      <h2 class="text-center">
        <b>{{ content }}</b>
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      content: "404"
    }
  },
  created() {
    const pendingContent = this.$route.meta.pending;
    if (pendingContent) {
      this.content = "Coming Soon"
    }
  }
};
</script>

<style></style>
