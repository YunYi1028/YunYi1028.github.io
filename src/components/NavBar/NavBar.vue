<template>
	<div class="nav_div" id="nav_div">
		<div class="nav2" id="nav2">
			<div class="nav2_txt">
				<div class="nav2_txt_left">Yunyi</div>
				<div class="nav2_txt_rigth" ref="menu" @click="showNav">
					<svg
						t="1631070746485"
						class="icon"
						viewBox="0 0 1024 1024"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						p-id="2293"
						data-spm-anchor-id="a313x.7781069.0.i3"
						width="35"
						height="35"
					>
						<path
							d="M473.744 541.92a16 16 0 0 1 16 16v249.728a16 16 0 0 1-16 16H224a16 16 0 0 1-16-16V557.92a16 16 0 0 1 16-16h249.744z m322.784 0a16 16 0 0 1 16 16v249.728a16 16 0 0 1-16 16h-249.76a16 16 0 0 1-16-16V557.92a16 16 0 0 1 16-16h249.76z m-354.784 48H256v185.728h185.744V589.92z m322.784 0h-185.76v185.728h185.76V589.92zM676.528 208a152 152 0 1 1 0 304 152 152 0 0 1 0-304z m-202.784 11.136a16 16 0 0 1 16 16v249.728a16 16 0 0 1-16 16H224a16 16 0 0 1-16-16V235.136a16 16 0 0 1 16-16h249.744zM676.528 256a104 104 0 1 0 0 208 104 104 0 0 0 0-208z m-234.784 11.136H256v185.728h185.744V267.136z"
							p-id="2294"
							fill="#5b39c9"
							data-spm-anchor-id="a313x.7781069.0.i4"
							class="selected"
						/>
					</svg>
				</div>
			</div>
			<div class="nav2_txt_div" id="nav2_txt_div">
				<div class="nav2_txt_2" @click="activated(1)" :class="{ active: isActive == 1 }">首页</div>
				<div class="nav2_txt_2" @click="activated(2)" :class="{ active: isActive == 2 }">博客</div>
				<div class="nav2_txt_2" @click="activated(3)" :class="{ active: isActive == 3 }">项目</div>
				<div class="nav2_txt_2" @click="showContactMe()">联系我</div>
			</div>
		</div>

		<div class="nav">
			<div class="nav_left">
				<div class="nav_left_txt">Yunyi</div>
			</div>
			<div class="nav_right">
				<div class="nav_right_txt" @click="activated(1)" :class="{ active: isActive == 1 }">首页</div>
				<div class="nav_right_txt" @click="activated(2)" :class="{ active: isActive == 2 }">博客</div>
				<div class="nav_right_txt" @click="activated(3)" :class="{ active: isActive == 3 }">项目</div>
			</div>
			<div class="nav_left nav_left2" @click="showContactMe()">
				<div class="nav_right_txt2" id="nav_right_txt2" @click="activated(isActive)">
					<div class="nav_right_txt2_txt">联系我</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: "NavBar",
	props: ["isActive_id"],
	data() {
		return {
			isActive: ''
		}
	},
	methods: {
		activated(id) {
			this.isActive = id
			switch (id) {
				case 1:
					this.$router.push({ path: '/', query: { isActive: '1' } })
					break;
				case 2:
					this.$router.push({ path: '/blogs', query: { isActive: '2' } })
					break;
				case 3:
					this.$router.push({ path: '/project', query: { isActive: '3' } })
					break;
			}
		},
		showNav() {
			if (document.getElementById('nav2_txt_div').style.display == 'block') {
				document.getElementById('nav2_txt_div').style.opacity = '0'
				setTimeout(() => {
					document.getElementById('nav2_txt_div').style.display = 'none'
				}, 250)
			} else {
				document.getElementById('nav2_txt_div').style.display = 'block'
				setTimeout(() =>
					document.getElementById('nav2_txt_div').style.opacity = '1'
				)
			}

			if (this.$refs.menu.style.transform == 'rotate(90deg)') {
				this.$refs.menu.style.transform = 'rotate(0deg)'
			} else {
				this.$refs.menu.style.transform = 'rotate(90deg)'
			}

		},
		huadong() {
			document.getElementById('nav_div').className = 'huadong'
			// document.getElementById('nav_right_txt2').style.border = '2px solid #5b39c9'
			document.getElementById('nav_right_txt2').style.boxShadow = '0 0.2em 0.4em #5b39c9'
		},
		huadong2() {
			document.getElementById('nav_div').className = 'nav_div'
			document.getElementById('nav_right_txt2').style.border = 'none'
		},
		huadong3() {
			document.getElementById('nav2').className = 'huadong2'
		},
		huadong4() {
			document.getElementById('nav2').className = 'nav2'
		},
		handleScroll() {
			var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
			if (document.body.clientWidth > 640 && scrollTop > 120) {
				this.huadong()
			} else if (document.body.clientWidth > 640 && scrollTop <= 120) {
				this.huadong2()
			} else if (document.body.clientWidth <= 640 && scrollTop > 60) {
				this.huadong3()
			} else if (document.body.clientWidth <= 640 && scrollTop <= 60) {
				this.huadong4()
			}
		},
		showContactMe() {
			document.getElementById('contactMe_wrapper').style.display = 'block'
			setTimeout(() => {
				document.getElementById('contactMe_wrapper').style.opacity = '1'
			});
		}
	},
	mounted() {
		this.isActive = this.isActive_id
		window.addEventListener('scroll', this.handleScroll)
	},
};
</script>

<style type="text/css">
@import url("./NavBar.css");
</style>
