import React, { Component } from 'react'
import './App.css';
import zoro from "./zoro.jpg"

export default class App extends Component {
  state={
    count:0,
    isShow:true,
  }

  handelShow=()=>{
    this.setState({isShow:!this.state.isShow})
  }

  increment=()=>{
    this.setState({count:this.state.count+1})
  }

  decrement=()=>{
    this.setState({count:this.state.count-1})
  }

  componentDidMount(){
    console.log("componentDidMount");
  }

  componentDidUpdate(){
    console.log("componentDidUpdate");
  }

  componentWillUnmount(){
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render");
    return (
      <div className='App'>
        <button onClick={this.handelShow}>{this.state.isShow?"Hide":"Show"}</button>
        {
          this.state.isShow&&
          <div>
            <h1>{this.state.count}</h1>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
          </div>
        }
        <h2 style={{color:'white'}}>This Is My Proflie <br />
                    Welcome: <br />   </h2>
              <h1 style={{color:'white'}}>Mr Zoro </h1>

      <img style={{width:'500px'}} src={zoro} alt="" />
      <h1 style={{color:'white'}}> BYE BYE </h1>
      </div>
    )
  }
}


