<script setup>
import { RouterLink } from "vue-router";

const { numCorrectAnswers, quizQuestionLength } = defineProps({
	numCorrectAnswers: {
		type: Number,
		required: true,
	},
	quizQuestionLength: {
		type: Number,
		required: true,
	},
});
</script>

<template>
	<div class="results">
		<p>Your Results...</p>
		<h1>{{ numCorrectAnswers }}/{{ quizQuestionLength }}</h1>
		<RouterLink to="/">Go Back</RouterLink>
	</div>
</template>

<style scoped>
.results {
	text-align: center;
	padding: 100px 0;
}

p {
	font-size: 25px;
}

h1 {
	font-size: 80px;
}
</style>
