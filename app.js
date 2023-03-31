let card = {
    emoji: '💯',
    title: '100',
    keywords: 'Hundred, points, symbol, wow, win, perfect, parties',
}


function createCard(obj) {
    const body = document.body;
    const cardDiv = document.createElement('div')
    cardDiv.className = 'card'

    const emoj = document.createElement('p')
    emoj.className = 'emoj'
    emoj.innerText = card.emoji

    const title = document.createElement('p')
    title.className = 'title'
    title.innerText = card.title

    const keywords = document.createElement('p')
    keywords.className = 'desc'
    keywords.innerText = card.keywords


    cardDiv.append(emoj, title, keywords)
    body.append(cardDiv)

}

createCard(card)

