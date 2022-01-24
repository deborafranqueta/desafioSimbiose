//Programa //

var nome = prompt("Olá, Qual o seu nome?");
alert("Seja bem-vindo ao meu programa,"  + nome );


var array = []
var pessoas = [{}]
pessoas.pop()
apiConsumo()
var x = 0;
var indicenegativo = -1
console.log(indicenegativo)


function adicionar(){
  let inputText = document.querySelector("#inputNome").value

  let display = document.querySelector(".itemlista")


  if(inputText == ""){

    return;
  }

    array.push(inputText)

    
apiConsumo()

  display.innerHTML += `    
    <div class="container" id="${x}">
    <div class="row">
    <div class="col-sm">${pessoas[x].name} <br> ${pessoas[x].email}</div>
    <div class="col-sm">${array[x]}</div>
    <div class="col-sm">
      <button onclick="editar(${x})" id="editbutton" data-bs-toggle="modal" data-bs-target="#idEdit">Editar</button>
      <button onclick="excluir('${array[x]}')" id="deletebutton">Excluir</button>
    </div>
  </div>
</div> `

x++

document.querySelector("#inputNome").value = '';

}

function excluir(produto){

  let indice = array.indexOf(produto)

  array.splice(indice, 1)
  pessoas.splice(indice, 1)

  let display = document.querySelector(".itemlista")

  display.innerHTML='';

  x = 0


 while( x < array.length){
 

    display.innerHTML += `    
    <div class="container" id="${x}">
    <div class="row">
    <div class="col-sm">${pessoas[x].name} <br> ${pessoas[x].email}</div>
    <div class="col-sm">${array[x]}</div>
    <div class="col-sm">
      <button onclick="editar(${x})" id="editbutton" data-bs-toggle="modal" data-bs-target="#idEdit">Editar</button>
      <button onclick="excluir('${array[x]}')" id="deletebutton">Excluir</button>
    </div>
  </div>
</div> `


x++

  }

}

function editar(teste) {

  var  modal = document.getElementById("idEdit");

  let produto = array[teste]

  document.getElementById("edit").value = produto
 
  modal.classList.remove("fade")

  modal.classList.add("d-flex")

  indicenegativo = teste


}

function fechar(){

  var  modal = document.getElementById("idEdit");

  modal.classList.remove("d-flex")

  modal.classList.add("fade")

}

function salvar(){
 
  let produto = document.querySelector("#edit").value

  if(indicenegativo > -1){
    
    array[indicenegativo] = produto
  }

  x = 0

  let display = document.querySelector(".itemlista")

  display.innerHTML = ""

  while(x < array.length){

    display.innerHTML += `    
    <div class="container" id="${x}">
  <div class="row">
    <div class="col-sm">${pessoas[x].name} <br> ${pessoas[x].email}</div>
    <div class="col-sm">${array[x]}</div>
    <div class="col-sm">
      <button onclick="editar(${x})" id="editbutton" data-bs-toggle="modal" data-bs-target="#idEdit">Editar</button>
      <button onclick="excluir('${array[x]}')" id="deletebutton">Excluir</button>
    </div>
  </div>
</div> `

x++
}

indicenegativo = -1

alert('Alteração realizada com sucesso!')

}


function limpar(){

  document.getElementById("itemlista").reset();
  

}

//API//

function apiConsumo() {
  fetch('https://randomuser.me/api/?results=1%27')
      .then((resp) => resp.json())
      .then(function (data) {
          let authors = data.results;
          return authors.map(function (author) {
              let name = (author.name.first);
              let email = (author.email)
              pessoas.push({ email, name });
              console.log(pessoas)
          })
      })
      .catch(function (error) {
          console.log(error);
      });
}
apiConsumo()

