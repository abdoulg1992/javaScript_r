let button = document.querySelector('.button');
let inputValue = document.querySelector('.inputValue');

button.addEventListener("click", function() {
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=30b8b8e42a96fe91936bcd917793cc03', {mode:'cors'})
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => alert("Wrong City Name!"))    
    });
