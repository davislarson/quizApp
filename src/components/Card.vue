<script setup>
import { RouterLink } from "vue-router";

const props = defineProps({
	quiz: {
		type: Object,
		required: true,
	},
});
</script>

<template>
	<RouterLink :to="`/quiz/${quiz.id}`" class="no-style">
		<div class="card">
			<img :src="quiz.img" alt="" />
			<div class="card-text">
				<h2>{{ quiz.name }}</h2>
				<p>{{ quiz.questions.length }}</p>
			</div>
		</div>
	</RouterLink>
</template>

<style scoped>
/* CARD */
.card {
	width: 310px;
	overflow: hidden;
	border-radius: 2%;
	box-shadow: 1px 1px 10px rgba(196, 195, 195, 0.1);
	margin-bottom: 35px;
	margin-right: 20px;
	cursor: pointer;
}
.card img {
	width: 100%;
	height: 190px;
	margin: 0;
}
.card-text {
	padding: 0 5px;
}

.card h2 {
	font-weight: bold;
}
.no-style {
	text-decoration: none;
	color: inherit;
}
</style>
