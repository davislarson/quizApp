<script setup>
import Card from '../components/Card.vue';
import q from '../data/quizzes.json'
import { ref, watchEffect } from 'vue'

const quizzes = ref(q);
const search = ref('');

watchEffect(() => {
  if (search.value) {
    quizzes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
  }
  else {
    quizzes.value = q;
  }
})

</script>


<template>
  <div class="container">
    <header>
      <h1>Quizzes</h1>
      <input v-model.trim="search" type="text" placeholder="Search...">
    </header>
    <div class="options-container">
      <Card v-for="quiz in quizzes" :key="quiz.id" :quiz="quiz"/>
    </div>
  </div>
</template>

<style scoped>

.container {
  max-width: 1000px;
  margin: 0 auto;
}
header {
margin-bottom: 10px;
margin-top: 30px;
display: flex;
align-items: center;
}
header h1 {
  font-size: 2rem;
  margin-right: 20px;
}
header input {
  padding: 10px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
}
.options-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
}
</style>