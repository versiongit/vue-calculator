<template>
  <div class="home-page">
    <h1>Welcome to the Simple Calculator!</h1>
    <p>This is your gateway to performing basic arithmetic operations.</p>
    <router-link to="/calculator">Go to Calculator</router-link>
  </div>
</template>

<script setup lang="ts">
// No specific logic needed for this simple home page
</script>

<style scoped>
.home-page {
  font-family: sans-serif;
  text-align: center;
  margin-top: 50px;
}

h1 {
  color: #42b983; /* Vue green */
}

p {
  color: #333;
  font-size: 1.1em;
}

a {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

a:hover {
  background-color: #36a373;
}
</style>