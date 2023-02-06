export default defineNuxtConfig({
	app: {
		head: {
			title: '엔빵 - 더치페이 계산',
			meta: [
				{ name: 'description', content: '더치페이를 계산하고 공유해보세요!' }
			],
			script: [
				{
					src: 'https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.min.js',
					integrity:"sha384-dpu02ieKC6NUeKFoGMOKz6102CLEWi9+5RQjWSV0ikYSFFd8M3Wp2reIcquJOemx",
					crossorigin:"anonymous"
				}
			]
		}
	},
	runtimeConfig: {
		public: {
			kakaoJavascriptKey: ''
		}
	}
})
