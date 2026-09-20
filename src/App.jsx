import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './Home'
import Expenses from './Expenses'
import Edit from './Edit'

function App(){
  return(
    <BrowserRouter>
      <nav className="p-4 flex gap-6 items-center" style={{backgroundColor: '#1a472a', borderBottom: '2px solid #c9a227'}}>
        <h1 className="font-bold text-xl mr-auto" style={{color: '#c9a227'}}>⚔️ Doom Expenses</h1>
        <Link to='/' className="font-semibold hover:opacity-80" style={{color: '#f5f5f5'}}>Add Expense</Link>
        <Link to='/expenses' className="font-semibold hover:opacity-80" style={{color: '#f5f5f5'}}>Expenses</Link>
      </nav>
      <div className="min-h-screen p-6" style={{backgroundColor: '#0d0d0d'}}>
        <div className="max-w-2xl mx-auto">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/expenses' element={<Expenses/>}/>
            <Route path='/edit/:id' element={<Edit/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App