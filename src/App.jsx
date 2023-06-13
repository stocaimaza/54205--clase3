import NavBar from './componentes/NavBar/NavBar'
import './App.css'


//JSX es una extensión de jS. 
const App = () => {

  return (
    <div>
      <NavBar/>
      <h1 style={{color:"red"}}>Clase 3</h1>
      <h2>Subtítulo</h2>
      <h3>Esto es un h3</h3>
      <p className='parrafo'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, sequi ab. Quia alias delectus placeat aliquid, voluptate minus ducimus velit nam non cupiditate magni porro dolorem dolore corporis quaerat! Maiores!</p>
      
    </div>
  )
}

export default App