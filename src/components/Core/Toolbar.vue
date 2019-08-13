<template>
    <div>

    <v-navigation-drawer
            v-model="drawer"
            clipped
            app
    >
        <v-list dense>
            <v-list-item>
                <v-list-item-icon>
                    <v-icon>home</v-icon>
                </v-list-item-icon>

                <v-list-item-title>Home</v-list-item-title>
            </v-list-item>

            <v-list-group
                    prepend-icon="account_circle"
                    value="true"
            >
                <template v-slot:activator>
                    <v-list-item-title>Users</v-list-item-title>
                </template>

                <v-list-group
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

                <v-list-group
                        sub-group
                        no-action
                >
                    <template v-slot:activator>
                        <v-list-item-content>
                            <v-list-item-title>Actions</v-list-item-title>
                        </v-list-item-content>
                    </template>
                    <v-list-item
                            v-for="(crud, i) in cruds"
                            :key="i"
                            @click=""
                    >    <v-list-item-action>
                            <v-icon v-text="crud[1]"></v-icon>
                         </v-list-item-action>
                        <v-list-item-title v-text="crud[0]"></v-list-item-title>

                    </v-list-item>
                </v-list-group>
            </v-list-group>
        </v-list>
    </v-navigation-drawer>

    <v-app-bar
            app
            clipped-left
            color="indigo"
            dark
    >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Application</v-toolbar-title>
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
    }
</script>

<style scoped>

</style>
