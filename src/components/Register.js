import React,{useState} from 'react'
import {Form,Button} from 'react-bootstrap';

function Register() {
  const [user,setUser]=useState({});
  const handleSubmit=(event)=>{
    console.log(user);
    event.preventDefault();
  }
  return (
    <div className='container m-5 mx-auto'>
      <h1 className='text-info text-center'>User Registration</h1>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="userEmail" onChange={(e)=>setUser({...user, "userEmail" :e.target.value})}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Username" name="userName" onChange={(e)=>setUser({...user, "userName" :e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="userPassword"  onChange={(e)=>setUser({...user, "userPassword" :e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text" placeholder="enter phone number 10 digits" name="userPhone" onChange={(e)=>setUser({...user, "userPhone":e.target.value})}/>
      </Form.Group>
      <Form.Group  className='mb-3' >
        <Form.Check type="radio" value="male" name="gender" style={{display:"inline",margin:"5px"}} onChange={(e)=>setUser({...user, "gender" :"male"})} />
        <Form.Label style={{marginRight:"5px"}}>Male</Form.Label>
        <Form.Check type="radio" value="female" name="gender" style={{display:"inline",margin:"5px"}} onChange={(e)=>setUser({...user, "gender" : "female"})}/>
        <Form.Label >Female</Form.Label>
      </Form.Group>
      <Form.Group className="mb-3">
       <Form.Label><b>Address </b></Form.Label> <br />
       <Form.Label>Street</Form.Label>
        <Form.Control type="text" name="address.street" placeholder='street' onChange={(e)=>setUser({...user, "address.street" : e.target.value})} />
        <Form.Label>City</Form.Label>
        <Form.Control type="text" name="address.city" placeholder='city' onChange={(e)=>setUser({...user, "address.city" : e.target.value})}/>
        <Form.Label>Pincode</Form.Label>
        <Form.Control type="text" name="address.pincode" placeholder='pincode' onChange={(e)=>setUser({...user, "address.pincode" : e.target.value})}/>
      </Form.Group>
      <div className='text-center'>
      <Button variant="primary" type="submit" >Sign Up</Button>
      </div>
    </Form>
    </div>
  )
}

export default Register