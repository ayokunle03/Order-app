

const Checkout = (props) => {

  const confirmHandler = (event) => {
    event.preventDafault();
  }

  return (
    <form>
      <div className>
        <label htmlFor="name">Your Name</label> 
        <input type='text' id='name'/>
      </div>
      <div className>
        <label htmlFor="street">Street</label>
        <input type='text' id='street'/>
      </div>
      <div className>
        <label htmlFor="postal code">Postal Code</label>
        <input type='text' id='postal code'/>
      </div>
      <div className>
        <label htmlFor="city">City</label>
        <input type='text' id='city'/>
      </div>
      <button type="button" onClick={props.onCancel}> Cancel</button>
      <button>Confrim</button>
    </form>
  )
}

export default Checkout