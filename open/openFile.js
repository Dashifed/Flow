let fileName = document.getElementsByClassName("file-name")[0];
let fileContent = document.getElementsByClassName("note-box")[0];
const nameStr = localStorage.getItem("Content of key");
const nameObj = JSON.parse(nameStr);
fileName.value = nameObj.title;
const contentStr = localStorage.getItem(nameObj.title);
const contentObj = JSON.parse(contentStr);
fileContent.value = contentObj.content;
fileName.onchange = function () { changeNameValue() };
function changeNameValue() {
    localStorage.setItem(fileName.value, JSON.stringify({ title: fileName.value, content: fileContent.value }));
    localStorage.removeItem(nameObj.title);
}
fileContent.onchange = function () { changeContentValue() };
function changeContentValue() {
    localStorage.setItem(fileName.value, JSON.stringify({ title: fileName.value, content: fileContent.value }));
}
window.onload = localStorage.removeItem("Content of key");
//Check with actual content