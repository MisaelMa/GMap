<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div>

    <v-navigation-drawer
            v-model="drawer"
            clipped
            app
    >
        <v-list dense>
            <template v-for="route of routes">
                <v-list-item v-if="!route.parent">
                    <v-list-item-icon>
                        <v-icon>home</v-icon>
                    </v-list-item-icon>

                    <v-list-item-title>Home</v-list-item-title>
                </v-list-item>


                <v-list-group
                        v-else
                        :prepend-icon="route.icon"
                        value="true"
                >
                    <template v-slot:activator>
                        <v-list-item-title>{{route.name}}</v-list-item-title>
                    </template>


                    <template  v-for="children of route.children">

                        <v-list-item v-if="!children.parent" :to="children.to">
                            <v-list-item-icon>
                            <!--    <v-icon>{{children.icon}}</v-icon>-->
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title>{{children.name}}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>

                        <v-list-group v-else
                                no-action
                                sub-group
                                value="true"
                        >
                            <template v-slot:activator>
                                <v-list-item-content>
                                    <v-list-item-title>Admin</v-list-item-title>
                                </v-list-item-content>
                            </template>

                            <v-list-item
                                    v-for="(admin, i) in admins"
                                    :key="i"
                                    link
                            >    <v-list-item-icon>
                                    <v-icon v-text="admin[1]"></v-icon>
                                 </v-list-item-icon>
                                <v-list-item-title v-text="admin[0]"></v-list-item-title>

                            </v-list-item>
                        </v-list-group>
                        </template>
                </v-list-group>
            </template>
        </v-list>
    </v-navigation-drawer>

    <v-app-bar
            app
            clipped-left
            style="    background: linear-gradient(87deg,#2dce89,#2dcecc)!important;"
            dark
    >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <img :src="require('@/assets/gmap.svg')" height="40" width="40" />
        <v-toolbar-title>GMap</v-toolbar-title>
    </v-app-bar>
    </div>
</template>
<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class Toolbar extends Vue {
        public drawer: Boolean= true;
        public admins: any = [
            ['Management', 'people_outline'],
            ['Settings', 'settings'],
            ];
        public cruds:  any =[
            ['Create', 'add'],
            ['Read', 'insert_drive_file'],
            ['Update', 'update'],
            ['Delete', 'delete'],
            ];
        public routes: any = [
            {
                name:'Components',
                icon:'mdi-view-dashboard',
                parent: false,
                to:'',
                children:[]
            },
            {
                name:'Components',
                icon:'mdi-view-dashboard',
                parent: true,
                to:'',
                children:[
                    {
                        name:'Components',
                        icon:'mdi-view-dashboard',
                        parent: true,
                        to:'',
                        children:[]
                    },
                    {
                        name:'Maps',
                        icon:'mdi-view-dashboard',
                        parent: false,
                        to:'/components/maps',
                        children:[],
                    },
                    {
                        name:'Markers',
                        icon:'mdi-view-dashboard',
                        parent: false,
                        to:'/components/markers',
                        children:[],
                    },
                    {
                        name:'InfoWindow',
                        icon:'mdi-view-dashboard',
                        parent: false,
                        to:'/components/infowindow',
                        children:[],
                    }
                ]
            }
        ]
    }
</script>

<style scoped>

</style>
