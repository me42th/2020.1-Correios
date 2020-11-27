function openModalImage(title, path) {
    let modal = document.getElementById("modal-container");
    let modalTitle = document.getElementById("modal-title");
    let modalImage = document.getElementById("modal-image");
    modal.style.display = "block";
    modalTitle.innerText = title;
    modalImage.src = path;
    console.log(path, title);
}

// Get the modal
var modal = document.getElementById("modal-container");

// Get the <span> element that closes the modal
var span = document.getElementById("modal-close");

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}