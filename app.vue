<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
    </Head>
    <h1>{{ title }}</h1>
    <TheForm />
  </div>
</template>

<script setup lang="ts">
import TheForm from './components/TheForm.vue';

const title = ref('엔빵 - 더치페이 계산');
</script>
