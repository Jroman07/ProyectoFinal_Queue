let queue = [];

function renderQueue() {
    const queueContainer = document.getElementById('queue');
    queueContainer.innerHTML = '';
    queue.forEach(element => {
        const div = document.createElement('div');
        div.classList.add('queue-element');
        div.textContent = element;
        queueContainer.appendChild(div);
    });
}

function enqueue() {
    const inputValue = document.getElementById('inputValue').value;
    if (inputValue) {
        queue.push(inputValue);
        document.getElementById('inputValue').value = '';
        renderQueue();
    } else {
        alert('Please enter a value to enqueue');
    }
}

function dequeue() {
    if (queue.length > 0) {
        queue.shift();
        renderQueue();
    } else {
        alert('Queue is empty');
    }
}

function read() {
    if (queue.length > 0) {
        alert('Front element is: ' + queue[0]);
    } else {
        alert('Queue is empty');
    }
}

renderQueue();