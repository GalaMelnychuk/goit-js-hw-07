"use strict";
// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS есть массив строк.

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

const hrefIngredients = document.querySelector("#ingredients");

const fragment = document.createDocumentFragment();

ingredients.forEach(item => {
  const listItem = document.createElement("li");
  listItem.textContent = item;
  fragment.append(listItem);
});

hrefIngredients.appendChild(fragment);
