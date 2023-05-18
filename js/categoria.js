const minusBtn = document.querySelector('.input__minus');
const plusBtn = document.querySelector('.input__plus');
let userInput = document.querySelector('.input__number');

let userInputNumber = 0;

plusBtn.addEventListener('click', () => {
  userInputNumber++;
  userInput.value = userInputNumber;
  console.log(userInputNumber);
});

minusBtn.addEventListener('click', () => {
  userInputNumber--;
  if (userInputNumber <= 0) {
    userInputNumber = 0;
  }
  userInput.value = userInputNumber;
  console.log(userInputNumber);
});

const addToCarBtn = document.querySelector('.details__button');
let cartNotification = document.querySelector('.header__cart--notification');
let lastValue = parseInt(cartNotification.innerText);

addToCarBtn.addEventListener('click', () => {
  lastValue = lastValue + userInputNumber;
  cartNotification.innerText = lastValue;
  cartNotification.style.display = 'block';
  drawProductInModal();
});

const cartIconBtn = document.querySelector('.header__cart');
const cartModal = document.querySelector('.cart-modal');
const productContainer = document.querySelector('.cart-modal__chekout-container');

cartIconBtn.addEventListener('click', () => {
  cartModal.classList.toggle('show');
  if (lastValue == 0) {
    productContainer.innerHTML = '<p class="cart-empty">El carrito de compras está vacío</p>';
  } else {
    drawProductInModal();
  }
});

function deleteProduct() {
  const deleteProductBtn = document.querySelector('.cart-modal__delete');
  deleteProductBtn.addEventListener('click', () => {
    productContainer.innerHTML = '<p class="cart-empty">El carrito de compras está vacío</p>';
    lastValue = 0;
    cartNotification.innerText = lastValue;
  });
}

const imageContainer = document.querySelector('.gallery__image-container');
const previusGalleryBtn = document.querySelector('.gallery__previus');
const nextGalleryBtn = document.querySelector('.gallery__next');
let imgIndex = 1;

nextGalleryBtn.addEventListener('click', () => {
  changeNextImage(imageContainer);
});

previusGalleryBtn.addEventListener('click', () => {
  changePreviusImage(imageContainer);
});

const imagesModal = document.querySelector('.modal-gallery__background');
const closeModalBtn = document.querySelector('.modal-gallery__close');

imageContainer.addEventListener('click', () => {
  if (window.innerWidth >= 1115) {
    imagesModal.style.display = 'grid';
  }
});

closeModalBtn.addEventListener('click', () => {
  imagesModal.style.display = 'none';
});

let thumbnails = document.querySelectorAll('.gallery__thumnail');
thumbnails = [...thumbnails];

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('click', (event) => {
    console.log(event.target.id);
    imageContainer.style.backgroundImage = `url('../img/image-product-${event.target.id}.jpg')`;
  });
});

let modalthumbnails = document.querySelectorAll('.modal-gallery__thumnail');
const modalImageContainer = document.querySelector('.modal-gallery__image-container');
modalthumbnails = [...modalthumbnails];

modalthumbnails.forEach((modalthumbnail) => {
  modalthumbnail.addEventListener('click', (event) => {
    console.log(event.target.id.slice(-1));
    modalImageContainer.style.backgroundImage = `url('../img/image-product-${event.target.id.slice(-1)}.jpg')`;
  });
});

const previusModalBtn = document.querySelector('.modal-gallery__previus');
const nextModalBtn = document.querySelector('.modal-gallery__next');

nextModalBtn.addEventListener('click', () => {
  changeNextImage(modalImageContainer);
});

previusModalBtn.addEventListener('click', () => {
  changePreviusImage(modalImageContainer);
});

const hamburgerMenu = document.querySelector('.header__menu');
const modalNavbar = document.querySelector('.modal-navbar__background');
const closeModalNavbar = document.querySelector('.modal-navbar__close-icon');

modalNavbar.style.display = 'none';

hamburgerMenu.addEventListener('click', () => {
  console.log('abrir modal');
  modalNavbar.style.display = 'block';
});

closeModalNavbar.addEventListener('click', () => {
  modalNavbar.style.display = 'none';
});

function drawProductInModal() {
  productContainer.innerHTML = `
    <div class="cart-modal__details-container">
      <img class="cart-modal__image" src="../img/image-product-1-thumbnail.jpg" alt="">
      <div>
        <p class="cart-modal__product">Gundam Aerial Limited Edition...</p>
        <p class="cart-modal__price">$125.00 x ${lastValue} <span>$${lastValue * 125}.00</span></p>
      </div>
      <img class="cart-modal__delete" src="../img/icon-delete.svg" alt="delete">
    </div>
    <button class="cart-modal__chekount">Checkout</button>`;

  deleteProduct();
}

function changeNextImage(imgContainer) {
  if (imgIndex === 4) {
    imgIndex = 1;
  } else {
    imgIndex++;
  }
  imgContainer.style.backgroundImage = `url('../img/image-product-${imgIndex}.jpg')`;
}

function changePreviusImage(imgContainer) {
  if (imgIndex === 1) {
    imgIndex = 4;
  } else {
    imgIndex--;
  }
  imgContainer.style.backgroundImage = `url('../img/image-product-${imgIndex}.jpg')`;
}