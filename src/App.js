import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Join from './components/Join/Join'
import Chat from './components/Chat/Chat'

const App =()=> {
return(
    <Router>
        <Route path ="/" exact component = {Join}/>
        <Route path ="/chat"  component = {Chat}/>
    </Router>
)
}

export default App;

// expected an assignment or function call and instead saw an expression 
//- forgot the return 