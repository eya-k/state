import React , {Component} from 'react'
import Counter from './Counter';

export class App extends Component{

constructor(){
  super();
  this.state={
    show:false,
    name:"eya"
  }
}

toggel=()=>{
  this.setState({  show: !this.state.show  })
}


 render(){
  return (
    <div>
      <button onClick={()=>this.toggel()} >show/hide</button>
      <h1>{this.state.name}</h1>
      {  this.state.show  &&  <Counter/>  }
     
      
    </div>
  )
}
}

export default App
