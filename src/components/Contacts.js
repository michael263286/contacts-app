import React, { useState } from "react"



function Contacts(){
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [address,setAddress] = useState('')
  const [city,setCity] = useState('')
  const [state,setState] = useState('')
  const [zipCode,setZipCode] = useState('')
  const [contacts,setContacts] = useState([])
  // const [showMenu,setShowMenu] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    const newContact = {
      name: name,
      email: email,
      phone: phone,
      address: address,
      city: city,
      state: state,
      zipCode: zipCode,
    }
    setContacts([...contacts,newContact])
}
return (
  <div className="Contacts">
      <form onSubmit={handleSubmit}>
          <p>
              <label htmlFor="name">Name</label>
              <input id="name" type="text"
                  value={name}           
                  onChange={(e) => setName(e.target.value)}
              />
          </p>
          <p>
              <label htmlFor="email">Email</label>
              <input id="email" type="email"
                  value={email}           
                  onChange={(e) => setEmail(e.target.value)}
              />
          </p>
          <p>
              <label htmlFor="phone">Phone</label>
              <input id="phone" type="number"
                  value={phone}           
                  onChange={(e) => setPhone(e.target.value)}
              />
          </p>
          <p>
              <label htmlFor="address">Address</label>
              <input id="address" type="text"
                  value={address}           
                  onChange={(e) => setAddress(e.target.value)}
              />
          </p>
          <p>
              <label htmlFor="city">City</label>
              <input id="city" type="text"
                  value={city}           
                  onChange={(e) => setCity(e.target.value)}
              />
          </p>
          <p>
              <label htmlFor="state">State</label>
              <input id="state" type="text"
                  value={state}           
                  onChange={(e) => setState(e.target.value)}
              />
          </p>
          <p>
              <label htmlFor="zipCode">Zip Code</label>
              <input id="zipCode" type="number"
                  value={zipCode}           
                  onChange={(e) => setZipCode(e.target.value)}
              />
          </p>
          <button type="submit">Add</button>
      </form>
      <ul>
        {contacts.map((item,i) => {
          return(
            <div>
              <li key={i}>Name: {item.name}</li>
              <li key={i}>Email: {item.email}</li>
              <li key={i}>Phone: {item.phone}</li>
              <li key={i}>Address: {item.address}</li>
              <li key={i}>City: {item.city}</li>
              <li key={i}>State: {item.state}</li>
              <li key={i}>Zip Code: {item.zipCode}</li>
            </div>
          )
        })}
      </ul>
  </div>
)
}

export default Contacts