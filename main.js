const listContainer = document.querySelector(".list-container");
const input = document.querySelector("#input");
const addButton = document.querySelector("#add");
const clearButton = document.querySelector("#clear");
const listNumber = document.querySelector("#list-number");
const warning = document.querySelector("#warning");

let lists = [];

addButton.addEventListener("click", () => {
  const inputValue = input.value;
  if (inputValue === null || inputValue === "") {
     warning.textContent = "Please fill the input.";
    return;
  }
  warning.textContent = "";
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

function removeList(id) {
  lists = lists.filter(li => li.id !== id);
  render();
}

function render() {
  clearList(listContainer);
  lists.forEach((list, index) => {
    const listEl = document.createElement("div");
    const listItem = document.createElement("li");
    const removeIcon = document.createElement("img");
    
    listEl.classList.add("list-item");
    listEl.classList.add("text-bg-secondary");
    listItem.dataset.listId = list.id;
    listItem.innerText = list.task;
    removeIcon.setAttribute("src", "./images/remove-icon.png");
    removeIcon.classList.add("remove-icon");
    removeIcon.addEventListener("click", () => {removeList(list.id)});

    listEl.appendChild(listItem);
    listEl.appendChild(removeIcon);
    listContainer.appendChild(listEl);
  });
  listNumber.textContent = lists.length;
}

function clearList(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

render();
