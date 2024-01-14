const localStorageKeyDia = 'listaTarefasDia';
const localStorageKeyNoite = 'listaTarefasNoite';

function novaTarefa() {
    let input = document.getElementById('novaTarefa');
    input.style.border = '';

    if (!input.value) {
        input.style.border = '1px solid red';
        alert("Digite algo para inserir na sua lista.");
    } else {
        let valuesDia = JSON.parse(localStorage.getItem(localStorageKeyDia) || "[]");
        let valuesNoite = JSON.parse(localStorage.getItem(localStorageKeyNoite) || "[]");

        let novaTarefa = { name: input.value };

        // Adiciona à lista do dia ou da noite com base em alguma lógica (exemplo: horário atual)
        let horarioAtual = new Date().getHours();
        if (horarioAtual >= 6 && horarioAtual < 18) {
            valuesDia.push(novaTarefa);
            localStorage.setItem(localStorageKeyDia, JSON.stringify(valuesDia));
        } else {
            valuesNoite.push(novaTarefa);
            localStorage.setItem(localStorageKeyNoite, JSON.stringify(valuesNoite));
        }

        input.value = ''; // funçao Limpa o campo de nova tarefa

        showValues(); // função Atualiza a exibição da lista
       }
    }   