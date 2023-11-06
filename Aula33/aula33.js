const divTodas = [...document.getElementsByTagName("div")];
const todasPessoas = [...document.getElementsByClassName("pessoa")];
const pessoaFub = document.getElementById("p2");
const Especial = document.getElementById('c1');
const Especial2 = document.getElementById("c2");

//const query_divTodas = [...document.querySelectorAll('div[class]')];
const query_divTodas = [...document.querySelectorAll("div > p")];
const query_todasPessoas = [...document.querySelectorAll('.pessoa')];
const query_pessoaFub = [...document.querySelectorAll('.fuboca, p')];
const query_Especial = document.querySelectorAll("#c1") [0];
const query_Especial2 = document.querySelectorAll("#c2");

console.log(query_divTodas);
console.log(query_todasPessoas);
console.log(query_pessoaFub);
console.log(query_Especial);
console.log(query_Especial2);
// console.log(divTodas);
// console.log(todasPessoas);
// console.log(pessoaFub);

// pessoaFub.map((el) => {
//   el.classList.add("destaque");
// });
