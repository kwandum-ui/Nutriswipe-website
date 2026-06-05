const result = document.getElementById("swapResult");

if (!result) {
  console.error("Result element not found");
} else {
  const animationConfig = {
    duration: 500,
    fill: 'forwards'
  };

  const animateResult = (element) => {
    element.animate(
      [
        { opacity: 0, transform: 'scale(.8)' },
        { opacity: 1, transform: 'scale(1)' }
      ],
      animationConfig
    );
  };

  document.querySelectorAll(".swap-card").forEach(card => {
    card.addEventListener("click", () => {
      const { old: oldFood, new: newFood, protein, calories } = card.dataset;
      
      result.innerHTML = `
        <h3>${oldFood} ➜ ${newFood}</h3>
        <br>
        <p>${protein}</p>
        <p>${calories}</p>
      `;
      
      animateResult(result);
    });
  });
}
