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



let blockButton = document.querySelector(".like-btn");

    blockButton.addEventListener("click", () => {
    if(blockButton.classList.contains('like-btn')){
        blockButton.classList.add('like-btnToo')
        blockButton.classList.remove('like-btn')
    } else {
        blockButton.classList.add('like-btn')
        blockButton.classList.remove('like-btnToo')
    }
});


