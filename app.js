import{data as emoji} from './data.js';


 let card = {
    title: '💯',
    simbol: '100',
    keywords: 'Hundred, points, symbol, wow, win, perfect, parties',
}
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
    emoj.innerText = card.title

    const title = document.createElement('p')
    title.className = 'title'
    title.innerText = card.simbol

    const keywords = document.createElement('p')
    keywords.className = 'desc'
    keywords.innerText = card.keywords


    wrap.append(cardDiv)
    cardDiv.append(emoj, title, keywords)
    body.append(wrap)

}

createCard(card)

