<template>
	<view id="index">
		<wTop></wTop>
		<view class="banner">
			<swiper class="swiper" indicator-dots indicator-active-color="#4169E1" autoplay interval="3000">
				<swiper-item v-for="(item,index) in banners" :key="index">
					<image :src="item.imageUrl" mode="heightFix"></image>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import wTop from '@/components/common/wTop.vue'
	import {getBanner} from '@/network/request.js'
	export default {
		components: {wTop},
		data() {
			return {
				banners: []
			}
		},
		onLoad() {
			getBanner().then(res => {
				this.banners = res.banners
			})
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	#index {
		padding: 0 20rpx;
		.banner {
			.swiper {
				height: 300rpx;
				image {
					width: 100%;
					height: 300rpx;
				}
			}
		}
		.nav{
			
		}
	}
</style>
