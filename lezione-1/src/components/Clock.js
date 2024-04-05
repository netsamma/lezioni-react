import React, { Component } from 'react'

export class Clock extends Component {
  constructor(props) {
        super(props);
        this.state = {date: new Date()};
  }

  // Con questa notazione () il this viene riconosciuto come appartenente 
  // alla funzione handleClick stessa e il button non funziona

  // ERRATA
  // handleClick() {
  //   this.setState({
  //     date: new Date()
  //   })
  // }

  // Si risolve usando la notazione arrow function. 
  // Adesso il this identifica tutto il componente e 
  // quindi vede setState
  
  // GIUSTA
  handleClick = () =>{
    this.setState({
      date: new Date()
    })
  }
  render() {
    return (
      <>
        <h2>Sono le {this.state.date.toLocaleTimeString()}</h2>
        <button className="but-1" onClick={this.handleCLick}>Aggiorna</button>
      </>
    )
  }
}

export default Clock