
import React from 'react'
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { Dock, Navbar, Welcome } from '#components'
import {  Finder, Image, Resume, Safari, Terminals, Text , Contact} from '#window';

gsap.registerPlugin(Draggable);

const App = () => {
  return (
   <main>
    <Navbar/>
    <Welcome/>
    <Dock/>

    <Terminals/>
    <Safari/>
    <Resume/>
    <Finder/>
    <Text/>
    <Image />
    <Contact/>
   </main>
  )
}

export default App