import React from 'react'
import WindowWrapper from '#hoc/WindowWrapper.jsx';
import { techStack } from '#constants/index.js';
import { Check, Flag } from "lucide-react";   // <-- REQUIRED FIX
import WindowControls from '#components/WindowControls.jsx';

const Terminals = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="terminal" />
        <h2>Tech Stack</h2>
      </div>

      <div className='techstack'>
        <p>
          <span className='font-bold'>@raj % </span>
          show tech stack
        </p>

        <div className='label'>
          <p className='w-32'>Category</p>
          <p>Technologies</p>
        </div>

        <ul className='content'>
          {techStack.map(({ category, items }) => (
            <li key={category} className='flex items-center'>
              <Check className="check" size={20} />     {/* FIXED IMPORT */}
              <h3>{category}</h3>
              <ul>
                {items.map((item, i) => (
                  <li key={i}>
                    {item} {i < items.length - 1 ? ',' : ""}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className='footnote'>
          <p>
            <Check size={20} />5 of 5 stacks loaded successfully (100%)   {/* FIXED */}
          </p>

          <p className='text-black'>
            <Flag size={15} fill="black" />   {/* FIXED */}
            Render time : 6ms
          </p>
        </div>
      </div>
    </>
  );
};

const TerminalWindow = WindowWrapper(Terminals, 'terminal');

export default TerminalWindow;
