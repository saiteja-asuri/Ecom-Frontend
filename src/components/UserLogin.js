import React from 'react'

function UserLogin() {
  const [user,setUser]=useState({});
  const loginSubmit=()=>{
    console.log(user)
  }
  return (
    <div>
      <Form onSubmit={loginSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="userEmail" onChange={(e)=>setUser({...user, "userEmail" :e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="userPassword"  onChange={(e)=>setUser({...user, "userPassword" :e.target.value})}/>
      </Form.Group>
      </Form>
    </div>
  )
}

export default UserLogin