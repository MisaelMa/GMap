<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div>
        {{inputText}}
          <v-autocomplete  :items="placesItem"
                           :cache-items="false"
                          @update:search-input="inputText = $event">
            <template v-slot:item="{ item }">

                <v-list-item-content>
                    <v-list-item-title >
                        {{item.description}}</v-list-item-title>
                    <v-list-item-subtitle v-text="item.symbol"></v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                    <v-icon>mdi-coin</v-icon>
                </v-list-item-action>
            </template>
        </v-autocomplete>
    </div>
</template>
<script lang="ts">
import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
@Component({
    name: 'GAutocomplete',
    props: {
        value: {
            type: String,
            default: undefined,
            required: false,
        },
    },
})
export default class GAutocomplete extends Vue {
    public inputText: string = 'aa';
    public placesItem: any = [];
    @Watch('inputText')
    public async search(){
        const service = await new google.maps.places.AutocompleteService();
        service.getQueryPredictions({ input: this.inputText }, this.findPlace);
    }
    public findPlace(data: any){
        this.placesItem = []
        for (let i = 0; i < data.length; i++) {
            this.placesItem.push(data[i])
        }
    }

}
</script>
