let productsCountEl = document.querySelector("#products-count")
console.log (productsCountEl)

let addToCartBtns = document.querySelectorAll(".btn-add-to-cart")
console.log (addToCartBtns)


// for (let i = 0; i < addToCartBtns.length; i++)
//     addToCartBtns[i].addEventListener("click", function () {
//     console.log("clicked");
// });

// addToCartBtns.forEach((btn) =>
// btn.addEventListener("click", function () {
//     let prevProductsCount = +productsCountEl.textContent;
//     productsCountEl.textContent = prevProductsCount + 1;
// })
// );


addToCartBtns.forEach((btn) =>
btn.addEventListener("click", function () {
    productsCountEl.textContent = +productsCountEl.textContent + 1;
})
);



let blockButtons = document.querySelectorAll(".like-btn");
    blockButtons.forEach ((btn) =>
    btn.addEventListener("click", () => {
            // if(btn.classList.contains('like-btn')){
            //     btn.classList.add('like-btnToo')
            //     btn.classList.remove('like-btn')
            // } else {
            //     btn.classList.add('like-btn')
            //     btn.classList.remove('like-btnToo')
            // }
            btn.classList.toggle('like-btnToo');
        })
    );


    let moreDetailsBtns = document.querySelectorAll(".btn-more-details");
    let modal = document.querySelector(".modal")
    let btnClose = document.querySelector(".btnn-close")

    moreDetailsBtns.forEach((item) =>
    item.addEventListener("click", function () {
        modal.classList.add("show");
        modal.classList.remove("hide")
    }) );


    btnClose.addEventListener("click", function () {
        modal.classList.add("hide");
        modal.classList.remove("show")
    }) ;


    function openModal() {
        modal.classList.add("show");
        modal.classList.remove("hide");
    }
    
    function closeModal() {
        modal.classList.add("hide");
        modal.classList.remove("show");
    }

    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            closeModal();
        }
    });



$(".slider-block").slick();

