//1
window.onload = () => {
    //2
    // alert('hola');
    console.log(portfolio)
    // let abracadara = document.getElementById('abracadabra');
    abracadabra.onclick = () => {
        let nombre = prompt('Me decis tu nombre');
        titular.innerHTML = `Hi. I'm <strong>${nombre}</strong>`;
    }
    //poner id en html del a
    touch.ondblclick = () => {
        //5
        // document.querySelector('.parrafo-color').style.color = 'red';
        //6
        document.querySelector('.parrafo-color').style.color = colorAlAzar();
    }
    //5
    function colorAlAzar(){
        let colors = ['red','yellow','pink','orange','cyan'];
        return colors[Math.floor(Math.random() * 5)]; // 0-4 
    }
    console.log(colorAlAzar());
    //7
    let cards = document.querySelectorAll('.box.style1');
    // console.log(cards);
    for (let card of cards){
        card.onclick = () => alert('Clickeaste sobre: ' + card.querySelector('h3').innerText)
    }

    // PARTE DOS
    //1.a
    let textoPorfolio = document.querySelector('.footer-portfolio p');
    let btnPortfolio = document.querySelector('.footer-portfolio a');

    btnPortfolio.onmouseover = (e) => textoPorfolio.style.color = colorAlAzar();
    //1.b
    btnPortfolio.onmouseout = () => textoPorfolio.style.color = '#888';

    //2
    lechuza.onclick = () => {
        //2.a
        alert('Preparate para el futuro');
        //2.b
        setTimeout(() => alert('El futuro ya llegó!') , 5000);
    }
    //3
    let estadoSecreto = 0;
    window.onkeypress = (e) => {
        // console.log(`presionaste la tecla ${e.key}`);
        //4
        // if (e.key == " ")  console.log('Presionaste la barra')
        switch (estadoSecreto) {
            case 0:
                (e.key == "s") ? estadoSecreto++ : estadoSecreto = 0
                break;
            case 1:
                (e.key == "e") ? estadoSecreto++ : estadoSecreto = 0
                break;
            case 2:
                (e.key == "c") ? estadoSecreto++ : estadoSecreto = 0
                break;
            case 3:
                (e.key == "r") ? estadoSecreto++ : estadoSecreto = 0
                break;
            case 4:
                (e.key == "e") ? estadoSecreto++ : estadoSecreto = 0
                break;
            case 5:
                (e.key == "t") ? estadoSecreto++ : estadoSecreto = 0
                    break;
            case 6:
                if (e.key == "o") {
                     alert('SECRETO MAGICO');
                }
                estadoSecreto=0;
            break;
        }
        console.log(estadoSecreto)
    };
    //5
    email.onkeydown = (e) => {
        if (e.key == " ") alert('No se puede escribir espacios aca!');
    } 

    //+++++++++++++
    // EXTRA EXTRA
    //+++++++++++++

    let sorteo = Math.floor(Math.random() * 6);
    let gamecards = document.querySelectorAll('.box.style2');
    gamecards.forEach((gamecard, index) => {
        gamecard.onclick = () => (sorteo == index) ? alert('Ganaste!') : alert('Ese no es!')
    })
    
}