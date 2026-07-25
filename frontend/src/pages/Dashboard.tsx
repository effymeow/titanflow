import React from 'react';
import { useTasks } from '../api/tasks';

export default function Dashboard() {
  const { data: tasks, isLoading } = useTasks();

  if (isLoading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
        <h2>Загрузка...</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🚀 TitanFlow</h1>
      <p>Умный планировщик задач</p>
      
      <h2>Все задачи ({tasks?.length || 0})</h2>
      <ul>
        {tasks?.map((task: any) => (
          <li key={task.id}>
            <strong>{task.title}</strong> — {task.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
