<script setup>
import { useRoute } from "vue-router";
import quizzes from "../data/quizzes.json";
import QuizHeader from "../components/QuizHeader.vue";
import Question from "../components/Question.vue";
import Result from "../components/Result.vue";
import { ref, computed } from "vue";

const route = useRoute();
const quizId = parseInt(route.params.id);
let quiz = quizzes.find((quiz) => quiz.id === quizId);
console.log(quiz);

const currentQIndex = ref(0);
const currentQuestion = ref(quiz.questions[currentQIndex.value]);
const numCorrectAnswers = ref(0);
const showResult = ref(false);

const questionStatus = computed(() => {
   return `${currentQIndex.value + 1} / ${quiz.questions.length}`;
});
const barPercent = computed(() => {
   return (((currentQIndex.value + 1) / quiz.questions.length) * 100).toFixed(0);
});

function handleSelectedOption(isCorrect) {
   if (isCorrect) {
      numCorrectAnswers.value++;
   }
   // If wrong or right, go to next question
   if (currentQIndex.value < quiz.questions.length - 1) {
      currentQIndex.value++;
      currentQuestion.value = quiz.questions[currentQIndex.value];
   } else {
      showResult.value = true;
   }
}

</script>

<template>
   <div class="container">
      <QuizHeader 
      :questionStatus="questionStatus"
      :barPercent="barPercent"
      />
      
      <Question
         v-if="!showResult"
         :question="currentQuestion"
         @selected-option="handleSelectedOption"
      />
      
      <Result  
         v-if="showResult"
         :quizQuestionLength="quiz.questions.length"
         :numCorrectAnswers="numCorrectAnswers"
      />
   </div>
</template>

<style scoped>
.container {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
}
</style>
