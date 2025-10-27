//ESTO ES PARA LOS IF
const boton = document.getElementById("btnVerificar");
const campoEdad = document.getElementById("edad");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", () => {
  let edad = parseInt(campoEdad.value);

  if (edad >= 18) {
    resultado.textContent = "Eres mayor de edad";
    resultado.style.color = "green";
  } else if (edad > 0) {
    resultado.textContent = "Eres menor de edad";
    resultado.style.color = "orange";
  } else {
    resultado.textContent = "Edad inválida";
    resultado.style.color = "red";
  }
});

//ESTO ES PARA LOS IF CON TRY-CATCH

const botonn = document.getElementById("btnCalcular");
const campo = document.getElementById("numero");
const salida = document.getElementById("salida");

botonn.addEventListener("click", () => {
  try {
    let n = parseFloat(campo.value);

    if (isNaN(n)) {
      throw new Error("Debe ingresar un número válido");
    }
    if (n === 0) {
      throw new Error("No se puede dividir entre cero");
    }

    let resultado = 1 / n;
    salida.textContent = `El inverso es ${resultado}`;
    salida.style.color = "green";
  } catch (error) {
    salida.textContent = error.message;
    salida.style.color = "red";
  }
});

//PARA EL CASO DE LOS SWITCH

const selectFruta = document.getElementById("cmbFrutas");
const botoM = document.getElementById("btnVerFruta");
const mensaje = document.getElementById("mensajeFruta");

botoM.addEventListener("click", () => {
  let fruta = selectFruta.value; // obtenemos el valor seleccionado

  switch (fruta) {
    case "manzana":
      mensaje.textContent = "¡Las manzanas son dulces y crujientes!";
      mensaje.style.color = "red";
      break;

    case "banana":
      mensaje.textContent = "¡Las bananas son energéticas y suaves!";
      mensaje.style.color = "yellow";
      break;

    case "naranja":
      mensaje.textContent = "¡Las naranjas son jugosas y llenas de vitamina C!";
      mensaje.style.color = "orange";
      break;

    default:
      mensaje.textContent = "¡Esa fruta es interesante!";
      mensaje.style.color = "green";
      break;
  }
});

//LISTA CON FOR
const frutas = ["Manzana", "Banana", "Naranja", "Kiwi", "Fresa"];

const btnFor = document.getElementById("btnFor");
const listaFor = document.getElementById("listaFrutasFor");

btnFor.addEventListener("click", () => {
  listaFor.innerHTML = ""; // Limpiar lista anterior

  for (let i = 0; i < frutas.length; i++) {
    const li = document.createElement("li");
    li.textContent = frutas[i];
    listaFor.appendChild(li);
  }
});

//LISTA CON WHILE

const btnWhile = document.getElementById("btnWhile");
const listaWhileBtn = document.getElementById("listaWhileBtn");

btnWhile.addEventListener("click", () => {
  listaWhileBtn.innerHTML = "";
  let i = 1;

  while (i <= 5) {
    const li = document.createElement("li");
    li.textContent = `Elemento ${i}`;
    listaWhileBtn.appendChild(li);
    i++;
  }
});

//LISTA CON DO WHILE

const btnDoWhile = document.getElementById("btnDoWhile");
const listaDoWhileBtn = document.getElementById("listaDoWhileBtn");

btnDoWhile.addEventListener("click", () => {
  listaDoWhileBtn.innerHTML = "";
  let k = 1;

  do {
    const li = document.createElement("li");
    li.textContent = `Elemento ${k}`;
    listaDoWhileBtn.appendChild(li);
    k++;
  } while (k <= 5);
});

//EJEMPLO DE FUNCIONES

const btnSumar = document.getElementById("btnSumar");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const resultadoSuma = document.getElementById("resultadoSuma");

// Definimos la función
function sumarNumeros(a, b) {
  return a + b;
}

// Listener para el botón
btnSumar.addEventListener("click", () => {
  const n1 = parseFloat(num1.value);
  const n2 = parseFloat(num2.value);

  if (isNaN(n1) || isNaN(n2)) {
    resultadoSuma.textContent = "Ingrese dos números válidos";
    resultadoSuma.style.color = "red";
    return;
  }

  const suma = sumarNumeros(n1, n2);
  resultadoSuma.textContent = `Resultado: ${suma}`;
  resultadoSuma.style.color = "green";
});

//EJEMPO DE Expresiones y operadores

const btnCheck = document.getElementById("btnCheck");
const numCheck = document.getElementById("numCheck");
const resultadoCheck = document.getElementById("resultadoCheck");

btnCheck.addEventListener("click", () => {
  const n = parseFloat(numCheck.value);

  if (isNaN(n)) {
    resultadoCheck.textContent = "Ingrese un número válido";
    resultadoCheck.style.color = "red";
    return;
  }

  // Usamos operadores de comparación y lógicos
  if (n > 0) {
    resultadoCheck.textContent = "El número es positivo ✅";
    resultadoCheck.style.color = "green";
  } else if (n < 0) {
    resultadoCheck.textContent = "El número es negativo ⚠️";
    resultadoCheck.style.color = "orange";
  } else {
    resultadoCheck.textContent = "El número es cero ⬜";
    resultadoCheck.style.color = "blue";
  }
});

//EJEMPLO MATH

const btnRandom = document.getElementById("btnRandom");
const resultadoRandom = document.getElementById("resultadoRandom");

btnRandom.addEventListener("click", () => {
  const n = Math.floor(Math.random() * 100) + 1;
  resultadoRandom.textContent = `Número aleatorio: ${n}`;
  resultadoRandom.style.color = "blue";
});

//EJEMPLO NUM

let nNum1 = 42;
let nNum2 = 3.1416;

console.log(typeof nNum1); // number
console.log(Number.MAX_VALUE); // Valor máximo representable
console.log(Number.MIN_VALUE); // Valor mínimo positivo
console.log(Number.isInteger(num1)); // true
console.log(Number.isInteger(nNum2)); // false

//CASO CON DATE

const btnFecha = document.getElementById("btnFecha");
const resultadoFecha = document.getElementById("resultadoFecha");

btnFecha.addEventListener("click", () => {
  const ahora = new Date();
  resultadoFecha.textContent = `Hoy es ${ahora.toLocaleDateString()} y son las ${ahora.toLocaleTimeString()}`;
  resultadoFecha.style.color = "green";
});

//EJEMPLO DE FORMATEO DE TEXTO

const btnProcesar = document.getElementById("btnProcesar");
const textoInput = document.getElementById("textoInput");
const resultadoTexto = document.getElementById("resultadoTexto");

btnProcesar.addEventListener("click", () => {
  const texto = textoInput.value;

  if (texto.trim() === "") {
    resultadoTexto.textContent = "Ingrese algún texto";
    resultadoTexto.style.color = "red";
    return;
  }

  resultadoTexto.innerHTML = `
      Longitud: ${texto.length} <br>
      Mayúsculas: ${texto.toUpperCase()} <br>
      Minúsculas: ${texto.toLowerCase()} <br>
      Primer carácter: ${texto.charAt(0)} <br>
      Reemplazar espacios por guiones: ${texto.replace(/ /g, "-")} <br>
      Sin espacios al inicio/final: ${texto.trim()}
    `;
  resultadoTexto.style.color = "green";
});

//EJEMPLO DE ARRAY

const listaFrutasArray = document.getElementById("listaFrutasArray");
const nuevaFruta = document.getElementById("nuevaFruta");
const btnAgregar = document.getElementById("btnAgregar");
let lista = ["Manzana", "Banana", "Naranja"];

function actualizarLista() {
  listaFrutasArray.innerHTML = "";
  for (let i = 0; i < lista.length; i++) {
    const li = document.createElement("li");
    li.textContent = lista[i];
    listaFrutasArray.appendChild(li);
  }
}

btnAgregar.addEventListener("click", () => {
  const fruta = nuevaFruta.value.trim();
  if (fruta === "") return;
  lista.push(fruta);
  actualizarLista();
  nuevaFruta.value = "";
});

actualizarLista();

//EJEMPLO DE DOM ID

const parrafoID = document.getElementById("parrafoID");
const btnID = document.getElementById("btnID");

btnID.addEventListener("click", () => {
  parrafoID.style.color = "blue";
  parrafoID.textContent = "¡Color cambiado usando getElementById!";
});

//EJEMPLO DE DOM ETIQUETA

const btnTag = document.getElementById("btnTag");
const parrafos = document.getElementsByTagName("p"); // devuelve HTMLCollection

btnTag.addEventListener("click", () => {
  for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].style.color = "green";
  }
});

//EJEMPLO DE DOM NOMBRE DE CLASE

const btnClase = document.getElementById("btnClase");
const elementosClase = document.getElementsByClassName("resaltado");

btnClase.addEventListener("click", () => {
  for (let i = 0; i < elementosClase.length; i++) {
    elementosClase[i].style.backgroundColor = "yellow";
  }
});

//EJEMPLO DE DOM SELECTORES CSS

const btnQuery = document.getElementById("btnQuery");
const btnQueryAll = document.getElementById("btnQueryAll");

const pQuery = document.querySelector("#pQuery");
const pQueryAll = document.querySelectorAll(".pQueryAll");

btnQuery.addEventListener("click", () => {
  pQuery.style.color = "purple";
});

btnQueryAll.addEventListener("click", () => {
  pQueryAll.forEach((p) => (p.style.color = "orange"));
});

//EJEMPLO DE DOM COLECCIONES DE OBJETOS HTML

const items = document.getElementsByTagName("li"); // HTMLCollection
const btnColeccion = document.getElementById("btnColeccion");

btnColeccion.addEventListener("click", () => {
  for (let i = 0; i < items.length; i++) {
    items[i].style.fontWeight = "bold";
    items[i].style.color = "red";
  }
});
