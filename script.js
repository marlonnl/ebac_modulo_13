const carouselElement = document.querySelector('#carousel');
const clientesElement = document.querySelector('#carousel-clientes');

const carousel = new bootstrap.Carousel(carouselElement, {
    interval: 2000
});

const carouselClientes = new bootstrap.Carousel(clientesElement, {
    interval: 2500
});