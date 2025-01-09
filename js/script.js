//DOM ELEMENTS
const photoboardElm = document.getElementById("photoboard")
const imgReplaceElm = document.querySelectorAll("img-fluid");


//EVENTS

axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
    .then(function (res) {
        let photocard = res.data;
        photocard.forEach((photo) => {
            photoboardElm.innerHTML += `
            <div class="col">
                <div class="card">
                    <div class="image">
                        <img src="${photo.url}" alt="img" class="img-fluid">
                        <img src="img/pin.svg" class="pin">
                    </div>
                    <div class="desc">${photo.title}</div>
                </div>
            </div>`
        })
    })




