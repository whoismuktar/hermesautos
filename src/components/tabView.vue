<template>
  <div class="tabs-view">
      <v-row justify="center">
          <v-col cols="3" v-for="(tab, index) in tabs" :key="index">
              <div class="d-flex align-start">
                  <v-icon color="primary" class="mr-3 mt-1">check_circle</v-icon>
                  <div>
                    <h2>{{ tab.title }}</h2>
                    <div>{{ tab.content }}</div>
                  </div>
              </div>
          </v-col>
      </v-row>
  </div>
</template>

<script>
export default {
    props: {
        tabs: {
            type: Array,
            defualt: ()=> []
        }
    }

}
</script>

<style>

</style>