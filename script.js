const input = document.querySelector('#input');
const main = document.querySelector('main');

const tarefas = [];

function adicionar() {

    if (input.value === "") {
        alert("Digite uma nova tarefa!")
    }
    else {
        let entrada = input.value;
        tarefas.push(entrada)

        const conteudoCartao = `<div class="cartao">
            <span class="tarefa">${tarefas[tarefas.length - 1]}</span>
            <span class="botoes">
                <button class="checked" onclick="marcar()">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m424-312 282-282-56-56-226 226-114-114-56 56 170 170ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>
                </button>
                |
                <button class="editar" onclick="editar()">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                </button>
                |
                <button class="deletar" onclick="deletar()">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                </button>
            </span>
        </div>`;

        if (tarefas.length === 1) {

            let section = document.createElement('section');

            section.innerHTML = conteudoCartao;

            main.appendChild(section);
            section.classList.add('container');
        }
        else {
            const container = document.querySelector('.container');
            container.innerHTML += conteudoCartao;
        }
        
    }
    
} 

function marcar() {
    
}

function editar() {
    
}

function deletar() {
    
}