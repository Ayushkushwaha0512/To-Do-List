const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function check(str) {
  let val = "";
  let flag = false;
  for (let i = 0; i < str.length; ++i) {
    if (str[i] == " " && flag == false) {
      continue;
    } else if (str[i] != " ") {
      flag = true;
      val += str[i];
    } else if (str[i] == " ") {
      val += " ";
      flag = false;
    }
  }
  return val;
}

function exists(li) {
  let arr = document.querySelectorAll("li");
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i].innerHTML === li.innerHTML) {
      return true;
    }
  }
  return false;
}

function addTask() {
  let content = check(inputBox.value);
  if (content === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = content;
    li.classList.add("unchecked");
    let img = document.createElement("img");
    img.src = "remove.png";
    li.appendChild(img);
    img.addEventListener("click", function () {
      console.log("Image clicked");
      li.remove();
      saveData();
    });

    li.addEventListener("click", function () {
      if (li.classList.contains("unchecked")) {
        li.classList.remove("unchecked");
        li.classList.add("checked");
      } else {
        li.classList.add("unchecked");
        li.classList.remove("checked");
      }
      saveData();
    });
    if (!exists(li)) {
      listContainer.appendChild(li);
      saveData();
    } else {
      alert(`Task "${content}" already exists!`);
    }
    inputBox.value = "";
  }
}

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
  const savedData = localStorage.getItem("data");
  if (savedData) {
    listContainer.innerHTML = savedData;
    const listItems = document.querySelectorAll("#list-container li");
    listItems.forEach((item) => {
      const img = item.querySelector("img");
      item.addEventListener("click", function () {
        if (item.classList.contains("unchecked")) {
          item.classList.remove("unchecked");
          item.classList.add("checked");
        } else {
          item.classList.add("unchecked");
          item.classList.remove("checked");
        }
        saveData();
      });
      img.addEventListener("click", function (event) {
        event.stopPropagation();
        item.remove();
        saveData();
      });
    });
  } else {
    //
  }
}
showTask();
