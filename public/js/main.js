var produkter = [
    {
        id: 4523761,            // unikt id kan vara vad som helst men måste vara unikt
        namn: "Stussy hoodie",  // Namn på produkten
        pris: 1499,             // Priset
        storlek: "M",           // storleken
        bild: "product1.png"    // fil namnet på bilden. Bilden måste vara i images mappen
    },
    {
        id: 6534890,
        namn: "Stussy beige",
        pris: 899,
        storlek: "S",
        bild: "product2.png"
    },
    {
        id: 6534789,
        namn: "Stussy röd",
        pris: 899,
        storlek: "M",
        bild: "product3.png"
    },
    {
        id: 9938443,
        namn: "Stussy hatt",
        pris: 599,
        storlek: "L",
        bild: "product4.png"
    }, 
]

// om man klickar på elementet med classen: "search-btn" så händer följande
document.querySelector('.search-btn').addEventListener('click', () => {
    document.querySelector('.search-overlay').style.display = "flex" // Visa search-overlay elementet
})

// om man klickar på cancel knappen så händer följande
document.querySelector('.search-cancel-btn').addEventListener('click', () => {
    document.querySelector('.search-overlay').style.display = "none" // gömmer search-overlay elementet
})

// när man klickar på tangentbordet i search inputen så lyssnar den efter vilken knapp man tryckt på
document.querySelector('.search-bar').addEventListener('keyup', (event) => {
    var query = document.querySelector('.search-bar').value
    // Om knappen man tryckt på är Enter
    if (event.key == "Enter") {
        // letar igenom produkter arrayen och letar efter den produkt som har samma namn som det man sökte på
        for (let i = 0; i < produkter.length; i++) {
            const produkt = produkter[i];
            if (produkt.namn.toLowerCase() == query.toLowerCase()) { // om den hittar en matchning
                window.location.href = '/product.html?id='+produkt.id // byt sida till produkt sidan
            }
        }

    }
})
