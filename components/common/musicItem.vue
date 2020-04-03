<template>
	<view class="item">
		<view>
			<text>{{index}}</text>
		</view>
		<view class="content">
			<text>{{musicItem.name}}</text>
			<text>{{musicItem.artists[0].name}}--{{musicItem.album.name}}</text>
		</view>
		<view>
			<icon type="success" size="26" />
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			musicItem: {},
			index: Number
		}
	}
</script>

<style lang="scss" scoped>
	.item {
		display: flex;
		height: 100rpx;
		align-items: center;

		>view:nth-child(1) {
			width: 100rpx;
			display: flex;
			justify-content: center;
		}

		.content {
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: center;
			overflow: hidden;

			>text:nth-child(1) {
				font-size: 36rpx;
				overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
			}

			>text:nth-child(2) {
				font-size: 28rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}

		>view:nth-child(3) {
			width: 100rpx;
			display: flex;
			justify-content: center;
		}
	}
</style>
