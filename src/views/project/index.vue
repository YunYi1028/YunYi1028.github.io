<template>
	<div class="page" id="page">
		<NavBar ref="nav" :isActive_id="isActive"></NavBar>
	</div>
</template>

<script>
import NavBar from '@/components/NavBar/NavBar.vue'

export default {
	name: 'index',
	components: {
		NavBar
	},
	data() {
		return {
			isActive: 3
		};
	},
	methods: {

	},
}
</script>

<style type="text/css">
@import url("./Index.css");
</style>
