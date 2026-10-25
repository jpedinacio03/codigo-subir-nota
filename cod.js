
const dados = [
 
];



function normalizarTexto(txt) {
  return txt.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase().trim();
}

function preencherNotas() {
  dados.forEach(([nome, nota]) => {

    const celulaNome = [...document.querySelectorAll("table tbody tr td")]
      .find(td => normalizarTexto(td.textContent) === normalizarTexto(nome));

    if (celulaNome) {

      const linha = celulaNome.closest("tr");

     
      const inputNota = linha.querySelector("input.form-control");

      if (inputNota) {
        inputNota.value = nota;
      }
    }
  });
}

preencherNotas();
