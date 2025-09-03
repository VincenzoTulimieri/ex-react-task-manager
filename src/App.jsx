import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TaskList from './pages/TaskList'
import AddTask from './pages/AddTask'
import DefaultLayout from './layout/DefaultLayout'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout/>}>
            <Route path='/' element={<TaskList />} />
            <Route path='/add-task' element={<AddTask />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
