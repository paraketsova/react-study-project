import React, {useState} from 'react'

export default function LoginPage() {

  const [formData, setFormData] = useState({
    email: "webb19@willandskill.se",
    password: "javascriptoramverk"
  });

  
  function handleOnSubmit(e) {
    e.preventDefault()
    const url = "https://frebi.willandskill.eu/api-token-auth/";
    const payload = {
      email: formData.email,
      password: formData.password
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      console.log(data.token) //get data token by click at Log In button
      localStorage.setItem("WEBB20", data.token)
    })
  }

  function handleOnChange(e) {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    const newObj = {...formData, [inputName]: inputValue}; //add new attribute to obj -> newObj
    setFormData(newObj);
  }

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <label>Email</label>
        <input name="email" value={formData.email} onChange={handleOnChange} />
        <label>Password</label>
        <input name="password" value={formData.password} onChange={handleOnChange} />
        <button type="submit">Log in</button>
      </form>
    </div>
  )
}