console.clear();

const bookmarkButton = document.querySelector(".bookmark");
const answerButton = document.querySelector(".card__button-answer");
const answerElement = document.querySelector(".card__answer");
const answerTextElement = document.createElement("span");

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
});

answerTextElement.classList.add("hidden");
answerTextElement.textContent = answerElement.textContent;
/* answerButton.parentElement.appendChild(answerTextElement); */ //  old approach
answerButton.parentElement.insertBefore(
  answerTextElement, //   new approach
  answerButton.nextSibling
);

answerButton.addEventListener("click", () => {
  answerElement.classList.toggle("hidden");

  if (answerElement.classList.contains("hidden")) {
    answerButton.textContent = "Show answer";
    answerTextElement.classList.add("hidden");
  } else {
    answerButton.textContent = "Hide answer";
    answerTextElement.classList.remove("hidden");
  }
});
