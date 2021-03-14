import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {


  return (
    <div className="App">

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Title />
      <Rectangle />
    </div>
  );
}


class Title extends React.Component {
  render() {
    return <h2>X or O!</h2>;
  }
}

// this is the Child component
class Button extends React.Component {

  render() {
    console.log(this.props);
    return (
      <button
      onClick={this.props.onClick}
      className="Button"
      >{this.props.value}
      </button>
    );
  }
}

const AltButton = (props) => {
  return (
    <button
    onClick={props.onClick}
    className="Button"
    style={props.style || {}}
    >{props.value}
    </button>    
  )
}
  
// this is the Parent component
class Rectangle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {status:'x'};
  }

  render() {
    return (
      <div 
        className="rectangle"
      >
        <div style={{ 
          height:'100%',
          display:'flex',
          justifyContent:'center',
          flexDirection: 'column',
          fontSize:'70px',
          color:'white',
          WebkitTextStrokeWidth: '2px',
          WebkitTextStrokeColor: 'blue',
          fontFamily: 'arial'
        }}>
          <div>
          {this.state.status}
          </div>
        </div>
        
        <div style={{
          display:'flex', 
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems: 'flex-end',
          width: '100%',
          height: '100%'
        }} >
          <AltButton 
            value="x" 
            onClick={ () => this.setState({status: 'x'})} 
            style={{ width:'30px'}}
          />
          <AltButton 
            value="o" 
            onClick={ () => this.setState({status: 'o'})} 
            style={{ width:'30px'}}
          />
        </div>
    </div>
  )
  //add button x, button o <Rectangle button="x" /> 
  // use a ternary operator. start with null.
  ;
  }
}

export default App;
