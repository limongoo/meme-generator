Meme Generator
 ===
 
 ## Description
 
Structure your project and build system using `webpack` and `package.json` and associated dependencies.
 
Create a WYSIWYG editor that allows user to set properties and those changes are reflected in the display.

Main things:
1. Allow user to upload an image (or you can accept a url)
2. Set the font, color, etc for:
  - top message
  - bottom message
 
For this assignment:
 
* You start with a single `App` component, but split into multiple components if it starts to get too big.
Consider separating out the controls from the display
* Your state will live in the `App` component. Initialize state using `this.state = {}` in the constructor 
(don't forget to call `super()`)
* Write JSX in the `render` method of the `App` component
  * Use `this.state.<name of state>` to access state values
  * Use `e => { this.someMethod(e.target.value) }` (or whatever you need from the event object) to call
  a method you create on the component that in turn calls `this.setState({ prop: newValue })` to update the value
* Use destructuring and other advanced javascript techniques to keep the code clean and easier to read.
  
## Rubric
  
* Works **2.5pts**
* Curiosity/Going Beyond What we did in class **2.5pts**
* Clean code - using destructuring and other techniques to reduce duplication and redundancy **2.5pts**
* Clean-up stuff you didn't use from `create-react-app` default **2.5pts**
