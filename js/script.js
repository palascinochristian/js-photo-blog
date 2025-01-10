
//FUNCTIONS
const fullImg = (imgUrl) => {
    const overlay = document.getElementById("image-overlay"); //Al richiamo della funzione seleziono l'overlay
    overlay.querySelector("img").src = imgUrl; //Passo il valore di imgUrl all'immagine dell'overlay
    overlay.classList.add("active"); // Aggiungo la classe active per mostrarlo
};


//DOM ELEMENTS
const photoboardElm = document.getElementById("photoboard")

//EVENTS
//on page load
axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
    .then(function (res) {
        let photocard = res.data;
        let innerCard = "";
        photocard.forEach((photo) => {
            innerCard += `
            <div class="col">
                <div class="card">
                    <div class="image">
                        <img src="${photo.url}" alt="img" class="img-fluid">
                        <img src="img/pin.svg" class="pin">
                    </div>
                    <div class="desc">${photo.title}</div>
                </div>
            </div>`
        });
        photoboardElm.innerHTML = innerCard;

        const cards = document.querySelectorAll(".card"); //Seleziono tutte le card dopo che sono state generate nel DOM
        cards.forEach((card) => { // Per ogni card, aggiungo l'evento listener , e al click prendo il valore di .src dell'img
            const img = card.querySelector("img");
            card.addEventListener("click", () => fullImg(img.src)) //Al click passo il valore di img.src alla funzione fullImg che attiva l'overlay
        })
        });




