import React from 'react'//comando rfc estructura de un compnente
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import Swal from 'sweetalert2'
import axios from 'axios'
import Button from 'react-bootstrap/Button';


const Registro =()=> {
  //metodo de registrar usuario
  
  const [name,setName]=useState(' ')
  const [email,setemail]=useState(' ')
  const [password,setpassword]=useState(' ')

  const registro = async (e) => {
    e.preventDefault();
    const usuario={name,email,password}
    //la respesta es una peticion
    console.log(usuario.name)
    axios.defaults.baseURL='http://localhost:4000'
    const respuesta=await axios.post("./persona/crearPersona",usuario)
    console.log(respuesta)
    const mensaje = respuesta.data.mensaje
    if (mensaje!=='Bienvenido') {
      
      Swal.fire({
        icon:'error',
        title:mensaje,
        showConfirmButton:false,
        timer:1500

      })
    }else{
      //caputar los q estan en res del controller
      const token =respuesta.data.token
      const name =respuesta.data.name
      const idUsuario =respuesta.data.id
      //todo lo ant se captura en 
      sessionStorage.setItem('token',token)
      sessionStorage.setItem('token',name)
      sessionStorage.setItem('token',idUsuario)

      Swal.fire({
        icon:'success',
        title:"Ciudad creada correctamente",
        showConfirmButton:false,
        timer:1500

      })

      setTimeout(() => {
        window.location.href='./index'
      }, 1600);

      
    }
      //onChange={(e)=>setemail(e.target.value) sirve para captuarr datos del
      
    };
    return (
      <div className='container'>
            <div className='row'>
                <h2 className='mt-6'>Crear un nuevo usuario</h2>
            </div>

      <Form className='container' onSubmit={registro}>
        <Form.Group className="mb-3" controlId="formGroupNAme"    >
          <Form.Label>Nombre:</Form.Label>
          <Form.Control type="text" placeholder="Ingrese su nombre" onChange={(e)=>setName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Correo Electrónico:</Form.Label>
          <Form.Control type="email" placeholder="Ingrese correo electrónico" onChange={(e)=>setemail(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Contraseña:</Form.Label>
          <Form.Control type="password" placeholder="Ingrese una contraseña" onChange={(e)=>setpassword(e.target.value)}/>
        </Form.Group>
        <Button variant="primary" type="submit">
        Confirmar Registro
      </Button>
      </Form>
      </div>
    );
}

export default Registro;