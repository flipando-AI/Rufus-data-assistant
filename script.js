const form = document.getElementById('inputForm');
const outputText = document.getElementById('promptText');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  updateOutput();
});

const inputFields = document.querySelectorAll('input[data-hint], textarea[data-hint]');

// Add event listeners for input fields
inputFields.forEach(function(input) {
  input.addEventListener('input', function() {
    updateOutput();
  });
  input.addEventListener('focus', function() {
    showHint(input);
  });
  input.addEventListener('blur', function() {
    hideHint(input);
  });
});

function showHint(input) {
  const hintBox = input.nextElementSibling;
  if (hintBox.classList.contains('hint-box')) {
    hintBox.textContent = input.getAttribute('data-hint');
    hintBox.style.display = 'block';
  }
}

function hideHint(input) {
  const hintBox = input.nextElementSibling;
  if (hintBox.classList.contains('hint-box')) {
    hintBox.style.display = 'none';
  }
}

function updateOutput() {
  const input1 = document.getElementById('input1').value;
  const input2 = document.getElementById('input2').value;
  const input3 = document.getElementById('input3').value;
    const input4 = document.getElementById('input4').value;
  
  const output = `Generar un informe sobre la siguiente base de datos y extraer tendencias y métricas relevantes. La base de datos contiene ${input1}
Base de datos: ${input2}. 
Variables disponibles: ${input3}. Cantidad de registros: ${input4}

Identificar en el análisis patrones y comportamientos a lo largo del tiempo. En una tabla describir métricas comunes e interesantes. Y finalmente hacer un breve resumen con las conclusiones del analisis `;

  outputText.innerHTML = output;

  // Reset all input classes
  const inputs = document.querySelectorAll('input, textarea');
  inputs.forEach(function(input) {
    input.classList.remove('filled');
  });

 // Add 'filled' class to the corresponding inputs
  const input1Elements = document.querySelectorAll('.input1');
  input1Elements.forEach(function(element) {
    const input = document.getElementById('input1');
    input.classList.add('filled');
  });

  const input2Elements = document.querySelectorAll('.input2');
  input2Elements.forEach(function(element) {
    const input = document.getElementById('input2');
    input.classList.add('filled');
  });
}
const input3Elements = document.querySelectorAll('.input3');
  input1Elements.forEach(function(element) {
    const input = document.getElementById('input3');
    input.classList.add('filled');
  });
const input4Elements = document.querySelectorAll('.input4');
  input1Elements.forEach(function(element) {
    const input = document.getElementById('input4');
    input.classList.add('filled');
  });

// Event listeners for input fields
const inputs = document.querySelectorAll('input, textarea');
inputs.forEach(function(input) {
  input.addEventListener('input', function() {
    updateOutput();
  });
});

const copyButton = document.getElementById('copyButton');
const promptText = document.getElementById('promptText');

copyButton.addEventListener('click', function() {
  copyToClipboard(promptText.textContent);
});

function copyToClipboard(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  alert('Text copied to clipboard!');
}

const copyInputsButton = document.getElementById('copyInputsButton');
copyInputsButton.addEventListener('click', function() {
  copyInputsAsJson();
});

function copyInputsAsJson() {
  const inputs = document.querySelectorAll('input, textarea');
  const inputsData = {};

  inputs.forEach(function(input) {
    inputsData[input.id] = input.value;
  });

  const json = JSON.stringify(inputsData, null, 2);

  copyToClipboard(json);
  alert('Inputs copied as JSON!');
}