<template>
    <router-view />
</template>

<script setup>
// No specific script needed here for the basic layout
</script>

<style>
/* Global styles can go here if needed */
body {
  margin: 0;
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Align items to the top */
  min-height: 100vh;
  padding-top: 20px; /* Add some padding at the top */
}

#app {
  width: 100%;
  max-width: 600px; /* Limit the width of your app content */
  background-color: white;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center; /* Center content within the app box */
}
</style>