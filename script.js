
const form = document.getElementById("formulario")
const tabela = document.getElementById("tabelaDados")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const nome = document.getElementById("nome").value
    const cpf = document.getElementById("cpf").value
    const dataNascimento = document.getElementById("dataNascimento").value

    // Remove a mensagem inicial se ela existir
    if (tabela.rows.length === 1 && tabela.rows[0].cells[0].innerText === "Nenhum dado cadastrado ainda") {
        tabela.deleteRow(0)
    }

    //Cria uma nova linha e célula com o nome
    const novaLinha = tabela.insertRow()
    const novaCelulaNome = novaLinha.insertCell()
    const novaCelulaCpf = novaLinha.insertCell()
    const novaCelulaDataNascimento = novaLinha.insertCell()
    const novaCelulaExcluir = novaLinha.insertCell()

    novaCelulaNome.innerText = nome
    novaCelulaCpf.innerText = cpf
    novaCelulaDataNascimento.innerText = dataNascimento
    novaCelulaExcluir.innerHTML = '<button class="btn-excluir">Excluir</button>'

    // Limpa o formulário
    form.reset()

    // Adiciona a funcionalidade de exclusão
    const btnExcluir = novaCelulaExcluir.querySelector(".btn-excluir")
    btnExcluir.addEventListener("click", () => {
        novaLinha.remove()

        // Verifica se a tabela ficou vazia novamente
        if (tabela.rows.length === 0) {
            const linhaVazia = tabela.insertRow()
            const celulaVazia = linhaVazia.insertCell()
            celulaVazia.colSpan = 4
            celulaVazia.innerText = "Nenhum dado cadastrado ainda"
        }
    })
})