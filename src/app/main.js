window.onload = function() {
    fetch('/src/views/recursos/navbar.html')
    .then(response => response.text())
    .then(data => {
          document.querySelector('header').innerHTML = data;
    })

    fetch('/src/views/recursos/footer.html')
    .then(response => response.text())
    .then(data =>{
          document.querySelector('footer').innerHTML = data;
    })
}