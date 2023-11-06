const dp1 = document.getElementById("p1");
const dp2 = document.getElementById("p2");
const dp3 = document.getElementById("p3");

const arrayElementos = [dp1, dp2, dp3];
//console.log(arrayElementos);

// Retorna um HTMLcolection
//const colecaoHTML = document.getElementsByTagName('div');
//console.log(colecaoHTML);

//Retorna o HTMLcolection em forma de array
const arrayColecaoHTML = [...document.getElementsByTagName("div")];
console.log(arrayColecaoHTML);

arrayColecaoHTML.map((e) => {
  console.log(e);
});
