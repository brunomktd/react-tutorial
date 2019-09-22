import React, {Component} from 'react';
import Table from './Table';
import Form from './Form';


//Com JSX
// const heading = <h1 className="site-heading">Hello React JSX</h1>

// //SEM JSX
// const name = "Bruno";
// const heading2 = React.createElement('h1', {className: 'site-heading'}, `Hello ${name}, React Sem JSX`)

class App extends Component {

  state = {
    characters: [],
  }

  removeCharacter = (index) =>{
    const {characters} = this.state;

    this.setState({
      characters: characters.filter((character, i)=>{
        return i !== index
      })
    })
  }

  handleSubmit = (character) =>{
    this.setState({characters: [...this.state.characters, character]})
  }

    render() {
      // const characters = [
      //   {
      //     name: 'Charlie',
      //     job: 'Arquiteto',
      //   },
      //   {
      //     name: 'Mac',
      //     job: 'Vendedor',
      //   },
      //   {
      //     name: 'Dee',
      //     job: 'Ator',
      //   },
      //   {
      //     name: 'Dennis',
      //     job: 'Bartender',
      //   },
      // ]

      const {characters} = this.state
      
      return (
        <div className="container">
          <Table characterData = {characters} removeCharacter={this.removeCharacter}/>
          <Form handleSubmit={this.handleSubmit}/>
        </div>
      )
    }
  }

export default App;