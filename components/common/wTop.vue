<template>
	<view class="wTop">
		<uni-search-bar :radius="100" @confirm="search" placeholder="search"></uni-search-bar>
		<icon type="success" size="26"/>
	</view>
</template>

<script>
	import {search} from '@/network/request.js'
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	export default{
		components: {uniSearchBar},
		methods:{
		search(e){
			let {value} = e
			uni.navigateTo({
			    url: `/pages/searchList/index?keywords=${value}`
			});
		}	
		}
	}
</script>

<style lang="scss">
	.wTop{
		height: 100rpx;
		display: flex;
		align-items: center;
		uni-search-bar{
			flex: 1;
		}
		icon{
			display: inline-block;
		}
	}
</style>
