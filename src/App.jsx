import React from 'react'
import { HomeScreen } from './Components/HomeScreen';
import {NavBar} from './Components/UI/NavBar';
import 'animate.css';

export const App = () => {
  return (
    <div className='animate__animated animate__fadeIn' >

      <NavBar />
      <HomeScreen />

    </div>
  )
}
