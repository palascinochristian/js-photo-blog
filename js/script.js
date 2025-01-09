
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
    });




