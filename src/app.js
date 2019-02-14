// DOM Variables
const form = document.getElementById('new-todo');
const inputNewTask = form.elements.text;
const container = document.getElementById('tasks-container');
const inputFilter = document.getElementById('search-text');
const hideCheckbox = document.getElementById('hide-completed');
const sortBtn = document.getElementById('sort-btn');

// Get tasks from locaStorage
const getFromLocalStorage = function() {
    const tasksJSON = localStorage.getItem('tasks');
    if (tasksJSON !== null) {
        return JSON.parse(tasksJSON);
    } else {
        return [];
    }
};

// Set tasks from localStorage by invoking function
let tasks = getFromLocalStorage();

// Initial filters
const filters =
    {
        textFilter: "",
        completedFilter: false
    };

// To save tasks from our array in localStorage we need to stringify our array of objects
const save = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const removeTask = (task) => {
    const indexRemove = tasks.indexOf(task);
    tasks.splice(indexRemove, 1);
    save();
    generateTasks(tasks);
};

const toggleTodo = (task) => {
  task.completed = !task.completed;
    save();
    generateTasks(tasks);
};

const generateTasks = (tasks) => {
    let filteredTasks = tasks.filter((task) => {
       return task.content.toLowerCase().includes(filters.textFilter.toLowerCase());
    });

    if (filters.completedFilter) {
        filteredTasks = filteredTasks.filter((task) => {
            console.log(`task completed: ${task.completed}`);
            return task.completed === false;
        });
    }
    console.log(`filters: ${filters.completedFilter}`);


    container.innerHTML = "";
    filteredTasks.forEach((task) => {
        const newTask = document.createElement('div');
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.checked = task.completed;
        const taskContent = document.createElement('span');
        taskContent.textContent = task.content;
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "X";

        newTask.appendChild(checkbox);
        newTask.appendChild(taskContent);
        newTask.appendChild(removeBtn);

        container.appendChild(newTask);
        removeBtn.addEventListener('click', function(e) {
            removeTask(task);
        });
        checkbox.addEventListener('change', function() {
            toggleTodo(task);
        })
    })
};

// Event Listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();
    tasks.push({content: inputNewTask.value, completed: false});
    inputNewTask.value = "";
    generateTasks(tasks);
    save();
});

inputFilter.addEventListener('input', function(e) {
    filters.textFilter = e.target.value;
    generateTasks(tasks);
});

hideCheckbox.addEventListener('change', function() {
    filters.completedFilter = !filters.completedFilter;
    generateTasks(tasks);
    save();
});

sortBtn.addEventListener('click', function() {
    function compare(a,b) {
        if (a.content < b.content)
            return -1;
        if (a.content > b.content)
            return 1;
        return 0;
    }

    tasks.sort(compare);
    generateTasks(tasks);
    save();
});



// Generate tasks from localStorage
generateTasks(tasks);