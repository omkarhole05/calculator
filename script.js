const display = document.getElementById('display');

        function appendValue(value) {
            let val= value;
            display.value += val;
        }
        
        function clearLastValue() {
            display.value = display.value.slice(0, -1);
        }
    
        function clearDisplay() {
            display.value = '';            
        }

        function calculate() {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = 'Error';
            }
        }