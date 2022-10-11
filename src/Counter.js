import React , {Component} from 'react'

export class Counter extends Component{

    constructor(){
        console.log('constructor()')
        super();
        this.state={
          counter:0,
          timer:0,
          intervall : null
        }

        }
        
        componentDidMount(){
            console.log('componentDidMount()');
            this.setState({
                intervall: setInterval(
                    ()=>this.setState({  timer: this.state.timer +1  }), 1000
                )
            })

      }

 //update du compartiment :
 componentDidUpdate(){
    console.log('il ya un update ')
    console.log(this.state.counter)
 }     




 componentWillUnmount(){
    console.log('you killed me')
    clearInterval(this.state.intervall)
 }



//counter *+++++++++++++++++++++++++++++++++++++
      increment=()=>{
        this.setState({
            counter : this.state.counter + 1
        });
      }



      //partie decrese :

      decrement = ()=>{
        if(this.state.counter >0){
        this.setState({
            counter  : this.state.counter  -1
        })
      }
    }

//reset :

reset=()=>{
    this.setState({
        counter : 0
    })
}

//counter +++++++++++++++++++++++++++++++++++++++++
 render(){
  return (
    <div>
      <p>counter state class Component</p>
<button onClick={this.increment} >plus</button>

        <p>{this.state.counter}</p>
<button onClick={this.decrement} >moins</button>
<button onClick={this.reset} >reset</button>
<hr/>
<p>timer</p>
<p>{this.state.timer}</p>
    </div>
  )
}
}

export default Counter