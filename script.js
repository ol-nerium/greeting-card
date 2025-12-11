const cards = document.querySelector(".cards");
// const card = document.querySelector(".stack-cards__item");
const allCards = document.querySelectorAll(".stack-cards__item");
const cardSize = allCards[0].getBoundingClientRect().height;
let current = null;
window.addEventListener("scroll", (e) => {
  //   console.log(e.currentTarget.scrollY);
  //   console.log(allCards[0].getBoundingClientRect().top);
  //   console.log(allCards[3]);
  allCards.forEach((element) => {
    // console.log(element.getBoundingClientRect().top);
    if (
      element.getBoundingClientRect().top > -cardSize / 2 &&
      element.getBoundingClientRect().top < cardSize / 2 &&
      current !== element
    ) {
      current = element;
      console.log(element, " in vp");
      current.classList.add("current");
    }

    if (current !== element) element.classList.remove("current");
  });
});

// allCards.forEach((element) => {
//   console.log(element.getBoundingClientRect().top);
//   if (
//     element.getBoundingClientRect().top > -cardSize / 2 &&
//     element.getBoundingClientRect().top < cardSize / 2
//   )
//     console.log(element, " in vp");
// });

// bottom: 7798.862659931183;
// height: 7799.9990234375;
// left: 0;
// right: 2088.63623046875;
// top: -1.1363635063171387;
// width: 2088.63623046875;
// x: 0;
// y: -1.1363635063171387;
