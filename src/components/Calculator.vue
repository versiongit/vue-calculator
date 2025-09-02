<template>
  <div class="calculator">
    <h1>Simple Calculator</h1>
    <div class="display">{{ currentInput || '0' }}</div>
    <div class="buttons">
      <button class="btn-clear" @click="clearCalculator">C</button>
      <button class="btn-backspace" @click="backspace">CE</button>
      <button @click="handleButtonClick('/')">/</button>
      <button @click="handleButtonClick('*')">*</button>

      <button @click="handleButtonClick('7')">7</button>
      <button @click="handleButtonClick('8')">8</button>
      <button @click="handleButtonClick('9')">9</button>
      <button @click="handleButtonClick('-')">-</button>

      <button @click="handleButtonClick('4')">4</button>
      <button @click="handleButtonClick('5')">5</button>
      <button @click="handleButtonClick('6')">6</button>
      <button class="btn-plus" @click="handleButtonClick('+')">+</button>

      <button @click="handleButtonClick('1')">1</button>
      <button @click="handleButtonClick('2')">2</button>
      <button @click="handleButtonClick('3')">3</button>

      <button class="btn-zero" @click="handleButtonClick('0')">0</button>
      <button @click="handleButtonClick('.')">.</button>
      <button class="buttons-orange" @click="handleButtonClick('=')">=</button>
    </div>
    <router-link to="/">Go Home</router-link>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const currentInput = ref<string>('');
const previousInput = ref<string>('');
const operator = ref<string | null>(null);
const waitingForSecondOperand = ref<boolean>(false);

const handleButtonClick = (button: string): void => {
  if (button >= '0' && button <= '9' || button === '.') {
    if (button === '.') {
      if (currentInput.value.includes('.')) return;
    }

    if (waitingForSecondOperand.value) {
      currentInput.value = button;
      waitingForSecondOperand.value = false;
    } else {
      currentInput.value = currentInput.value === '0' && button !== '.' ? button : currentInput.value + button;
    }
  } else if (button === '+' || button === '-' || button === '*' || button === '/') {
    if (operator.value && !waitingForSecondOperand.value) {
      calculate();
    }
    previousInput.value = currentInput.value;
    operator.value = button;
    waitingForSecondOperand.value = true;
  } else if (button === '=') {
    if (operator.value) {
      calculate();
      operator.value = null;
    }
  }
};

const calculate = (): void => {
  if (previousInput.value === '' || currentInput.value === '' || operator.value === null) {
    return;
  }

  const prev = parseFloat(previousInput.value);
  const current = parseFloat(currentInput.value);

  if (isNaN(prev) || isNaN(current)) {
    currentInput.value = 'Error';
    return;
  }

  let result = 0;
  switch (operator.value) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      if (current === 0) {
        currentInput.value = 'Error';
        previousInput.value = '';
        operator.value = null;
        waitingForSecondOperand.value = false;
        return;
      }
      result = prev / current;
      break;
    default:
      return;
  }

  currentInput.value = String(result);
  previousInput.value = '';
  operator.value = null;
  waitingForSecondOperand.value = false;
};

const clearCalculator = (): void => {
  currentInput.value = '';
  previousInput.value = '';
  operator.value = null;
  waitingForSecondOperand.value = false;
};

const backspace = (): void => {
  if (currentInput.value.length > 0) {
    currentInput.value = currentInput.value.slice(0, -1);
    if (currentInput.value === '') {
      previousInput.value = '';
      operator.value = null;
      waitingForSecondOperand.value = false;
    }
  }
};

</script>

<style scoped>
.calculator {
  font-family: sans-serif;
  text-align: center;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  color: #42b983;
  margin-bottom: 20px;
}

.display {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 15px 20px;
  font-size: 2em;
  min-width: 250px;
  text-align: right;
  margin-bottom: 15px;
  border-radius: 5px;
  overflow: hidden;
  white-space: nowrap;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 250px; 
}

.buttons button {
  padding: 15px;
  font-size: 1.2em;
  border: none;
  background-color: #e0e0e0; 
  color: #333;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.2s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.buttons button:hover {
  background-color: #d5d5d5;
}

.buttons .buttons-orange
{
  background-color: #ff9500;
  color: white;
}

.buttons .buttons-orange:hover {
  background-color: #e08300;
}

.btn-clear,
.btn-backspace {
  background-color: #ccc;
  color: #333;
}

.btn-clear:hover,
.btn-backspace:hover {
  background-color: #bbb;
}

.btn-zero {
  grid-column: span 2;
}

.btn-plus{
    grid-row: span 2;
}

.display {
  max-width: 100%;
  box-sizing: border-box;
}

a {
  display: inline-block;
  margin-top: 10px;
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