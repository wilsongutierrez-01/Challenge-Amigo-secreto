// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Creamos el array donde se guardaran nuestra lista de amigos
let amigos = [];
let listaHtml = document.getElementById('listaAmigos');
let amigoSecreto = '';

function agregarAmigo() {
  let nombre = document.getElementById('amigo').value;
  // Nos aseguramos que el nombre no este vacio
  if (nombre == '') {
    alert('Por favor ingrese un nombre valido');
  } else {
    //Si amigo, se limpia cuando se inicia un nuevo sorteo
    if (amigoSecreto) {
      document.getElementById('resultado').innerHTML = '';
    }
    //Se agrefa el nombre al array de amigos
    amigos.push(nombre);
    //Se limpia el input donde se ingresa el nombre
    document.getElementById('amigo').value = '';
    actualizarLista();
  }
  return;
}

function sortearAmigo() {
  //Verificamos que ya tengamos amigos
  if (amigos.length < 3 ) {
    alert('Por favor ingresa una lista de minimo 3 amigos')
  } else {
    //Obtenemos un numero random entre el total de nuestro array
    let index = Math.floor(Math.random() * amigos.length );
    //Obtenemos el amigo correspondiente al index
    amigoSecreto =  amigos[index];
    //Limpiamos la lista de amigos
    listaHtml.innerHTML = '';
    //Mostramos el amigo secreto
    document.getElementById('resultado').innerHTML = `<p>Tu amigo secreto es: ${amigoSecreto}</p>`;
    //reiniciamos el array
    amigos = [];
  }
  return;
}

function actualizarLista() {
   //Se limpia el html para que no se repitan los nombres que ya estan
    listaHtml.innerHTML = '';
    //Se agrega un elemento de lista por cada elemento en el array
    for (var i =0 ; i < amigos.length; i++) {
      listaHtml.innerHTML += `<li>${amigos[i]}</li>`;
    }
    return;
}