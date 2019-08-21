<template>
    <div class="layout api-item pa-2 wrap component-parameters">
        <div class="flex xs12">
            <div class="text-capitalize overline grey--text text--darken-3">name</div>
            <span class="mono name">{{prop.name}}</span><!----></div>
        <div class="flex xs12 mt-2">
            <div class="text-capitalize overline grey--text text--darken-3">description</div><!---->
            <div class="markdown">
                {{prop.description}}
            </div>
        </div>
        <div class="flex xs12 mt-2">
            <div class="text-capitalize overline grey--text text--darken-3">value</div><!---->
            <div id="markup-example" class="v-markup" style="height: 50px">
                {{prop.value}}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component
    export default class ApiItemEvents extends Vue {
        @Prop({
            type: Object,
            required: true,
        })
        public prop!: any;

    }
</script>

<style lang="sass">
    .v-markup
        align-items: center
        box-shadow: none
        display: flex
        border-radius: 4px
        position: relative
        overflow-x: auto
        overflow-y: hidden
        margin-bottom: 16px
        background: #2d2d2d
        color: #fff

        pre, code
            margin: 0
            background: transparent
            font-family: 'Inconsolata', monospace
            font-weight: 300
            font-size: 15px
            line-height: 1.55

        code
            position: relative
            box-shadow: none
            overflow-x: auto
            overflow-y: hidden
            word-break: break-word
            flex-wrap: wrap
            align-items: center
            vertical-align: middle
            white-space: pre-wrap

            &:before
                display: none

        &__copied
            position: absolute
            top: 12px
            right: 75px

        &__copy,
        &__edit
            position: absolute
            top: 0
            cursor: pointer
            width: 25px
            height: 25px
            z-index: 1

        &__copy
            right: 0

        &__edit
            right: 36px

            > a
                color: inherit
                text-decoration: none

        a.v-markup__filename
            text-decoration: none
            position: absolute
            bottom: 0
            right: 0
            padding: 8px 12px 8px 8px
            font-size: 12px
            color: rgba(#fff, .56)

        &:after
            position: absolute
            right: 10px
            transition: opacity .2s ease-in
            content: attr(data-lang)
            color: rgba(#000, 0.3)
            font-size: 1rem
            font-weight: 700
            top: 5px

        &:hover
            .v-markup__copy,
            .v-markup__edit
                .v-icon
                    opacity: 1

                &:after
                    opacity: 0

        .v-markup__copy,
        .v-markup__edit
            .v-icon
                color: inherit
                position: absolute
                right: 0
                transition: opacity .2s ease-in
                font-size: 1.5rem
                opacity: 0
                top: 0
                width: 50px
                height: 50px
                z-index: 4
</style>

