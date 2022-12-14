import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Counters from './components/counters';


class App extends Component {

  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  constructor() {
    super();
    console.log("App - Constructed");
    //this.state = this.props.something;
  }

  componentDidMount() {
    console.log("App - Mounted");
    // once a component is mounted, it is in the DOM
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    //console.log("Event Handler called", counterId);

    // filter for ids not equal to the specified id
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    // overrite counters property at state level
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    console.log("App - Rendered")
    return (
      <React.Fragment>
            <Navbar totalCounters={this.state.counters.filter(c=> c.value>0).length}/>
      <main className='container'>
        <Counters
          counters={this.state.counters}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
          />
      </main>
      </React.Fragment>
      
    ); 
  }
}
export default App;
