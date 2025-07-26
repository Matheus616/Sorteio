function generateNumber() {

    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)

    const numero = Math.floor(Math.random() * (max - min + 1) + min);
    document.getElementById('resultado').innerText = numero;

    const historicoLista = document.getElementById('historico-lista');
    const novoNumero = document.createElement('div');   

    novoNumero.className = 'numero-sorteado';
    novoNumero.innerText = numero;  

    if (historicoLista.children.length === 0 || historicoLista.children[0].id === 'lista-vazia') {
        historicoLista.innerHTML = ''; // Limpa a lista vazia
    }   

    historicoLista.appendChild(novoNumero); 

    // Limpa os campos de entrada após o sorteio
    document.querySelector(".input-min").value = '';    

    document.querySelector(".input-max").value = '';
    document.querySelector(".input-min").focus(); // Foca no campo de entrada mínimo            
    document.getElementById('resultado').style.border = '2px solid #ffffff'; // Reseta a borda do resultado
    document.getElementById('resultado').style.color = '#ffffff'; // Reseta a cor do resultado
    document.getElementById('resultado').style.fontSize = '2em'; // Reseta o tamanho da fonte do resultado
    document.getElementById('resultado').style.padding = '20px'; // Reseta o padding do resultado
    document.getElementById('resultado').style.textAlign = 'center'; // Reseta o alinhamento do texto do resultado
    document.getElementById('resultado').style.width = '200px'; // Reseta a largura do resultado
    document.getElementById('resultado').style.margin = '20px auto'; // Reseta a margem do resultado
    document.getElementById('resultado').style.opacity = '0.8'; // Reseta a opacidade do resultado
    document.getElementById('resultado').style.backgroundColor = 'rgba(255, 255, 255, 0.1)'; // Reseta a cor de fundo do resultado
 
}

function limparHistorico() {
    const historicoLista = document.getElementById('historico-lista');
    historicoLista.innerHTML = '<div id="lista-vazia"> Nenhum número sorteado </div>'; // Reseta o histórico para vazio
    document.getElementById('resultado').innerText = 'Resultado'; // Reseta o resultado
    document.getElementById('resultado').style.border = '2px solid #333'; // Reseta a borda do resultado
}