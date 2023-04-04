import{data as emoji} from './data.js';

const body = document.body;
const wrap = document.createElement('div')
wrap.className = 'wrapper'
body.append(wrap)



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
    data.forEach(element => {
        element.keywords = deleteDuplicates(element.keywords)
        createCard(element)
    });

}
renderCard(emoji)
createCard(emoji)


const input = document.querySelector('#finder')
const elem = document.querySelectorAll('.card')


input.addEventListener("input", (event) => {

    const filtered = Object.values(elem)
    filtered.filter(card => {
         if (card.children[2].innerHTML.toLowerCase().includes(event.target.value.toLowerCase()) || card.children[1].innerHTML.toLowerCase().includes(event.target.value.toLowerCase()) ){
             console.log(card)
             card.style.display = 'flex'
         } else {
            card.style.display = 'none'
         }
    })

}) 
function deleteDuplicates(str){
    let arr2 = [];
    let arr = str.split(" ")
    arr.forEach((arrElement) =>{
        if(!arr2.includes(arrElement)){
            arr2.push(arrElement)
        }
    })
    return arr2.join(" ")
}   


console.dir(elem)

