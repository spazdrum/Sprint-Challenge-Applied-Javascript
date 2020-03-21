// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function header() {

    const divHeader = document.createElement('div')
    const span = document.createElement('span')
    const h1 = document.createElement('h1')
    const spanTwo = document.createElement('span')

    divHeader.append(span)
    divHeader.append(h1)
    divHeader.append(spanTwo)

    divHeader.classList.add('header')
    span.classList.add('date')
    spanTwo.classList.add('temp')

    span.textContent = ('SMARCH 28, 2019')
    h1.textContent = ('Lambda Times')
    spanTwo.textContent = ('98°')

    
    return divHeader
}

document.querySelector('.header-container').append(header())



