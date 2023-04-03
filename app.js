import{data as emoji} from './data.js';

const body = document.body;
const wrap = document.createElement('div')
wrap.className = 'wrapper'
body.append(wrap)
const input = document.querySelector('#finder')


function createCard(obj) {

    const cardDiv = document.createElement('div')
    cardDiv.className = 'card'

    const emoj = document.createElement('p')
    emoj.className = 'emoj'
    emoj.innerText = obj.symbol

    const title = document.createElement('p')
    title.className = 'title'
    title.innerText = obj.title

    const keywords = document.createElement('p')
    keywords.className = 'desc'
    keywords.innerText = obj.keywords


    wrap.append(cardDiv)
    cardDiv.append(emoj, title, keywords)

}
function renderCard(data){
    data.forEach(element => createCard(element));

}
renderCard(emoji)
createCard(emoji)

const elem = document.querySelectorAll('.card')
console.dir(elem)

input.addEventListener('change', (event) => {
    console.log(event.target.value)
    elem.forEach(el => console.dir(el.children[2].innerText))
})








