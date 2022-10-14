function AddChapter() {
    const list = document.querySelector("ul");
    const item = document.createElement("li");
    const span = document.createElement("span");
    const newButton = document.createElement("button");
    const text = document.createTextNode(document.getElementById("favchap").value);
    const buttonText = document.createTextNode("X");

    list.appendChild(item);
    item.appendChild(span);
    item.appendChild(newButton);
    span.appendChild(text);
    newButton.append(buttonText);

    document.getElementById("favchap").value = "";


}


const input = document.getElementById("favchap");
const list = document.querySelector("ul");
const button = document.querySelector('button');

button.addEventListener('click', function () {

    if (input.value != "") {
        const item = document.createElement("li");
        const newButton = document.createElement("button");
        item.innerHTML = input.value;
        newButton.innerHTML = "❌";
        item.appendChild(newButton);
        list.appendChild(item);
        input.value = "";
        input.focus();

        newButton.addEventListener('click', function(){
            input.focus();
            item.remove();
        });
        
    }
});