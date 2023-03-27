import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
import { useState, useEffect } from "react"

function App() {

  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);
  const [paciente, setPaciente] = useState({});  
  // Al parecer en las ultimas version de REACT ya no es necesario crear un useEffect para obtener el valor del localStorage. Sino que defrente ponerlo en el useState.

  // useEffect(() => {
  //   const obtenerLS = () => {
  //     const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
  //     setPacientes(pacientesLS)
  //   }
  
  //   obtenerLS()
  // },[]);

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  },[pacientes])


  const eliminarPaciente = (id) => {
    const pacienteEliminado = pacientes.filter(paciente => paciente.id !== id)

    setPacientes(pacienteEliminado);
}

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario 
          setPacientes={setPacientes} 
          pacientes={pacientes}
          paciente ={paciente}
          setPaciente ={setPaciente}
        />
        <ListadoPacientes 
          pacientes = {pacientes}
          setPaciente = {setPaciente}
          eliminarPaciente = {eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
