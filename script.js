document.getElementById('#formulario').addEventListener("submit", function (event) {
  const name = document.getElementById('name').value;
  const role = document.getElementById('role').value;
  const table = document.getElementById("divTable");
  const submit = document.getElementById('btnSubmit');
  const tbody = document.querySelector('tbody');

  event.preventDefault();

  var tr = document.createElement('tr');

  td = document.createElement('td');
  td.textContent = name;
  tr.appendChild(td);
  td = document.createElement('td');
  td.textContent = role;
  tr.appendChild(td);
  console.log(name)

  var tabela = document.querySelector("table tbody");

  tabela.appendChild(tr);

});