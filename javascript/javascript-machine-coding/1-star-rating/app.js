const stars = document.querySelectorAll(".stars i");
const emojiEl = document.querySelector("#emoji");
const resetBtn = document.querySelector("#btn");

const emojiArr = ["😞", "🙁", "🙂", "😀", "😍"];

// Click event to set the rating
stars.forEach((star, index1) => {
  star.addEventListener("click", () => {
    stars.forEach((star, index2) => {
      index1 >= index2
        ? star.classList.add("active")
        : star.classList.remove("active");
    });
    emojiEl.textContent = emojiArr[index1];
    resetBtn.classList.add("show");
  });

  // Hover event to temporarily highlight the rating
  star.addEventListener("mouseenter", () => {
    stars.forEach((star, index2) => {
      index1 >= index2
        ? star.classList.add("hover")
        : star.classList.remove("hover");
    });
  });

  // Mouse leave event to remove hover effect
  star.addEventListener("mouseleave", () => {
    stars.forEach((star) => star.classList.remove("hover"));
  });
});

// Reset button to clear the rating
resetBtn.addEventListener("click", () => {
  stars.forEach((star) => {
    star.classList.remove("active");
    star.classList.remove("hover");
  });
  emojiEl.textContent = "";
  resetBtn.classList.remove("show");
});

// const stars = document.querySelectorAll('.stars i')
// const emojiEl = document.querySelector('#emoji')
// const resetBtn = document.querySelector('#btn')

// const emojiArr = ['😞', '🙁', '🙂', '😀', '😍']

// stars.forEach((star, index1) => {
//   star.addEventListener('click', e => {
//     stars.forEach((star, index2) => {
//       index1 >= index2
//         ? star.classList.add('active')
//         : star.classList.remove('active')

//       emojiEl.textContent = emojiArr[index1]

//       resetBtn.classList.add('show')
//     })
//   })
// })

// resetBtn.addEventListener('click', () => {
//   stars.forEach(star => {
//     star.classList.remove('active')

//     emojiEl.textContent = ''

//     resetBtn.classList.remove('show')
//   })
// })
