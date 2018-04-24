var list = document.querySelector('#list');
var list2 = document.querySelector('#list2');

var todos, todos2;

function toLocal() {
    todos = list.innerHTML;
    localStorage.setItem('todos', todos);
    todos2 = list2.innerHTML;
    localStorage.setItem('todos2', todos2);
}

list.addEventListener('click', function (ev) {
    if (ev.target.tagName === "SPAN") {
        var div = ev.target.parentNode;
        div.remove();
        toLocal();
    }
}, false);

list2.addEventListener('click', function (ev) {
    if (ev.target.tagName === "SPAN") {
        var div = ev.target.parentNode;
        div.remove();
        toLocal();
    }
}, false);

function newElement() {
    var li = document.createElement('li');
    var inputValue = document.getElementById('toDoEl').value;
    var inputValue2 = document.getElementById('toDoE2').value;
    var t = document.createTextNode(inputValue);
    var t2 = document.createTextNode(inputValue2);
    li.appendChild(t);
    li.appendChild(t2);
    if (inputValue == "" && inputValue2 == "") {
        alert("Введіть назву для цієї картки");
    } else if (inputValue != "" && inputValue2 == "") {
        document.getElementById('list').appendChild(li);
    } else {
        document.getElementById('list2').appendChild(li);
    }
    document.getElementById('toDoEl').value = "";
    document.getElementById('toDoE2').value = "";
    var span = document.createElement('SPAN');
    var txt = document.createTextNode("x");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    li.setAttribute("draggable", "true");
    li.setAttribute("class", "draggable");
    toLocal();
}

if (localStorage.getItem('todos')) {
    list.innerHTML = localStorage.getItem('todos');
    list2.innerHTML = localStorage.getItem('todos2');
} else {
    list2.innerHTML = localStorage.getItem('todos2');
}

// Drag and Drop

function dragStart(e) {
    this.style.opacity = '0.4';
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function dragEnter(e) {
    this.classList.add('over');
}

function dragLeave(e) {
    e.stopPropagation();
    this.classList.remove('over');
}

function dragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    return false;
}

function dragDrop(e) {
    if (dragSrcEl != this) {
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
    }
    return false;
}

function dragEnd(e) {
    var listItens = document.querySelectorAll('.draggable');
    [].forEach.call(listItens, function (item) {
        item.classList.remove('over');
    });
    this.style.opacity = '1';
}

function addEventsDragAndDrop(el) {
    el.addEventListener('dragstart', dragStart, false);
    el.addEventListener('dragenter', dragEnter, false);
    el.addEventListener('dragover', dragOver, false);
    el.addEventListener('dragleave', dragLeave, false);
    el.addEventListener('drop', dragDrop, false);
    el.addEventListener('dragend', dragEnd, false);
}

var listItens = document.querySelectorAll('.draggable');
[].forEach.call(listItens, function (item) {
    addEventsDragAndDrop(item);
});

