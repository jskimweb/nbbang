<template>
  <div>
    <TheForm />
    <button @click="shareToKakaotalk">카카오톡 공유</button>
  </div>
</template>

<script setup>
import TheForm from './components/TheForm.vue';

const config = useRuntimeConfig();

initKakao();

function initKakao() {
  if (process.client) Kakao.init(config.kakaoJavascriptKey);
}
function shareToKakaotalk() {
  const options = {
    objectType: 'text',
    text: '공유합니다.',
    link: {
      mobileWebUrl: 'http://localhost:8080',
      webUrl: 'http://localhost:8080',
    }
  };
  Kakao.Share.sendDefault(options);
}
</script>
