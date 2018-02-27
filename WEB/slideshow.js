let firstItem = 0;
let lastItem = 2;
const items = document.getElementsByClassName("slide-boxarea");
let activeItems = [];
for (let i = firstItem; i <= lastItem; i++) {
    activeItems.push(items[i]);
}

const next = () => {
    if (lastItem < items.length - 1) {
        activeItems.push(items[lastItem += 1]);
        activeItems.shift();
        firstItem++;
        showItems();
    }
};

const prev = () => {
    if (firstItem > 0) {
        activeItems.pop();
        activeItems.unshift(items[firstItem -= 1]);
        lastItem--;
        showItems();
    }
};

const hide = item => item.style.display = "none";
const show = item => item.style.display = "block";
    
const showItems = () => {
    [].forEach.call(items, hide);
    activeItems.forEach(show);
};

window.onload = showItems;