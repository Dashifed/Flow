const tab1 = document.getElementById('tab-1');
const tab2 = document.getElementById('tab-2');
const tabsArea = document.getElementsByClassName('tabs-content')[0];
const projectsContent = "Projects go here";
tab1.addEventListener("click", activateFiles);
tab2.addEventListener("click", activateProjects);

window.onload = loadFiles;
function loadFiles() {
    for (i = 0; i < Math.min(4, localStorage.length); i++) {
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
        newDiv.append(trashDiv);
        newDiv.appendChild(newA);
        tabsArea.appendChild(newDiv);
    }
}

function activateFiles() {
    if (!tab1.classList.contains('active-tab')) {
        tab2.classList.remove('active-tab');
        tab1.classList.add('active-tab');
        tabsArea.innerHTML = "<div class=\"files-all\"><a href=\"./open/allFiles.html\" class=\"see-files\">\See All\</a></div>";
        for (i = 0; i < Math.min(4, localStorage.length); i++) {
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
            newDiv.append(trashDiv);
            newDiv.appendChild(newA);
            tabsArea.appendChild(newDiv);
        }
    }
}
function activateProjects() {
    if (!tab2.classList.contains('active-tab')) {
        tab1.classList.remove('active-tab');
        tab2.classList.add('active-tab');
        tabsArea.innerHTML = projectsContent;
    }
}
/*document.getElementsByClassName('identicon')[0].addEventListener("click", accountMenu);
function accountMenu() {
    document.getElementById('profile-popup').style.display = "block";
    document.getElementsByClassName('profile-menu_close')[0].addEventListener("click", closeAccount);
    function closeAccount() {
        document.getElementById('profile-popup').style.display = "none";
    }
} */