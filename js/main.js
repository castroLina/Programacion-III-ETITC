document.addEventListener('DOMContentLoaded', function() {
    function sumaHastaN(n) {
        let suma = 0;
        for (let i = 0; i <= n; i++) {
            suma += i;
        }
        return suma;
    }

    document.getElementById('sumForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que se envíe el formulario y se recargue la página

        const numberInput = document.getElementById('number');
        const n = parseInt(numberInput.value);

        if (!isNaN(n)) {
            const resultado = sumaHastaN(n);
            document.getElementById('result').innerText = `La suma hasta ${n} es: ${resultado}`;
        } else {
            alert('Por favor, ingrese un número válido.');
        }
    });
});
