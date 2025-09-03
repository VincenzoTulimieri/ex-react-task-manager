import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TaskList from './pages/TaskList'
import AddTask from './pages/AddTask'


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<TaskList/>}/>
      <Route path='/add-task' element={<AddTask/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
