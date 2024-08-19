import React, { useState } from 'react';


function TaskForm({ addTask }) {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            addTask(inputValue.trim());
            setInputValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Agregar nueva tarea"
                className="text-input"
            />
            {/* <button type="submit" className="button">Agregar</button> */}
        </form>
    );
}

export default TaskForm;
