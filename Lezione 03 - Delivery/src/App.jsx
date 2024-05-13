import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Grid from './components/Grid';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';

function App() {
  const [products, setProducts] = useState([])
  const [filter, setFilter] = useState("")
  const [isLogged, setIsLogged] = useState(false)

  const url = "https://dummyjson.com/products";

  useEffect(() => {
    fetch(url, {
    })
      .then((response) => response.json())
      .then((data) => {
        let prodotti = data.products.filter(
          str => str.title
          .toLowerCase()
          .includes(filter.toLowerCase())
        )  
        setProducts(prodotti);
        console.log(prodotti);
      })
      .catch((error) => console.log(error));
  }, [filter]);


  const handleFilter = (filtro) => {
    console.log(filtro);
    if (filtro.length > 2) {
      setFilter(filtro);
    } else if (filtro.length === 2) {
      setFilter("");
    }else{
      setFilter("");
    }
  };

  
  return (
    <>
      <Navbar handleFilter={handleFilter} isLogged={isLogged}/>

        <Routes>
          <Route path="/" element={<Grid products={products}/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      
    </>
  )
}

export default App
