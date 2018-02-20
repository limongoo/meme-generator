import './App.css';
import React, { Component } from 'react';
// import dom2image from 'dom-to-image';
// import fileSaver from 'file-saver';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      currentTop: '',
      currentBottom: '',
      image: ''
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleInputBottom = this.handleInputBottom.bind(this);
    this.getImage = this.getImage.bind(this);
  }

  handleInput({ target }) {
    this.setState({
      currentTop: target.value
    });
  }

  handleInputBottom({ target }) {
    this.setState({
      currentBottom: target.value
    });
  }
  
  getImage({ target }) {
    this.setState({
      image: target.value
    });
  }

  render() {
    const { currentTop, currentBottom, image } = this.state;

    return (
      <div className="app">
        <header role="banner" id="header">
          <h1>Meme Generator</h1>
        </header>

        <section role="main" id="main">

          <p>
            <label>
              Top Text:
              <input
                type="text"
                onChange={this.handleInput}
                placeholder='type here'
                value={currentTop}
              />
            </label>
          </p>

          <p>
            <label>
              Bottom Text:
              <input
                type="text"
                onChange={this.handleInputBottom}
                placeholder='type here'
                value={currentBottom}
              />
            </label>
          </p>

          <p>
            Background Image:
            <input
              name="url" 
              defaultValue={image} 
              onChange={this.getImage}
              placeholder='image url here'
            />
          </p>

          <section className="output">
            <div>{currentTop ? currentTop : 'Top text here'}</div>

            <div>{currentBottom ? currentBottom : 'Bottom text here'}</div>
            
            <div
              className="background"
              ref={node => this.div = node}
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </section>

        </section>

        <footer role="contentinfo" id="footer">
          <p>(c) Meme Generator | <a href="https://github.com/limongoo/meme-generator/tree/ivan" target="_blank" rel="author noopener noreferrer">Ivan Limongan</a></p>
        </footer>
      </div>
    );
  }
}