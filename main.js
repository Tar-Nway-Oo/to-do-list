const listContainer = document.querySelector(".list-container");
const input = document.querySelector("#input");
const addButton = document.querySelector("#add");
const clearButton = document.querySelector("#clear");
const listNumber = document.querySelector("#list-number");

let lists = [];

addButton.addEventListener("click", () => {
  const inputValue = input.value;
  if (inputValue === null || inputValue === "") return;
  const newList = {
    id: Date.now().toString(),
    task: inputValue,
  };
  input.value = null;
  lists.push(newList);
  render();
});

clearButton.addEventListener("click", () => {
  lists = [];
  render();
});

function render() {
  clearList(listContainer);
  lists.forEach((list) => {
    const listItem = document.createElement("li");
    listItem.dataset.listId = list.id;
    listItem.classList.add("list-item");
    listItem.classList.add("border-bottom");
    listItem.innerText = list.task;
    listContainer.appendChild(listItem);
  });
  listNumber.textContent = lists.length;
}

function clearList(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

render();
