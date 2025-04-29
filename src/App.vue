<template>
  <div class="container">
    <header>
      <h1>Quizzes</h1>
      <input type="text" placeholder="Search...">
    </header>
    <div class="options-container">
      <div class="card">
        <img src="./assets/math.png" alt="">
        <div class="card-text">
          <h2>Math</h2>
          <p>15 Questions</p>
        </div>
      </div>
    
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
</style>