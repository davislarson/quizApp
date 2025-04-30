<script setup>
const props = defineProps({
	questionStatus: {
    type: String,
    required: true,
  },
  barPercent: {
    type: Number,
    required: true,
  },
});
</script>

<template>
	<header>
		<h4>Question {{ props.questionStatus }}</h4>
		<div class="progress">
			<div class="progress-bar" role="progressbar" :style="{ width: props.barPercent + '%' }">{{ props.barPercent }}%</div>
		</div>
	</header>
</template>

<style scoped>
header {
	margin-top: 20px;
}

header h4 {
	font-size: 30px;
}

.bar {
	width: 300px;
	height: 50px;
	border: 3px solid bisque;
}

.completion {
	height: 100%;
	width: 0%;
	background-color: bisque;
}
</style>
