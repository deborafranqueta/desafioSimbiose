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
    <div class="col-sm">One of three columns</div>
    <div class="col-sm">${array[x]}</div>
    <div class="col-sm">
      <button onclick="editar()" id="editbutton">Editar</button>
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

  for  (let i=0; i<array.length; i++) {

    display.innerHTML += `    
    <div class="container">
  <div class="row">
    <div class="col-sm">One of three columns</div>
    <div class="col-sm">${array[i]}</div>
    <div class="col-sm">
      <button onclick="editar()" id="editbutton">Editar</button>
      <button onclick="excluir('${array[i]}')" id="deletebutton">Excluir</button>
    </div>
  </div>
</div> `


  }


console.log(indice);

}

