const todasPessoas = [...document.getElementsByClassName('pessoa')];
const pessoaFub = [...document.getElementsByClassName('fuboca')];

console.log(todasPessoas);
console.log(pessoaFub);


pessoaFub.map( (el) => {
  el.classList.add('destaque')
})