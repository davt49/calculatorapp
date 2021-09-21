import React from 'react'
import ReactDOM from 'react-dom'
import './style.scss'
import Calculator from './assets/calculator'

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      theme:'style-a',
      value: 1
    }
  }

  handleToggle(key, value){
    this.setState({ [key] : value})
    if (value == 1) {
      this.setState({ theme: 'style-a' })
    } else if (value == 2) {
      this.setState({ theme: 'style-b' })
    } else if (value == 3){
      this.setState({ theme: 'style-c' })
    }
  }

  

  

  render(){
    return(
      <div className={this.state.theme} > 
          <div className="container">
            <div className="navbar">
              <div className="apptitle">calc</div>

              <div className="nav-toggle">
                <div className="theme">THEME</div>
                <div className="theme-num">
                  <div className="themeNumber">1</div>
                  <div className="themeNumber">2</div>
                  <div className="themeNumber">3</div>
                </div>
                <div className="toggle-radio">
                  <input type='range' min='1' max='3' step='1' 
                  value={this.state.value}
                  onChange={(e) => this.handleToggle('value', e.currentTarget.value)}
                  />
                </div>
              </div>
              
            </div>
          <Calculator />
          </div>
          
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
