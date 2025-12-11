import Effect from "./effect.js";

window.addEventListener("load", () => {
  const allCards = document.querySelectorAll(".stack-cards__item");
  const cardSize = allCards[0].getBoundingClientRect().height;
  let current = null;
  window.addEventListener("scroll", (e) => {
    allCards.forEach((element) => {
      if (
        element.getBoundingClientRect().top > -cardSize / 2 &&
        element.getBoundingClientRect().top < cardSize / 2 &&
        current !== element
      ) {
        current = element;
        current.classList.add("current");
      }

      if (current !== element) element.classList.remove("current");
    });
  });

  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  ctx.strokeStyle = "white";

  const effect = new Effect(canvas, ctx);
  effect.handleParticles(ctx);

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    effect.handleParticles(ctx);
    requestAnimationFrame(animate);
  }
  animate();
});
