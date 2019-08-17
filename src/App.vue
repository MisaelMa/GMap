<template>
  <div id="app">
    <v-app>
      <Toolbar/>
      <v-content>
        <v-container>
          <router-view></router-view>
        </v-container>
      </v-content>
    </v-app>
  </div>

</template>
<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import Toolbar from '@/components/Core/Toolbar.vue';

  @Component({
    components: {
      Toolbar,
    }
  })
  export default class App extends Vue {
    public drawer: Boolean = false;
  }
</script>
<style lang="scss">
  #map {
    height: 100%;
  }
  /* Optional: Makes the sample page fill the window. */
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }


</style>
