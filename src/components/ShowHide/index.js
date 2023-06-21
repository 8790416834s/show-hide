import ShowHide from './components/ShowHide'
import './index.css'

const ShowHide = () => {
  return (
    <div className="container">
      <h1 className="heading">Show/Hide</h1>
      <div className="button-container">
        <button type="button" className="button">
          Show/Hide Firstname
        </button>
        <button type="button" className="button">
          Show/Hide Lastname
        </button>
      </div>
    </div>
  )
}

export default ShowHide
