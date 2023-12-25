let text = 0;
const ElementCount = document.getElementById('text');

function increase() {
    text++;
    ElementCount.textContent = text;
}

function decrease() {
    text--;
    ElementCount.textContent = text;
}


