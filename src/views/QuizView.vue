<script setup>

import { useRoute } from 'vue-router';

const route = useRoute();
const quizId = route.params.id;

</script>

<template>
<h1>Hello {{ quizId }}</h1>

</template>
