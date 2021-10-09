import React, { useEffect } from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import {Switch,Route} from 'react-router-dom';
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
const App = () => {
  const [{},dispatch] =useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      console.log('the user is =>',authUser);
      if(authUser)
      {
        dispatch({
          type:'SET_USER',
          user:authUser,
        })

      }else{
        dispatch({
          type:'SET_USER',
          user:null,
        })
      }
    })
  },[])
  return (
    //BEM
    <div>
      
      <Switch>
        <Route path='/checkout'>
        <Header/>
        <Checkout/>
        </Route>
        <Route path='/login'>
        <Login/>
        </Route>

        <Route path='/'>
        <Header/>
        <Home/>

        </Route>
        
      </Switch>
    </div>
  )
}

export default App
