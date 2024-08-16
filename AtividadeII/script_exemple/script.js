// script.js
console.log("Script funcionando!");

// Buscar Fotos
document.getElementById("fetchButton").addEventListener("click", () => {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
        .then(response => response.json())
        .then(photos => {
            const photoGallery = document.getElementById("photoGallery");
            photoGallery.innerHTML = "";

            photos.forEach(photo => {
                const photoDiv = document.createElement("div");
                photoDiv.classList.add("photo");

                const imgElement = document.createElement("img");
                imgElement.src = photo.thumbnailUrl;
                imgElement.alt = photo.title;

                const caption = document.createElement("p");
                caption.textContent = photo.title;

                photoDiv.appendChild(imgElement);
                photoDiv.appendChild(caption);
                photoGallery.appendChild(photoDiv);
            });
        })
        .catch(err => console.error("Erro ao buscar as fotos: ", err));
});

// Limpar Fotos
document.getElementById("clearButton").addEventListener("click", () => {
    const photoGallery = document.getElementById("photoGallery");
    photoGallery.innerHTML = "";
    console.log("Galeria limpa.");
});
