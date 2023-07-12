import React from "react";
import  ReactDOM from "react-dom";

interface AppProps{
    color:string

}

// (2) way in TS
// interface AppState{
//     counter:number
// }


class App extends React.Component<AppProps>{

    state = {counter:0}                  //1st way to set state in TS

    // constructor(props: AppProps){           // 2nd way to set inital state in TS(2)
    //     super(props)
    //     this.state = {counter: 0}
    // }

    // state = {counter:0}

    onIncrement = ():void =>{
        this.setState({counter: this.state.counter+1})
    
    }
    
    onDecrement = ():void =>{
        this.setState({counter: this.state.counter - 1})
    
    }

    render(){
        return <div>
            <button onClick={this.onIncrement}>INCREMENT</button>
            <button onClick={this.onDecrement}>DECREMENT</button>
            {this.state.counter}
        </div>
    }
}

ReactDOM.render(
<App color= "red" />,
document.querySelector('#root'))

