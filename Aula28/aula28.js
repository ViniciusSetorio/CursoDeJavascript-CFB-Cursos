//MÉTODO MAP

const converterInt = (e) => parseInt(e);
let num = ["1", "2", "3"].map(converterInt);
console.log(num);

const el = document.getElementsByTagName('div')
const val = Array.prototype.map.call(el, ({innerHTML}) => innerHTML )
console.log(val)

let element = document.getElementsByTagName('div')
element = [...element]
element.map( (e,i) => {
    e.innerHTML = 'Alguma coisa aí'
    console.log(e.innerHTML)
})

const pessoas = ['Kawai', 'Arthur', 'Aluiso']
pessoas.map( (ele, ind) => {
    if (ele == 'Arthur') {
        console.log(`O fuboca master é ${ele} com index ${ind}.`)
    }
})
