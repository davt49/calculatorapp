import React from 'react'

class Calculator extends React.Component{
  constructor(){
    super()

    this.state = {
      numpad_array: [7, 8, 9, 'DEL', 4, 5, 6, '+', 1, 2, 3, '-', '.', 0, '/', 'x', 'RESET', 'equal'],
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
                  return <li key={item.toString()}>
                          <button id={item.toString()} onClick={this.handlechange}>{item}</button>
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