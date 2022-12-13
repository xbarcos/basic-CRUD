let estudantes = [];
const name = document.getElementById('name');
const role = document.getElementById('role');
const table = document.getElementById("divTable");
const submit = document.getElementById('btnSubmit');
const tbody = document.querySelector('tbody');

document.getElementById('#formulario').addEventListener("submit", function (event) {

  event.preventDefault();
  var estudante = {
    'name' : name.value,
    'role' : role.value
  }
  estudantes.push(estudante);

  let tr = document.createElement('tr')
  tr.innerHTML = `
    <td>${name.value}</td>
    <td>${role.value}</td>
    <td class="acao">
      <button><i class='bx bx-edit'></i></button>
    </td>
    <td class="acao">
      <button><i class='bx bx-trash'></i></button>
    </td>
  `
  var tabela = document.querySelector("table tbody");
  tabela.appendChild(tr);
});

function edit(id) {
  return false;
}

function remove(id) {
  return false;
}