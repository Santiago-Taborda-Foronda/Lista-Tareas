import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App';
import { TasksProvider } from './context/contetxt';


createRoot(document.getElementById('root')).render(
    <TasksProvider>
    <App />
    </TasksProvider>
);