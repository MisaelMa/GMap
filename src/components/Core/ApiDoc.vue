<template>
    <v-card>
        <v-toolbar flat color="primary" dark>
            <v-toolbar-title>GMAP</v-toolbar-title>
        </v-toolbar>
        <v-tabs vertical>
            <v-tab>
                 PROPS
            </v-tab>
            <v-tab>
                SLOTS
            </v-tab>
            <v-tab>
                EVENTS
            </v-tab>

            <v-tab-item>
                <v-card flat>
                    <v-card-text>
                        <div class="layout api-item pa-2 wrap"><div class="flex xs6 md3"><div class="text-capitalize overline grey--text text--darken-3">name</div><span class="mono name">color</span><!----></div><div class="flex xs6 md2 text-xs-right"><div class="text-capitalize overline grey--text text--darken-3">type</div><span class="mono">string</span><!----></div><div class="flex xs12 md7 text-md-right"><div class="text-capitalize overline grey--text text--darken-3">default</div><!----><span class="mono">undefined</span></div><div class="flex xs12 mt-2"><div class="text-capitalize overline grey--text text--darken-3">description</div><!----><div class="markdown"><p>Applies specified color to the control - it can be the name of material color (for example <code>success</code> or <code>purple</code>) or css color (<code>#033</code> or <code>rgba(255, 0, 0, 0.5)</code>). You can find list of built in classes on the <a href="/styles/colors#material-colors" class="markdown--link markdown--internal">colors page<i class="v-icon mdi mdi-page-next"></i></a>.</p>
                        </div></div><div class="flex xs12 mt-2"><!----><!----><!----></div></div>
                        <p>
                            Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Aliquam lobortis. Aliquam lobortis. Suspendisse non nisl sit amet velit hendrerit rutrum.
                        </p>

                        <p class="mb-0">
                            Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
                        </p>
                    </v-card-text>
                </v-card>
            </v-tab-item>
            <v-tab-item>
                <v-card flat>
                    <v-card-text>
                        <p>
                            Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
                        </p>

                        <p>
                            Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In hac habitasse platea dictumst. Fusce ac felis sit amet ligula pharetra condimentum.
                        </p>

                        <p>
                            Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Nam commodo suscipit quam. In consectetuer turpis ut velit. Sed cursus turpis vitae tortor. Aliquam eu nunc.
                        </p>

                        <p>
                            Etiam ut purus mattis mauris sodales aliquam. Ut varius tincidunt libero. Aenean viverra rhoncus pede. Duis leo. Fusce fermentum odio nec arcu.
                        </p>

                        <p class="mb-0">
                            Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
                        </p>
                    </v-card-text>
                </v-card>
            </v-tab-item>
            <v-tab-item>
                <v-card flat>
                    <v-card-text>
                        <p>
                            Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
                        </p>

                        <p class="mb-0">
                            Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
                        </p>
                    </v-card-text>
                </v-card>
            </v-tab-item>
        </v-tabs>
    </v-card>
</template>
 <script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    @Component
    export default class ApiDoc extends Vue {

    }
</script>

<style scoped>

</style>
