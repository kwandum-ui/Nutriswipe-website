const cards = document.querySelectorAll(".swap-card");
const result = document.getElementById("swapResult");

cards.forEach(card => {

card.addEventListener("click", () => {

const oldFood = card.dataset.old;
const newFood = card.dataset.new;
const protein = card.dataset.protein;
const calories = card.dataset.calories;

result.innerHTML = `

<h3>${oldFood} ➜ ${newFood}</h3>

<br>

<p>${protein}</p>

<p>${calories}</p>

`;

result.animate(
[
{opacity:0, transform:'scale(.8)'},
{opacity:1, transform:'scale(1)'}
],
{
duration:500,
fill:'forwards'
}
);

});

});
