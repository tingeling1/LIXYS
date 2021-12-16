// ta det som står i urlen efter ?id=
// och lägg det i variablen id
var id = window.location.search.split('?id=')[1]

var i = 0
// letar igenom produkter efter den profukten med id't som är samma som det som står i urlen
while (i < produkter.length) {
    if (produkter[i].id == id) { // om den hittar en matchning
        var div = document.createElement('div') // skapa en div <div></div>
        // lägg till innuti diven
        div.innerHTML = `
            <div class="image-container">
                <img src="public/images/${produkter[i].bild}" alt="product3">
            </div>
            <div class="produkt-text">
                <p class="produkt-name">${produkter[i].namn}</p>
                <p class="produkt-price">${produkter[i].pris}kr</p>
            </div>
        `
        div.classList.add('produkt') // ger diven ett class namn
        document.querySelector('.product-container').appendChild(div) // lägger till diven i product container
    }
    i++
}