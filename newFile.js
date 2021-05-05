window.onload = focusText;
function focusText() {
    document.getElementsByClassName('file-name')[0].focus();
}

window.onmouseout = setStorage;
const backButton = document.getElementsByClassName('icon')[0];
const fileName = document.getElementsByClassName('file-name')[0];
const contentBox = document.getElementsByClassName('note-box')[0];

function setStorage() {
    if (fileName.value != "" || contentBox.value != "") {
        if (fileName.value) {
            localStorage.setItem(fileName.value, JSON.stringify({ title: fileName.value, content: contentBox.value }));
        }
        else if (fileName.value == "") {
            let noteContent = contentBox.value;
            let splitTitle = String(noteContent).substr(0, 7);
            fileName.value = splitTitle + "...";
            localStorage.setItem(fileName.value, JSON.stringify({ title: fileName.value, content: contentBox.value }));
        }
    }
}