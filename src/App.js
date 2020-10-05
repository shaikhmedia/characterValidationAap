import React, {Component} from 'react';
import './App.css';
import Validation from './Validation/Validation'
import Character from './Character/Character'

class App extends Component {
  // Default state 
  state = {
    textInput: ''
  }

  // Update the text based input value \
  updateTextHandler = (e) => {
    this.setState({
      textInput: e.target.value
    })
  }
  
  // Delete particular character based on their index
  deleteCharacterHandler = (index) => {
    // Create an Array of the characters
    const characterArray = this.state.textInput.split('');

    // Remove a particular character based on index
    characterArray.splice(index, 1);

    // Join the rest of the characters as string 
    const updatedText = characterArray.join('')

    // Update the state
    this.setState({
      textInput: updatedText
    })
  }


  render () {
    // Create an Array of characters and use the character component for each of the character by mapping through them
    const charactreList = this.state.textInput.split('').map((character, index) => {
      return <Character char = {character} key={index} delete={() => this.deleteCharacterHandler(index)}/>
    })


    return (
      <div className="App">
        <h1>Character Validation App</h1>
        
        {/* Input field */}
        <input 
        type="text"
        onChange={this.updateTextHandler}
        value={this.state.textInput}
        placeholder="Enter text here"
        />

        {/* Text output */}
        <div className="text">{this.state.textInput}</div>

        {/* Validation status */}
        <Validation
        chCount = {this.state.textInput.length}
        />

        {/* Render each character */}
        {charactreList}
      </div>
    );
  }
}

export default App;
