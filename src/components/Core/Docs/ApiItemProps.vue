<template>
    <v-container class="pt-0">
        <v-row no-gutters class="component-parameters">

            <v-col cols="12"
                       sm="6"
                       md="3" class="mt-0 pa-0">

                    <div class="text-capitalize overline grey--text text--darken-3">name</div>
                    <span class="mono name">{{prop.name}}</span>
                </v-col>
                <v-col cols="6" md="2" class="text-xs-right">
                    <div class="text-capitalize overline grey--text text--darken-3">type</div>
                    <span class="mono">{{prop.type}}</span><!----></v-col>
                <v-col    md="7"  class="text-md-right">
                    <div class="text-capitalize overline grey--text text--darken-3">default</div><!---->
                    <span class="mono">{{prop.default}}</span>
                </v-col>
                <v-col cols="12" class="mt-2">
                    <div class="text-capitalize overline grey--text text--darken-3">description</div><!---->
                    <div class="markdown" v-html="prop.description">
                        <!-- <p>Applies specified color to the control - it can be the name of material color
                            (for example
                            <code>success</code> or
                            <code>purple</code>) or css color
                            (<code>#033</code> or <code>rgba(255, 0, 0, 0.5)</code>).
                            You can find list of built in classes on the
                            <a href="/styles/colors#material-colors"
                               class="markdown--link markdown--internal">
                                colors page<i class="v-icon mdi mdi-page-next"></i>
                            </a>.
                        </p>-->
                    </div>

                </v-col>
            <v-col cols="12" class="pa-0 mt-2 mb-0">
                <v-divider></v-divider>
            </v-col>

    </v-row>
    </v-container>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    @Component
    export default class ApiItemProps extends Vue {
        @Prop({
            type: Object,
            required: true,
        })
        public prop!:any

    }
</script>
<style scoped>

</style>
