import React from 'react';

function App() {
  const [tasks, setTasks] = React.useState([]);

  React.useEffect(() => {
    const api = import.meta.env.VITE_API_URL;
    fetch(`${api}/tasks`)
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.error('Ошибка загрузки задач:', err));
  }, []);

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>🚀 TitanFlow</h1>
      <p>Умный планировщик задач</p>
      <p>✅ Бэкенд: {import.meta.env.VITE_API_URL}</p>
      <h3>Все задачи: {tasks.length}</h3>
      <ul>
        {tasks.map(t => (
          <li key={t.id}>{t.title} — {t.status}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
