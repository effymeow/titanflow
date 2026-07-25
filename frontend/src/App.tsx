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

  // Стили с фоном
  const styles = {
    container: {
      minHeight: '100vh',
      backgroundImage: 'url("https://i.pinimg.com/736x/bd/1c/6f/bd1c6f0c964cd62b2a713108455f0810.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      fontFamily: 'sans-serif',
      padding: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    card: {
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(10px)',
      borderRadius: '24px',
      padding: '40px',
      maxWidth: '800px',
      width: '100%',
      boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
    },
    title: {
      fontSize: '36px',
      fontWeight: 'bold',
      marginBottom: '10px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    subtitle: {
      fontSize: '18px',
      color: '#333'
    },
    taskList: {
      listStyle: 'none',
      padding: 0,
      marginTop: '20px'
    },
    taskItem: {
      background: '#f8fafc',
      padding: '12px 16px',
      borderRadius: '12px',
      marginBottom: '8px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderLeft: '4px solid #667eea'
    },
    badge: {
      background: '#667eea',
      color: 'white',
      padding: '4px 12px',
      borderRadius: '20px',
      fontSize: '12px'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🚀 TitanFlow</h1>
        <p style={styles.subtitle}>Умный планировщик задач с AI-приоритетами</p>
        <p style={{ color: '#555', marginTop: '8px' }}>
          ✅ Бэкенд: {import.meta.env.VITE_API_URL}
        </p>

        <h3 style={{ marginTop: '30px' }}>
          Все задачи: <span style={{ background: '#667eea', color: 'white', padding: '4px 12px', borderRadius: '12px' }}>{tasks.length}</span>
        </h3>

        <ul style={styles.taskList}>
          {tasks.length > 0 ? tasks.map(task => (
            <li key={task.id} style={styles.taskItem}>
              <span>{task.title}</span>
              <span style={styles.badge}>{task.status}</span>
            </li>
          )) : (
            <p style={{ textAlign: 'center', color: '#999', padding: '20px' }}>
              Нет задач. Создай первую! ✨
            </p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
