import{data as emoji} from './data.js';



function renderCard(data){
    data.forEach(element => createCard(element));

}
renderCard(emoji)

function createCard(obj) {
    const body = document.body;
    const wrap = document.createElement('div')
    wrap.className = 'wrapper'
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
    body.append(wrap)

}

createCard(emoji)

