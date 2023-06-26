import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    first: false,
    second: false,
  }

  onFirst = () => {
    this.setState({first: !this.first})
  }

  onSecond = () => {
    this.setState({second: !this.second})
  }

  render() {
    const {first, second} = this.state

    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="btn-section">
          <div>
            <button type="button" onClick={this.onFirst} className="button">
              Show/Hide FirstName
            </button>
            <div className="names-section">
              {first && <p className="paragraph">Joe</p>}
              {!first && ''}
            </div>
          </div>
          <div>
            <button type="button" onClick={this.onSecond} className="button">
              Show/Hide LastName
            </button>
            <div className="names-section">
              {second && <p className="paragraph">Jonas</p>}
              {!second && ''}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
