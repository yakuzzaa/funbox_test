"use strict"
const $card1 = document.querySelector(".card1")
const $card2 = document.querySelector(".card2")
const $card3 = document.querySelector(".card3")
const $buy1 = document.getElementById("buy1")
const $buy2 = document.getElementById("buy2")
const $buy3 = document.getElementById("buy3")
const UNCLICKED_STATUS = 'unclicked'
const CLICKED_STATUS = 'clicked'

const DEFAULT = "default"
const CHANGED = "changed"

const updated_text_for_cards ={
    'card1': 'Печень утки разварная с артишоками.',
    'card2': 'Головы щучьи с чесноком да свежайшая сёмгушка.',
    'card3': 'Филе из цыплят с трюфелями в бульоне.'
}
const sell_text_id ={
    'card1': '1',
    'card2': '2',
    'card3': '3'

}
const buy_button_id={
    'buy1': 'buy1',
    'buy2': 'buy2',
    'buy3': 'buy3',
}


const cards_clicked_state={
    'card1': UNCLICKED_STATUS,
    'card2': UNCLICKED_STATUS ,
    'card3': UNCLICKED_STATUS
}
const card_state ={
    'card1': DEFAULT,
    'card2': DEFAULT ,
    'card3': DEFAULT
}

function clickedChecker($card) {
    if (cards_clicked_state[$card.id] === UNCLICKED_STATUS){
        cards_clicked_state[$card.id] = CLICKED_STATUS
        return true
    }
    return false
}


function clickEvent($card,$buy) {
    const $corner = $card.querySelector('.card_title .corner')
    const $card_rectangle = $card.querySelector('.card_title .rectangle')
    const $card_object = $card.querySelector('.card_object')
    const $card_ellipse = $card.querySelector('.size_ellipse')
    const $sell_text = document.getElementById(sell_text_id[$card.id])
    if (cards_clicked_state[$card.id] === CLICKED_STATUS){
        if (card_state[$card.id] === DEFAULT){
            card_state[$card.id] = CHANGED
            $corner.classList.add('selected_corner')
            $card_rectangle.classList.add('selected_rectangle')
            $card_object.classList.add('selected_card')
            $card_ellipse.classList.add('selected_ellipse')
            $sell_text.innerText = updated_text_for_cards[$card.id]
            cards_clicked_state[$card.id] = UNCLICKED_STATUS
        }
        else{
            card_state[$card.id] = DEFAULT
            $corner.classList.remove('selected_corner')
            $card_rectangle.classList.remove('selected_rectangle')
            $card_object.classList.remove('selected_card')
            $card_ellipse.classList.remove('selected_ellipse')
            if (buy_button_id[$buy.id] === "buy1"){
                $sell_text.innerHTML = 'Чего сидишь? Порадуй котэ, <button onclick="clickEvent($card1,$buy1)" class="buy" id = "buy1">купи</button>.'
                console.log("work1")
            }
            if (buy_button_id[$buy.id] === "buy2"){
                $sell_text.innerHTML = 'Чего сидишь? Порадуй котэ, <button onclick="clickEvent($card2,$buy2)" class="buy" id = "buy2">купи</button>.'
                console.log("work2")
            }
            if (buy_button_id[$buy.id] === "buy3"){
                $sell_text.innerHTML = 'Чего сидишь? Порадуй котэ, <button onclick="clickEvent($card3,$buy3)" class="buy" id = "buy3">купи</button>.'
                console.log("work3")
            }

        }


    }
}



$card1.addEventListener("click", function (e) {
    clickedChecker($card1)
})
$card2.addEventListener("click", function (e) {
    clickedChecker($card2)
})
$card3.addEventListener("click", function (e) {
    clickedChecker($card3)
})

$buy1.addEventListener("click", function (e){
    clickedChecker($card1)
})
$buy2.addEventListener("click", function (e){
    clickedChecker($card2)
})
$buy3.addEventListener("click", function (e){
    clickedChecker($card3)
})



