import React from 'react'

class Calculator extends React.Component{
  constructor(){
    super()

    this.state = {
      numpad_array: [
        //set additional value attribute for different render and calculating value
        {name:7, value:7}, 
        {name:8, value:8}, 
        {name:9, value:9}, 
        {name:'DEL', value:'DEL'}, 
        {name:4, value:4}, 
        {name:5, value:5}, 
        {name:6, value:6}, 
        {name:'+', value:'+'}, 
        {name:1, value:1}, 
        {name:2, value:2}, 
        {name:3, value:3}, 
        {name:'-', value:'-'}, 
        {name:'.', value:'.'}, 
        {name:0, value:0}, 
        {name:'/', value:'/'}, 
        {name:'x', value:'x'}, 
        {name:'RESET', value:'RESET'}, 
        {name:'equal', value:'='}
      ],
      display: [],
      calculate: []

    }

    this.handlechange = this.handlechange.bind(this);
  }


  handlechange(event){
    const id = event.target.id;
    const num = this.state.display
    
    if(id === 'DEL'){
      this.setState({
        display: num.slice(0, -1)
      })
      this.state.calculate.pop()
    }

    else if(id === 'equal'){
      //using eval to directly calculate the string and outputs integers
      const result = eval(this.state.calculate.join(''))
      
      this.setState({
        //rounding up the result to 2 decimal points
        display: Math.round(result * 100) / 100 ,
        calculate: [Math.round(result * 100) / 100]
      })
    }
    else if (id === 'x'){
      this.setState({
        display: num + '*'
      })
      this.state.calculate.push('*')
    }

    else if(id === 'RESET'){
      this.setState({
        display: '',
        calculate: []
      })
    }

    else{
      this.setState({
        display: num + `${id}`
      })
      this.state.calculate.push(id)
    }

    

    console.log( this.state.calculate)
  }

  render(){
    return(
        <div className="calculator-display">
        <div className="number-display"><div className="numdiv">{this.state.display}</div></div>
          <div className="numpad">
            <div className="numpad-container">
              <ul className="row">
                {this.state.numpad_array.map(item => {
                  return <li key={item.name.toString()}>
                          <button id={item.name.toString()} onClick={this.handlechange}>{item.value}</button>
                        </li>
                })}
              </ul>

            </div>

          </div>
      </div>
    )
  }

}

export default Calculator