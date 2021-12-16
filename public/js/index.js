
var i = 0
while (i < produkter.length) {
    var a = document.createElement('a') // skapar ett element med tage a (<a>länk</a>)
    // sedan säger den med hjälp av innerHTML att <a></a> ska ha allt under innuti sig
    a.innerHTML = `
        <div class="image-container">
            <img src="public/images/${produkter[i].bild}" alt="product3">
        </div>
        <div class="product-text">
            <p class="product-name">${produkter[i].namn}</p>
            <p class="product-price">${produkter[i].pris}kr</p>
        </div>
    `
    a.href = '/product.html?id=' + produkter[i].id // <a></a> ska ha en href till ./product.html?id= sedan idt
    a.classList.add('product')                     // <a></a> ska ha ett class namn som är product
    document.querySelector('.product-container').appendChild(a) // lägg till i product-container
    i++
}