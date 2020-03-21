// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    console.log(response.data)
    Object.keys(response.data.articles).forEach(subject => {
        response.data.articles[subject].forEach(attribute => {
            document.querySelector('.cards-container').append(cardCreator(attribute));
        console.log(attribute);
        })
    });
})
.catch(error => {
    console.log(error)
})

function cardCreator(object) {
    
    const divCard = document.createElement('div')
    const divHeadline = document.createElement('div')
    const divAuthor = document.createElement('div')
    const divImg = document.createElement('div')
    const img = document.createElement('img')
    const span = document.createTreeWalker('span')

    divCard.append(divHeadline)
    divCard.append(divAuthor)
    divAuthor.append(divImg)
    divAuthor.append(span)
    divImg.append(img)

    divCard.classList.add('card')
    divHeadline.classList.add('headline')
    divAuthor.classList.add('author')
    divImg.classList.add('img-container')
    divHeadline.textContent = object.headline
    img.src = object.authorPhoto
    span.textContent = object.authorName
    
    return divCard
}