<template>
  <div class="how-it-works">
      <v-row no-gutters class="mt-0" align="center">
        <v-col cols="12" sm="10">
        <div class="gradient lightBG-v d-flex align-center">
            <div class="__wrapper px-3">
                <div class="font-x2b">{{ title }}</div>

                <div>
                    <div>
                    <ol>
                        <li class="st-Li" v-for="(list, index) in lists" :key="index">
                            <h4>{{ list.title }}</h4>
                            <div>{{ list.content }}</div>
                            <ul v-if="list.innerLists">
                                <li v-for="(innerList, index2) in list.innerLists" :key="index2">
                                    {{ innerList }}
                                </li>
                            </ul>
                        </li>
                    </ol>
                    </div>
                </div>
            </div>
        </div>
        </v-col>
        <v-col cols="12" sm="2" class="howItWorksBG-wrapper">
        <div class="howItWorksBG">
            <v-img contain width="450" position="center" :src="media" alt="Hermes Autos popular brands"></v-img>
        </div>
        </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String
        },
        lists: {
            type: Array
        },
        media: {
            type: String
        }
    }
}
</script>

<style lang="scss" scoped>
.__wrapper {
    width: 50%;
}
.howItWorksBG-wrapper {
    display: flex;
    align-items: center;
    position: relative;
}
.howItWorksBG {
    position: absolute;
    left: -190px;
}
@media (max-width: 960px) {
    .howItWorksBG {
        position: relative;
        left: unset;
    }
    .__wrapper {
        width: 100%;
    }
}
</style>
