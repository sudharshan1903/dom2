document.addEventListener('keydown', function (event) {
    const key = event.key;
  
    if (/[0-9+\-*/%=]/.test(key)) {
      event.preventDefault();
      appendToDisplay(key);
    } else {
      alert('Only numbers are allowed');
    }
  });
  
  function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function calculate() {
    try {
      const result = eval(document.getElementById('display').value);
      document.getElementById('display').value = result;
    } catch (error) {
      alert('Invalid expression');
    }
  }
  
  function memoryOperation(operation) {
    const currentMemory = parseFloat(localStorage.getItem('memory')) || 0;
    const displayValue = parseFloat(document.getElementById('display').value) || 0;
  
    switch (operation) {
      case 'M+':
        localStorage.setItem('memory', currentMemory + displayValue);
        break;
      case 'M-':
        localStorage.setItem('memory', currentMemory - displayValue);
        break;
      case 'MC':
        localStorage.removeItem('memory');
        break;
    }
  
    clearDisplay();
  }
  