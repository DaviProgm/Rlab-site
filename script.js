console.log('Hello, world!');
const name = document.getElementById('name')
const number = document.getElementById('number');
const time = document.getElementById('time');
const date = document.getElementById('dt');
const text = document.getElementById('text');
const button = document.getElementById('btn-send');

button.addEventListener('click', (e) => {
    e.preventDefault();

    const text = `Olá, meu nome é ${name.value}, gostaria de agendar um horário para ${time.value} no dia ${date.value} Estaria disponivel? .` ;
    const phone = '558585603558';

    const wpp_url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(text)}`;

    window.open(wpp_url, '_blank');
});
