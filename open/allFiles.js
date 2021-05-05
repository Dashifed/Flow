window.onload = loadFiles;
function loadFiles() {
  for (var i = 0; i < localStorage.length; i++) {
    const newDiv = document.createElement("div");
    const trashDiv = document.createElement("div");
    const newA = document.createElement("a");
    newDiv.classList.add("storage-div");
    trashDiv.classList.add("bi");
    trashDiv.classList.add("bi-trash-fill");
    trashDiv.classList.add("hide");
    trashDiv.style.cursor = "pointer";
    newA.classList.add("storage-file");
    newA.href = "open/openFile.html";
    newA.innerHTML = localStorage.key(i);
    newA.addEventListener("click", createCookie);
    function createCookie() {
      localStorage.setItem("Content of key", JSON.stringify({ title: newA.innerHTML }));
    }
    newA.addEventListener("mouseover", showTrash);
    function showTrash() {
      trashDiv.classList.remove("hide");
      trashDiv.classList.add("show-trash");
    }
    newA.addEventListener("mouseleave", hideTrash);
    function hideTrash() {
      setTimeout(function () {
        trashDiv.classList.add("hide");
        trashDiv.classList.remove("show-trash");
      }, 2000);
    }
    newDiv.addEventListener("mouseleave", instantHide);
    function instantHide() {
      trashDiv.classList.add("hide");
      trashDiv.classList.remove("show-trash");
    }
    trashDiv.addEventListener("click", deleteFile);
    function deleteFile() {
      let confirmDeletion = confirm("Are you sure you want to delete this file?");
      if (confirmDeletion == true) {
        localStorage.removeItem(newA.innerHTML);
        newDiv.remove();
      }
    }
    let tabsArea = document.getElementsByClassName("files")[0];
    newDiv.append(trashDiv);
    newDiv.appendChild(newA);
    tabsArea.appendChild(newDiv);
  }

}