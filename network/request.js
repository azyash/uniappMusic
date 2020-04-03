const baseURL = "http://musicjk.azyash.cn"

//banner
export const getBanner=()=> {
	return uni.request({
			url: `${baseURL}/banner`
		})
		.then(data => {
			var [error, res] = data;
			return res.data
		})
}

//搜索
export const search=keywords=> {
	return uni.request({
			url: `${baseURL}/search`,
			data:{
				keywords:keywords
			}
		})
		.then(data => {
			var [error, res] = data;
			return res.data
		})
}

