import './App.css'
import Producto from './view/Productos/Producto'
import DataProductos from './component/Data/Data';

function App() {

  const productoList = DataProductos.map((v) => {
    return <Producto title={v.title} price={v.price} description={v.description}/>
  })

  return (
    <div className='App'>
      <h1>Productos</h1>
      <div className='container'>
        {productoList}
      </div>
      
    </div>
  );
}

export default App
// 14:12