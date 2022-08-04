"use strict"
const $card1 = document.querySelector(".card1")
const $card2 = document.querySelector(".card2")
const $card3 = document.querySelector(".card3")

const updated_text_for_cards ={
    'card1': 'Печень утки разварная с артишоками.',
    'card2': 'Головы щучьи с чесноком да свежайшая сёмгушка.',
    'card3': 'Филе из цыплят с трюфелями в бульоне.'
}

function clickEvent($card){
    const $corner = $card.querySelector('.card_title .corner')
    const $card_rectangle = $card.querySelector('.card_title .rectangle')
    const $card_object = $card.querySelector('.card_object')
    const $card_ellipse = $card.querySelector('.size_ellipse')
    const $sell_text = $card.querySelector('.sell_text')
    $corner.classList.add('selected_corner')
    $card_rectangle.classList.add('selected_rectangle')
    $card_object.classList.add('selected_card')
    $card_ellipse.classList.add('selected_ellipse')
    $sell_text.innerText = updated_text_for_cards[$card.id]
    console.log($card)
}



$card1.addEventListener("click", function (e) {
    clickEvent($card1)
})
$card2.addEventListener("click", function (e) {
    clickEvent($card2)
})
$card3.addEventListener("click", function (e) {
    clickEvent($card3)
})
