import React from 'react';
import {useEffect} from 'react';

const postTask = async (task: string) => {
    console.log("POST TASK");
    const response = await fetch('/api/updateToDoList', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: task,
        }),
    });
    const data = await response.json();
    console.log(data);
}

const getTasks = async () => {
    const response = await fetch('/api/updateToDoList');
    const data = await response.json();
    return data;
}

export default  function ToDoList() {
    const [todos, setTodos] = React.useState<string[]>([]);

    useEffect(() => {
        const fetchData = async () =>{
            const data = await getTasks();
            console.log(data);  
        } 
        fetchData();
    },[]);
    
    const addTodo = (todo: string) => {
        setTodos(prevTodos => [...prevTodos, todo]);
    };

    return (
        <div className="bg-gray-950 text-white min-h-screen p-4">
            <h1 className="text-3xl font-semibold mb-4">To-Do List</h1>
            <ul className="mb-4">
                {todos.map((todo, index) => (
                    <li key={index} className="border-b border-ty border-gray-700 py-2">{todo}</li>
                ))}
            </ul>
            <input
                type="text"
                placeholder="Add a new todo"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                onKeyDown={event => {
                    if (event.key === 'Enter') {
                        postTask(event.currentTarget.value);
                        addTodo(event.currentTarget.value);
                        event.currentTarget.value = '';
                    }
                }}
            />
        </div>
    );
};
