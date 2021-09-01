<template>
	<div class="page">
		<NavBar />
		<div class="section section1">
			<div class="centent centent1">
				<div class="section1_left">
					<div class="section1_left_1">
						<div class="section1_left_title">Yunyi's personal website</div>
						<div class="section1_left_subtitle">此网站用来展示云轶的个人信息和工作状况等</div>
					</div>
				</div>
				<div class="section1_right">
					<div class="section1_right_cvg_div">
						<div class="section1_right_cvg"></div>
					</div>
					<div class="section1_right_cvg_div section1_right_cvg_div2">
						<div class="section1_right_cvg2"></div>
					</div>
				</div>
			</div>
		</div>
		<div class="section section2">
			<div class="centent centent2">
				<h1>博客</h1>
				<div class="section2_div">
					<div class="section2_div_1">APICloud</div>
					<div class="section2_div_1">微信小程序</div>
					<div class="section2_div_1">Vue</div>
					<div class="section2_div_1">uni-App</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	// @ is an alias to /src
	import NavBar from '@/components/NavBar.vue'

	export default {
		name: 'index',
		components: {
			NavBar
		},
		data() {
			return {};
		},
		methods: {
			
		},
		mounted() {
			
		},
	}
</script>

<style type="text/css">
	@import url("../assets/Index.css");
</style>
