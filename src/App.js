import html2canvas from 'html2canvas';
import {useState} from 'react';
import './App.css';

function App() {

  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('');

  const onChangeLinea1 = function(evento){
    setLinea1(evento.target.value)
  }
  const onChangeLinea2 = function(evento){
    setLinea2(evento.target.value)
  }

  const onChangeImagen = function(evento){
    setImagen(evento.target.value)
  }

  const onClickExportar = function(evento){
    alert("EXPORTAR")
    html2canvas(document.querySelector("#imagenes")).then(canvas => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'img.png';
      link.href = img;
      link.click();
  });
  }

//Select picker de imagenes
//Input text - Primer linea
//Input text - Segunda linea
//Boton exportar

  return (
    <div className="App">

      <select onChange={onChangeImagen}>
        <option value="elgranagujeroazulbelice">Belice</option>
        <option value="lagosdeplitvicecroacia">Croacia</option>
        <option value="preikestolennoruega">Noruega</option>
        <option value="tajmahalindia">India</option>
        <option value="templodaigojijapon">Japón</option>
        <option value="versallesfrancia">Francia</option>
      </select> <br/>

      <input onChange={onChangeLinea1} type="text" placeholder="Título"></input><br/>
      <input onChange={onChangeLinea2} type="text" placeholder="Descripción"></input><br/>
      <button onClick={onClickExportar}>Exportar</button>

      <div className="imagenes" id="imagenes">
        <span>{linea1}</span>
        <span>{linea2}</span>
        <img src={"/img/" + imagen + ".jpg"} />
      </div>

    </div>
  );
}

export default App;
