var array = []
var x = 0;

function adicionar(){
  let inputText = document.querySelector("#inputNome").value

  let display = document.querySelector(".itemlista")


  if(inputText == ""){

    return;
  }else{

    array.push(inputText)
  }

  display.innerHTML += `    
    <div class="container">
  <div class="row">
    <div class="col-sm">Nome</div>
    <div class="col-sm">${array[x]}</div>
    <div class="col-sm">
      <button onclick="editar(${array[x]})" id="editbutton" data-bs-toggle="modal" data-bs-target="#idEdit">Editar</button>
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
      <button onclick="editar(idEdit)" id="editbutton" data-bs-toggle="modal" data-bs-target="#idEdit" >Editar</button>
      <button onclick="excluir('${array[i]}')" id="deletebutton">Excluir</button>
    </div>
  </div>
</div> `


  }

}

function editar(teste) {

  var  modal = document.getElementById("idEdit");

  modal.classList.remove("fade")

  modal.classList.add("d-flex")



  console.log(teste)



}

function fechar(){

  var  modal = document.getElementById("idEdit");

  modal.classList.remove("d-flex")

  modal.classList.add("fade")

}

//function salvar(){

  



