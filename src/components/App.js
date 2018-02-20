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
      image: 'https://limongoo.github.io/301portfolio/public/img/thumb/refresh.jpg'
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
              Top Text: &nbsp;
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
              Bottom Text: &nbsp;
              <input
                type="text"
                onChange={this.handleInputBottom}
                placeholder='type here'
                value={currentBottom}
              />
            </label>
          </p>

          <p>
            Background Image: &nbsp;
            <input
              name="url" 
              defaultValue={image} 
              onChange={this.getImage}
              placeholder='image url here'
            />
          </p>

          <section className="output">
            <h3 className="textTop">{currentTop ? currentTop : 'Top text'}</h3>

            <h3 className="textBottom">{currentBottom ? currentBottom : 'Bottom text'}</h3>
            
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