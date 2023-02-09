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
            if(btn.classList.contains('like-btn')){
                btn.classList.add('like-btnToo')
                btn.classList.remove('like-btn')
            } else {
                btn.classList.add('like-btn')
                btn.classList.remove('like-btnToo')
            }
        })
    );




