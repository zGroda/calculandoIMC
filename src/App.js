import { useState } from "react";
import { BiCalculator } from "react-icons/bi";
import "./app.css";

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const[mensagem, setMensagem] = useState('');

  function calcularIMC() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if (imc < 18.6) {
      setMensagem("Você está abaixo do peso! Seu IMC: " + imc.toFixed(2))
    } else if (imc >= 18.6 && imc < 24.9) {
      setMensagem("Peso ideal! Seu IMC: " + imc.toFixed(2))
    } else if (imc >= 24.9 && imc < 34.9) {
      setMensagem("Você está levemente acima do peso! Seu IMC: " + imc.toFixed(2))
    } else if (imc > 34.9) {
      setMensagem("Cuidado obesidade! Seu IMC: " + imc.toFixed(2))
    }
  }

  return (
    <div className="app">
      <h1>Calculando IMC</h1>
      <span>Vamos calcular seu IMC</span>

      <div className="areaInput">
        <input
          type="text"
          placeholder="Peso em (Kg) Ex: 90"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
        <input
          type="text"
          placeholder="Altura em (Cm) Ex: 180"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
        <button onClick={calcularIMC}>
          <BiCalculator size={28} color="#fff" />
        </button>
      </div>

      <h2>{mensagem}</h2>
    </div>
  );
}
