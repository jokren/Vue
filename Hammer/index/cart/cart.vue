<template>
    <div>
        <div :style="{display:bool?'block':'none'}">
            <xcart></xcart>
        </div>
        <div :style="{display:!bool?'block':'none'}">
            <xempty></xempty>
        </div>
    </div>
</template>

<script>
	import xcart from "./content.vue"
	import xempty from "./empty.vue"
	export default {
		components:{
			xcart,
			xempty
		},
		computed: {
			bool() {
				return this.$store.state.bool
			}
		}
	}
</script>

<style scoped>
</style>