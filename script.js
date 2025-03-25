const valor = document.getElementById('valor');
const maisbotao = document.getElementById('mais');
const menosbotao = document.getElementById('menos');
const resetbotao = document.getElementById('resetar');

let contador = 0;  // Usei o let pois o valor será modificado
let intervaloid = null; // Inicializa com null pois nao tem intervalo ainda

const atualizarValor = () => {
    valor.innerHTML = contador; // Atualizei  o valor exibido no contador
};

const iniciarAlteracao = (operacao) => { // incia a troca de iniciar alteracao da operação 
   
    if (operacao === 'mais') {
        contador = contador + 1;  // Se a operação for 'mais', soma 1 ao contador
    } else if (operacao === 'menos') {
        contador = contador - 1;  // Se a operação for 'menos', subtrai 1
    }
    atualizarValor(); // Atualiza o valor após a operação if e else
};
// Adicionei os eventos corretamente
maisbotao.addEventListener('mousedown', () => iniciarAlteracao('mais'));
menosbotao.addEventListener('mousedown', () => iniciarAlteracao('menos'));

// Para parar o intervalo ao soltar o botão
document.addEventListener('mouseup', () => clearInterval(intervaloid));

//  botei  o botao de resetar o contador
resetbotao.addEventListener('click', () => {
    contador = 0;
    atualizarValor();
});
