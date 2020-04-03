<template>
	<view class="">
		<scroll-view>
			<musicItem v-for="(item,index) in musics" :key="index" :index=(index+1) :musicItem = item>
			</musicItem>
		</scroll-view>
	</view>
</template>

<script>
	import {search} from '@/network/request.js'
	import musicItem from '@/components/common/musicItem.vue'
	export default {
		components:{musicItem},
		data(){
			return{
				musics:[]
			}
		},
		onLoad: function(option) {
			if (option.keywords !== '') {
				search(option.keywords).then(res=>{
					this.musics=res.result.songs
					console.log(this.musics);
				})
			} else {
				console.log('请输入');
			}
		}
	}
</script>

<style>
</style>
