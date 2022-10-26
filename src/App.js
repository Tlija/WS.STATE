import React, { Component } from 'react';

import './App.css';
import Show, { Show2 } from './Component/show';

class App extends Component{
  state={
    toggel:true
  }
   HendClik() {
    this.setState({toggel:!this.state.toggel})
    console.log(this.state.toggel);
    
  }
  render(){
    return(
      <div>
     <button onClick={()=>this.HendClik()} >{this.state.toggel?'Hide':'show'}</button>
     { this.state.toggel?<Show/>:<Show2/>}
      </div>

    )
  }
}
export default App