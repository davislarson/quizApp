<script setup>
import { defineEmits } from 'vue';

const { question } = defineProps({
	question: {
		type: Object,
		required: true,
	},
});

const emit = defineEmits(['selectedOption']);

const selectedOption = (isCorrect) => {
   emit('selectedOption', isCorrect);
}
</script>

<template>
	<div>
		<h1>
			{{ question.text }}
		</h1>
	</div>
	<div>
		<div v-for="option in question.options" :key="option.id" class="option" @click="selectedOption(option.isCorrect)">
			<p class="option-label">{{ option.label }}</p>
			<div class="option-value">
				<p>{{ option.text }}</p>
			</div>
		</div>
	</div>
</template>

<style scoped>
.question-container {
	margin-top: 20px;
}

.question {
	font-size: 40px;
	margin-bottom: 20px;
}

.option {
	display: flex;
	margin-bottom: 20px;
	cursor: pointer;
}

.option-label {
	background-color: bisque;
	width: 50px;
	height: 50px;
	font-size: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
   color: rgb(53, 46, 46);
}

.option-value {
	background-color: rgb(244, 239, 239);
	width: 100%;
	font-size: 30px;
	padding: 0 20px;
   color: rgb(53, 46, 46);
}
</style>
