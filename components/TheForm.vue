<template>
	<div class="the-form">
		<form class="form" @submit.prevent="calculate">
			<span>총 금액</span>
			<input v-model="totalAmount" type="number" class="input" />
			<span>총 인원</span>
			<input v-model="totalNumber" type="number" class="input" />
			<button>계산</button>
		</form>
		<span v-if="message">{{ message }}</span>
	</div>
</template>

<script setup lang="ts">
const totalAmount = ref(0);
const totalNumber = ref(0);
const message = ref('');

function calculate() {
	if (totalAmount.value < 0 || totalNumber.value < 0) {
		message.value = '올바르지 않은 입력입니다.';
		return;
	}
	if (totalAmount.value < 1000) {
		message.value = '총 금액은 1000원 이상 입력해주세요.';
		return;
	}
	const eachAmount = totalAmount.value / totalNumber.value;
	message.value = `총 금액 : ${totalAmount.value}원, 총 인원 : ${totalNumber.value}명, 인당 ${eachAmount}원입니다.`;
}
</script>