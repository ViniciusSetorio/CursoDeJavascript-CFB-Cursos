//const p1 = document.querySelector('#p1');

// pessoas.addEventListener('click', (evt) => {
//     const el = evt.target
//     el.classList.add('destaque')
// });

const pessoas = [...document.querySelectorAll(".pessoa")];

pessoas.map((el) => {
  el.addEventListener("click", (evt) => {
    const el = evt.target;
    el.classList.add("destaque");
    console.log(`${el.innerHTML} foi clicado!`);
  });
});
