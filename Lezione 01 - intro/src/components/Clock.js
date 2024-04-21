// ***************************
//  Componente Classe
// ***************************

// import React, { Component } from 'react';

// class Clock extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       date: new Date(),
//       isRunning: true
//     };
//     this.timerID = null;
//   }

//   componentDidMount() {
//     this.startClock();
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   startClock() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }

//   stopClock() {
//     clearInterval(this.timerID);
//   }

//   toggleClock = () => {
//     if (this.state.isRunning) {
//       this.stopClock();
//     } else {
//       this.startClock();
//     }
//     this.setState(prevState => ({
//       isRunning: !prevState.isRunning
//     }));
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h2>Ora attuale: {this.state.date.toLocaleTimeString()}</h2>
//         <button onClick={this.toggleClock}>
//           {this.state.isRunning ? 'Ferma' : 'Riprendi'}
//         </button>
//       </div>
//     );
//   }
// }

// export default Clock;




// ***************************
// Componente Funzionale
// ***************************

import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [date, setDate] = useState(new Date());
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let timerID;
    if (isRunning) {
      timerID = setInterval(() => tick(), 1000);
    }
    return () => {
      clearInterval(timerID);
    };
  }, [isRunning]);

  const tick = () => {
    setDate(new Date());
  };

  const toggleClock = () => {
    setIsRunning(prevIsRunning => !prevIsRunning);
  };

  return (
    <div>
      <h2>Ora attuale: {date.toLocaleTimeString()}</h2>
      <button onClick={toggleClock}>
        {isRunning ? 'Ferma' : 'Riprendi'}
      </button>
    </div>
  );
};

export default Clock;
