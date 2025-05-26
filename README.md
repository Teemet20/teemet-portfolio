# teemet-portfolio

# Typewriter Effect Implementation

## Overview
The typewriter effect in the hero section of the portfolio page was implemented using React's `useState` and `useEffect` hooks. This effect cycles through multiple descriptions, displaying them with a typing and deleting animation.

## Steps to Implement

1. **State Management**:
   - Import `useState` and `useEffect` from React.
   - Define an array of descriptions to cycle through.
   - Use `useState` to manage the current display text.

2. **Typewriter Logic**:
   - In the `useEffect` hook, set up a function (`typeWriter`) that handles the typing and deleting animation.
   - Use `setTimeout` to control the speed of typing and deleting.
   - When the text is fully typed, wait for a moment before starting to delete.
   - When the text is fully deleted, move to the next description in the array.

3. **Rendering**:
   - Replace the static tagline with the dynamic `displayText` state in the JSX.

## Code Snippet
Here's a simplified version of the code:

```javascript
import { useState, useEffect } from 'react';

const descriptions = [
  "A passionate developer building awesome things",
  "Crafting elegant solutions to complex problems",
  "Turning ideas into reality through code",
  "Always learning, always growing"
];

const Portfolio = () => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    let currentText = '';
    let currentDescIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    const typeWriter = () => {
      const fullText = descriptions[currentDescIndex];
      if (isDeleting) {
        currentText = fullText.substring(0, currentIndex - 1);
        currentIndex--;
        typingSpeed = 50;
      } else {
        currentText = fullText.substring(0, currentIndex + 1);
        currentIndex++;
        typingSpeed = 100;
      }

      setDisplayText(currentText);

      if (!isDeleting && currentIndex === fullText.length) {
        setTimeout(() => {
          isDeleting = true;
        }, 2000);
      } else if (isDeleting && currentIndex === 0) {
        isDeleting = false;
        currentDescIndex = (currentDescIndex + 1) % descriptions.length;
      }

      setTimeout(typeWriter, typingSpeed);
    };

    typeWriter();
  }, []);

  return (
    <main className="flex-grow">
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-emerald-950 to-black text-white">
        <div className="text-center mt-16">
          <h2 className="text-5xl font-bold mb-4 mt-8 font-orbitron">
            Hi, I'm <span className="text-orange-300">{config.name}</span>
          </h2>
          <p className="text-xl mb-6 font-orbitron">{displayText}</p>
          <button
            onClick={() => scrollToSection("projects")}
            className="bg-white text-emerald-950 px-6 py-3 rounded-full font-semibold hover:bg-orange-300 hover:text-white font-orbitron"
          >
            View My Work
          </button>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
```

## Conclusion
This implementation provides a dynamic and engaging way to present multiple descriptions in the hero section of your portfolio. Adjust the descriptions and timing as needed to fit your personal style and message.

# Mobile Navigation Implementation

## Overview
The mobile navigation in the portfolio uses a hamburger menu that transforms into an X when clicked, revealing a slide-in navigation panel. This implementation uses React's `useState` hook for state management and Framer Motion for smooth animations.

## Steps to Implement

1. **Dependencies**:
   - Ensure you have `framer-motion` installed:
   ```bash
   npm install framer-motion
   ```

2. **State Management**:
   - Import necessary hooks and components:
   ```javascript
   import { useState } from "react";
   import { motion, AnimatePresence } from "framer-motion";
   ```
   - Create a state for menu visibility:
   ```javascript
   const [isOpen, setIsOpen] = useState(false);
   ```

3. **Navigation Items**:
   - Define your navigation items in an array for better maintainability:
   ```javascript
   const navItems = [
     { label: "Home", id: "home" },
     { label: "About", id: "about" },
     { label: "Projects", id: "projects" },
     { label: "Contact", id: "contact" },
   ];
   ```

4. **Hamburger Button**:
   - Create an animated hamburger button that transforms into an X:
   ```javascript
   <button
     onClick={() => setIsOpen(!isOpen)}
     className="md:hidden p-2 focus:outline-none"
     aria-label="Toggle menu"
     aria-expanded={isOpen}
   >
     <div className="w-6 h-5 flex flex-col justify-between">
       <span className={`w-full h-0.5 bg-orange-300 transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
       <span className={`w-full h-0.5 bg-orange-300 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
       <span className={`w-full h-0.5 bg-orange-300 transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
     </div>
   </button>
   ```

5. **Mobile Menu Panel**:
   - Implement the slide-in menu using Framer Motion:
   ```javascript
   <AnimatePresence>
     {isOpen && (
       <motion.div
         initial={{ opacity: 0, x: "100%" }}
         animate={{ opacity: 1, x: 0 }}
         exit={{ opacity: 0, x: "100%" }}
         transition={{ duration: 0.3 }}
         className="md:hidden fixed top-[72px] right-0 w-64 h-[calc(100vh-72px)] bg-black/95 backdrop-blur-sm"
       >
         <ul className="flex flex-col p-4 space-y-4">
           {navItems.map((item) => (
             <li key={item.id}>
               <button
                 onClick={() => scrollToSection(item.id)}
                 className="w-full text-left hover:text-orange-300 font-orbitron transition-colors duration-300 py-2"
               >
                 {item.label}
               </button>
             </li>
           ))}
         </ul>
       </motion.div>
     )}
   </AnimatePresence>
   ```

6. **Responsive Design**:
   - Hide desktop navigation on mobile:
   ```javascript
   <ul className="hidden md:flex space-x-6">
   ```
   - Show mobile menu button only on mobile:
   ```javascript
   <button className="md:hidden ...">
   ```

7. **Accessibility**:
   - Add proper ARIA labels:
   ```javascript
   aria-label="Toggle menu"
   aria-expanded={isOpen}
   ```
   - Ensure proper focus management
   - Add keyboard navigation support

## Styling Tips
- Use Tailwind's responsive classes (`md:`) to handle different screen sizes
- Implement smooth transitions for better user experience
- Use semi-transparent backgrounds with backdrop blur for a modern look
- Ensure touch targets are large enough for mobile users (minimum 44x44px)

## Best Practices
1. Close the menu when a navigation item is clicked
2. Add proper focus management for keyboard navigation
3. Ensure the menu is accessible via keyboard
4. Test on various screen sizes and devices
5. Consider adding a backdrop overlay when the menu is open
6. Implement proper touch event handling for mobile devices

## Conclusion
This implementation provides a modern, accessible, and user-friendly mobile navigation experience. The animations and transitions make the interface feel smooth and polished, while the accessibility features ensure it can be used by everyone.