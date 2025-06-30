import TaskManagerApp from './components/TaskManager'
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
  return (
    <div className="app">
      <ThemeProvider>
        <TaskManagerApp />
      </ThemeProvider>
    </div>
  )
}

export default App