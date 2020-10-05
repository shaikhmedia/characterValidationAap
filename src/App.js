import React, {Component} from 'react';
import './App.css';
import Validation from './Validation/Validation'
import Character from './Character/Character'

class App extends Component {
  state = {
    textInput: ''
  }

  updateTextHandler = (e) => {
    this.setState({
      textInput: e.target.value
    })
  }

  deleteCharacterHandler = (index) => {
    const characterArray = this.state.textInput.split('');
    characterArray.splice(index, 1);
    const updatedText = characterArray.join('')
    this.setState({
      textInput: updatedText
    })
  }

  render () {
    const charactreList = this.state.textInput.split('').map((character, index) => {
      return <Character char = {character} key={index} delete={() => this.deleteCharacterHandler(index)}/>
    })


    return (
      <div className="App">
        <h1>Character Validation App</h1>

        <input 
        type="text"
        onChange={this.updateTextHandler}
        value={this.state.textInput}
        placeholder="Enter text here"
        />

        <div className="text">{this.state.textInput}</div>

        <Validation
        chCount = {this.state.textInput.length}
        />
        {charactreList}
      </div>
    );
  }
}

export default App;
