import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TaskList from './pages/TaskList'
import AddTask from './pages/AddTask'
import DefaultLayout from './layout/DefaultLayout'
import { GlobalProvider } from './context/GlobalContext'
import TaskDetails from './pages/TaskDetails'


function App() {
  return (
    <>
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout/>}>
            <Route path='/' element={<TaskList />} />
            <Route path='/task/:id' element={<TaskDetails/>} />
            <Route path='/add-task' element={<AddTask />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
    </>
  )
}

export default App
