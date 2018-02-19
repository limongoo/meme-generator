Meme Generator
 ===
 
 ## Description
 
Structure your project and build system using `webpack` and `package.json` and associated dependencies. Follow the in-class example closely to ensure that you have all elements of the (development) build system in place. Config files, ignore files, etc. etc.

Create a WYSIWYG editor that allows user to create a meme image with text.

User should be able to set properties and those changes are reflected in the display.

Main things:
1. Allow user to both:
   - type in a url, or
   - upload an image
2. Set the meme text in the:
   - header, and/or
   - footer
3. Set font, color, etc for the set text
4. Export the meme image using `dom-to-image` and `file-saver`
 
For this assignment:
 
* You start with a single `App` component
* Your state will live in the `App` component. Initialize state using `state = {};` as a class property
* Write JSX in the `render` method of the `App` component
    * Use `const { field1, field2 } = this.state` to access state values
    * Remember to bind your methods using `this.someMethod = this.someMethod.bind(this)` in the Component class
    constructor
    * Use `{this.someMethod}` (or whatever you need from the event object) to call
    a method you create on the component that in turn calls `this.setState({ prop: newValue })` to update the value
* Use destructuring and other advanced javascript techniques to keep the code clean and easier to read.
  
## Rubric
  
* Works **2.5pts**
* Curiosity/Going Beyond What we did in class **2.5pts**
* Idomatic React/JSX/JavaScript **2.5pts**
* Clean code - using destructuring and other techniques to reduce duplication and redundancy **2.5pts**
