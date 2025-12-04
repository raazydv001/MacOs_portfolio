
import React from 'react'
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { Dock, Navbar, Welcome } from '#components'
import {  Terminals } from '#window';
gsap.registerPlugin(Draggable);

const App = () => {
  return (
   <main>
    <Navbar/>
    <Welcome/>
    <Dock/>

    <Terminals/>
   </main>
  )
}

export default App