//Cambio de cantidad de articulo  ingresado por el usuario
const minusBtn = document.querySelector('.input__minus');
const plusBtn = document.querySelector('.input__plus');
let userInput = document.querySelector('.input__number');


let userInputNumber = 0;

plusBtn.addEventListener('click', ()=>{
    userInputNumber++;
    userInput.value = userInputNumber;
    console.log(userInputNumber);
});


minusBtn.addEventListener('click', ()=>{
    userInputNumber--;
    if(userInputNumber <= 0){
        userInputNumber = 0;
    }
    userInput.value = userInputNumber;
    console.log(userInputNumber);
});

//agregar el total de producto al carrito cuando se preciona el btn add to cart

const addToCarBtn = document.querySelector('.details__button');
let cartNotification = document.querySelector('.header__cart--notification');

//variable de valor
let lastValue = parseInt(cartNotification.innerText);

addToCarBtn.addEventListener('click', ()=>{
    lastValue = lastValue + userInputNumber;
    
    //console.log(lastValue);

    

    cartNotification.innerText = lastValue;
    cartNotification.style.display = 'block';
    drawProductInModal();
    //para que se muestre en el modal
    //priceModal.innerHTML = `$125 x${lastValue}  <span>$${lastValue*125}.00</span>`
   // console.log(cartNotification);
})


//mostar el modal con el detalle del carrito

const cartIconBtn = document.querySelector('.header__cart');
const cartModal = document.querySelector('.cart-modal');
//variable del precio en carrito
//let priceModal = document.querySelector('.cart-modal__price');
const productContainer = document.querySelector('.cart-modal__chekout-container');

cartIconBtn.addEventListener('click', ()=>{
    //cartModal.style.display = 'block';  --- por un toggle "si esta esa clase la quita osino la cambia"
    cartModal.classList.toggle('show');
    // se coloca comilla simple pero invertida para poder inserta dato en el html
    //  ------>  ${ }    <-------- para ingrsar la variable
    //en span modicar para hacer valor dinamico
   // priceModal.innerHTML = `$125 x${lastValue}  <span>$${lastValue*125}.00</span>`
   if(lastValue == 0){
        productContainer.innerHTML ='<p class="cart-empty">Esta Vacio el carrito de Gundam</p>';
    
   }else{
        drawProductInModal();
   }

   
});


//borrar el contenido del carrito
function deleteProduct(){
    const deleteProductBtn = document.querySelector('.cart-modal__delete');
         deleteProductBtn.addEventListener('click', ()=>{
            //productContainer.innerText = ' Your cart is empty';
            productContainer.innerHTML ='<p class="cart-empty">Esta Vacio el carrito de Gundam</p>';
            lastValue = 0;
            cartNotification.innerText = lastValue;
    });
    
}


//cambiar imagenes cuando se preciones los botones flechas
//carrosel
const imageContainer = document.querySelector('.gallery__image-container');
const previusGalleryBtn = document.querySelector('.gallery__previus');
const nextGalleryBtn = document.querySelector('.gallery__next');

let imgIndex = 1;
// un arreiglo
//const imageUrls = [
 //'../img/image-product-1.jpg',
 //'../img/image-product-2.jpg',
 //'../img/image-product-3.jpg',
 //'../img/image-product-4.jpg',

//]

nextGalleryBtn.addEventListener('click', ()=>{
    changeNextImage(imageContainer);
})

previusGalleryBtn.addEventListener('click', ()=>{
    changePreviusImage(imageContainer);
})



// modificar style.scss por git para que actualize el main.css por si solo
//sass sass/style.css main.scss main.css -- watch 


//mostrar el modal de imagenes cuando haga click en la imagen principal
const imagesModal = document.querySelector('.modal-gallery__background');
const closeModalBtn = document.querySelector('.modal-gallery__close');

imageContainer.addEventListener('click', ()=>{
    if(window.innerWidth >= 1115){
        imagesModal.style.display = 'grid';
    }
   
 
})

closeModalBtn.addEventListener('click', ()=>{
    imagesModal.style.display = 'none' ;

})


//cambiar las imagenes principales desde las thumnails
let thumbnails = document.querySelectorAll('.gallery__thumnail')
//crea un arreiglo y hace un recorrido
thumbnails = [...thumbnails]
           //en vez de hacer manual     [thumbnails[0],thumbnails[1],thumbnails[2]]
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', event=>{
        console.log(event.target.id)
        imageContainer.style.backgroundImage = `url('../img/image-product-2-${event.target.id}.jpg')`
    });

});

//cambiar las imagenes principales desde los thumbnails en el modal
let modalthumbnails = document.querySelectorAll('.modal-gallery__thumnail');
const modalImageContainer = document.querySelector('.modal-gallery__image-container')
modalthumbnails = [...modalthumbnails]

modalthumbnails.forEach(modalthumbnail =>{
    modalthumbnail.addEventListener('click', event=>{
        console.log(event.target.id.slice(-1))
        modalImageContainer.style.backgroundImage = `url('../img/image-product-2-${event.target.id.slice(-1)}.jpg')`
    
    });
});

//cambiar imagenes  principal del modal desde fechas del modal

const previusModalBtn = document.querySelector('.modal-gallery__previus');
const nextModalBtn = document.querySelector('.modal-gallery__next');

nextModalBtn.addEventListener('click', ()=>{
    changeNextImage(modalImageContainer);
});

previusModalBtn.addEventListener('click', ()=>{
    changePreviusImage(modalImageContainer);
});


// Mostrar el navbar cuando presiono el menu de hamburgesa
const hamburgerMenu = document.querySelector('.header__menu');
const modalNavbar = document.querySelector('.modal-navbar__background');
const closeModalNavbar = document.querySelector('.modal-navbar__close-icon');

modalNavbar.style.display = 'none'

hamburgerMenu.addEventListener('click', ()=>{
    console.log('abrir modal');
    modalNavbar.style.display = 'block';
});

closeModalNavbar.addEventListener('click', ()=>{
    modalNavbar.style.display = 'none';
});

//Funciones
function  drawProductInModal(){
  
        productContainer.innerHTML =` 
        <div class="cart-modal__details-container">
            <img class="cart-modal__image" src="../img/image-product-2-1-thumbnail.jpg" alt="">
            <div>
                <p class="cart-modal__product">Gundam ASTRAY Limited Edition...</p>
                <p class="cart-modal__price">$125.00 x 3 <span>$375.00</span></p>
            </div>
            <img class="cart-modal__delete" src="../img/icon-delete.svg" alt="delete">
        </div>
        <button class="cart-modal__chekount">Checkout</button>`
    deleteProduct()
    let priceModal = document.querySelector('.cart-modal__price');
    priceModal.innerHTML = `$35.000 x ${lastValue} ---> Total: <span> $${lastValue*35}.000</span>`
}

// cambiara  la derecha
function changeNextImage(imgContainer){
    if(imgIndex === 4){
        imgIndex = 1;
    }else{
        imgIndex++;
    }
    imgContainer.style.backgroundImage = `url('../img/image-product-2-${imgIndex}.jpg')`
}
// cambiar a la izquierda
function changePreviusImage(imgContainer){
    if(imgIndex === 1){
        imgIndex = 4;
    }else{
        imgIndex--;
    }
    imgContainer.style.backgroundImage = `url('../img/image-product-2-${imgIndex}.jpg')`
}