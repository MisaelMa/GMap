<template>
    <v-card>
        <v-toolbar flat color="primary" dark>
            <v-toolbar-title>{{doc.name}}</v-toolbar-title>
        </v-toolbar>
        <v-tabs vertical>
            <v-tab class="ma-0 pa-0">
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
                    <v-card-text class="ScrollStyle" style="max-height: 400px">
                        <ApiItemProps v-for="prop of doc.props" :prop="prop"></ApiItemProps>
                    </v-card-text>
                </v-card>
            </v-tab-item>
            <v-tab-item>
                <v-card flat>
                    <v-card-text>
                        <p>
                            Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis
                            tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris
                            ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt
                            non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
                        </p>

                        <p>
                            Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante
                            convallis tellus, vitae iaculis lacus elit id tortor. Proin viverra, ligula sit amet
                            ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In hac
                            habitasse platea dictumst. Fusce ac felis sit amet ligula pharetra condimentum.
                        </p>

                        <p>
                            Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a
                            libero. Nam commodo suscipit quam. In consectetuer turpis ut velit. Sed cursus turpis vitae
                            tortor. Aliquam eu nunc.
                        </p>

                        <p>
                            Etiam ut purus mattis mauris sodales aliquam. Ut varius tincidunt libero. Aenean viverra
                            rhoncus pede. Duis leo. Fusce fermentum odio nec arcu.
                        </p>

                        <p class="mb-0">
                            Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget,
                            vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis,
                            dictum sed, iaculis a, condimentum nec, nisi.
                        </p>
                    </v-card-text>
                </v-card>
            </v-tab-item>
            <v-tab-item>
                <v-card flat>
                    <v-card-text class="ScrollStyle" style="max-height: 400px">
                        <ApiItemEvents v-for="event of doc.events" :prop="event"></ApiItemEvents>
                    </v-card-text>
                </v-card>
            </v-tab-item>
        </v-tabs>
    </v-card>
</template>
<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import ApiItemProps from '@/components/Core/Docs/ApiItemProps.vue';
    import ApiItemEvents from '@/components/Core/Docs/ApiItemEvents.vue';

    @Component({
        components: {
            ApiItemProps,
            ApiItemEvents
        },
    })
    export default class ApiDoc extends Vue {
        @Prop({
            type: Object,
            required: true,
        })
        public doc!:any
    }
</script>

<style lang="sass">
    .ScrollStyle
        max-height: 350px
        overflow-y: scroll

    .component-parameters
        font-size: 14px
        p
            margin-bottom: 0
            color: rgba(0, 0, 0, 0.87)
        .mono
            font-family: 'Roboto Mono', monospace
            font-size: 14px
            font-weight: bold
            color: rgba(0, 0, 0, 0.87)

        .header
            font-family: 'Roboto Mono', monospace
            font-size: 0.8rem
        .justify
            text-align: justify
        .name
            color: #DD2C00
            font-weight: bold
</style>
