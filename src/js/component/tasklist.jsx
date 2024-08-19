import React from 'react';
import TaskItem from './taskitem';


function TaskList({ tasks, removeTask }) {
    const taskCount = tasks.length;

    return (
        <div className="task-list-container">
            {taskCount === 0 ? (
                <p className="empty-message">No hay tareas, añadir tareas</p>
            ) : (
                <ul style={{ padding: '0px' }}>
                    {tasks.map((task, index) => (
                        <TaskItem
                            key={index}
                            task={task}
                            onDelete={() => removeTask(index)}
                        />
                    ))}
                </ul>
            )}
            <div className="task-count">Tareas actuales: {taskCount}</div>
        </div>
    );
}

export default TaskList;
