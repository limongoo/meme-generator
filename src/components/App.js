import './App.css';
import React, { Component } from 'react';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      currentTop: ''
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput({ target }) {
    this.setState({
      currentTop: target.value
    });
  }

  render() {
    const { currentTop } = this.state;

    return (
      <div className="app">
        <header role="banner" id="header">
          <h1>Meme Generator</h1>
        </header>

        <section role="main" id="main">

          <section>
            <label>
              Top Text:
              <input
                type="text"
                onChange={this.handleInput}
                placeholder='type here'
                value={currentTop}
              />
            </label>
          </section>

          <section>
            <label>
              Bottom Text:
              <input type="text"/>
            </label>
          </section>

          <section className="output">
            <div>{currentTop ? currentTop : 'Top text here'}</div>
          </section>

        </section>

        <footer role="contentinfo" id="footer">
          <p>(c) Meme Generator | <a href="https://github.com/limongoo/meme-generator/tree/ivan" target="_blank" rel="author noopener noreferrer">Ivan Limongan</a></p>
        </footer>
      </div>
    );
  }
}