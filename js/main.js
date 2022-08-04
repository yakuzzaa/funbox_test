"use strict"

const $card1 = document.querySelector(".card1")
// const $card1_rectangle = document.querySelector('.')
const $card2 = document.querySelector(".card2")
const $card3 = document.querySelector(".card3")
$card1.addEventListener("click", function (e) {
    const $corner = $card1.querySelector('.card_title .corner')
    const $card_rectangle = $card1.querySelector('.card_title .rectangle')
    const $card_object = $card1.querySelector('.card_object')
    const $card_ellipse = $card1.querySelector('.size_ellipse')
    $corner.classList.add('selected_corner')
    $card_rectangle.classList.add('selected_rectangle')
    $card_object.classList.add('selected_card')
    $card_ellipse.classList.add('selected_ellipse')
    console.log('fuck')
})