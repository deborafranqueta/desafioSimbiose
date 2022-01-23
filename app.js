/*var nome = prompt("Olá, Qual o seu nome?");
alert("Seja bem-vindo ao meu programa,"  + nome );*/



let url = `https://randomuser.me/api/`

fetch(url)
  .then(response => response.json())
  .then(api => {

  });

var array = []
var x = 0;
var indicenegativo = -1
console.log(indicenegativo)


function adicionar(){
  let inputText = document.querySelector("#inputNome").value

  let display = document.querySelector(".itemlista")


  if(inputText == ""){

    return;
  }else{

    array.push(inputText)
  }

  display.innerHTML += `    
    <div class="container" id="${x}">
  <div class="row">
    <div class="col-sm">Nome</div>
    <div class="col-sm">${array[x]}</div>
    <div class="col-sm">
      <button onclick="editar(${x})" id="editbutton" data-bs-toggle="modal" data-bs-target="#idEdit">Editar</button>
      <button onclick="excluir('${array[x]}')" id="deletebutton">Excluir</button>
    </div>
  </div>
</div> `

x++

}

function excluir(produto){

  let indice = array.indexOf(produto)

  array.splice(indice, 1)

  let display = document.querySelector(".itemlista")

  display.innerHTML=''

  x = x-1


  for  (let i=0; i<array.length; i++) { 

    display.innerHTML += `    
    <div class="container">
  <div class="row">
    <div class="col-sm">Nome</div>
    <div class="col-sm">${array[i]}</div>
    <div class="col-sm">
      <button onclick="editar('${array[i]}')" id="editbutton" data-bs-toggle="modal" data-bs-target="#idEdit" >Editar</button>
      <button onclick="excluir('${array[i]}')" id="deletebutton">Excluir</button>
    </div>
  </div>
</div> `


  }

}

function editar(teste) {

  var  modal = document.getElementById("idEdit");

  let produto = array[teste]

  document.getElementById("edit").value = produto
 
  modal.classList.remove("fade")

  modal.classList.add("d-flex")

  indicenegativo = teste

  console.log(indicenegativo)

}

function fechar(){

  var  modal = document.getElementById("idEdit");

  modal.classList.remove("d-flex")

  modal.classList.add("fade")

}

function salvar(){
 
  let produto = document.querySelector("#edit").value

  if(indicenegativo > -1){
    
    array[indicenegativo] = edit
  }

  x = 0

  let display = document.querySelector(".itemlista")

  display.innerHTML = ""

  while(x < array.length){

    display.innerHTML += `    
    <div class="container" id="${x}">
  <div class="row">
    <div class="col-sm">Nome</div>
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

console.log(array)

}




