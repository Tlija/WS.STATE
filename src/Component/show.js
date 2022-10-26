import React from "react";

class Show extends React.Component{
    state={count:0,text:''}
 incrf(){
    this.setState({count:this.state.count +1})
 }
 decrf(){
    // if(this.state.count>0){
    //     this.setState({count:this.state.count -1})


    // }
     this.setState({count:this.state.count && this.state.count -1})


 }
 Hendelchange(x){
    this.setState({text:x})
    console.log(this.state.text)
 }


    render(){
        return(
            <div>
                <div> 
                    <button onClick={()=>this.incrf()}> +</button>
                         <p>{this.state.count}</p>
                    <button onClick={()=>this.decrf()}> - </button>
                </div>
                <div>
                    <input type="text" name="" id="" onChange={(event)=>this.Hendelchange(event.target.value)} />
                    <p>{!this.state.text?'Exmpel':this.state.text}</p>
                </div>
            </div>

        );
    }
}
export default Show;

 export class Show2 extends React.Component{
    constructor(props){
        super(props)
       this.state={
            Timer:0
        }
        console.log('constructor()')
    }
    componentDidUpdate(){
        console.log(' componentDidUpdate()')
    }
    componentWillUnmount(){

        console.log('componentWillUnmount()')
    }
    componentDidMount(){
        console.log('componentDidMount()');
        setInterval(() => 
            this.setState({Timer:this.state.Timer+1}),1000);
    }
    render(){
        console.log('render()')
        return(
            <div>
             Time: <p>{this.state.Timer}</p>

            </div>

        );
    }
}


