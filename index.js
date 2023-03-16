console.clear()

const buttonBookmark = document.querySelector('[data-js="buttonBookmark"]')

const cardButtonAnswer = document.querySelector('[data-js="cardButtonAnswer"]')
const cardAnswer = document.querySelector('[data-js="cardAnswer"]')

buttonBookmark.addEventListener("click", () => {
    buttonBookmark.classList.toggle("bookmark--active")
})


cardButtonAnswer.addEventListener("click", () => {
    cardAnswer.classList.toggle("card__answer--active")

    console.log(cardButtonAnswer.textContent)

    if (cardButtonAnswer.textContent.trim() === "Show answer") {
        cardButtonAnswer.textContent = "Hide answer"
    } else {
        cardButtonAnswer.textContent = "Show answer"
    }

    console.log(cardButtonAnswer.textContent)
})




