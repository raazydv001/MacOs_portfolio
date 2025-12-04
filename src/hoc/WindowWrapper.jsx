import useWindowStore from '#store/window.js'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import React, { useLayoutEffect, useRef } from 'react'

gsap.registerPlugin(Draggable); // <-- REQUIRED FIX

const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const { focusWindow, windows } = useWindowStore();

    // FIX: ensure windows[windowKey] exists
    const win = windows?.[windowKey];
    if (!win) return null;

    const { isOpen, zIndex } = win;
    const ref = useRef(null);

    // OPEN ANIMATION
    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen) return;

      el.style.display = "block";

      gsap.fromTo(
        el,
        { scale: 0.8, opacity: 0, y: 40 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        }
      );
    }, [isOpen]);

    // DRAGGABLE
    useGSAP(() => {
      const el = ref.current;
      if (!el) return;

      const draggable = Draggable.create(el, {
        onPress: () => focusWindow(windowKey),
      });

      return () => draggable[0].kill(); // FIX: Draggable.create returns array
    }, []);

    // SHOW/HIDE WINDOW BASED ON isOpen
    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;

      el.style.display = isOpen ? "block" : "none";
    }, [isOpen]);

    return (
      <section
        id={windowKey}
        ref={ref}
        style={{ zIndex }}
        className="absolute"
      >
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || 'Component'})`;

  return Wrapped;
};

export default WindowWrapper;
