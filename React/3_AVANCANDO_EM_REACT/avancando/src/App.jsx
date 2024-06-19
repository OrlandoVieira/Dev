import "./App.css";

// 2 - imagem em assets
import night from "./assets/night.jpg";

function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* 1 - imagem em public */}
      <img src="/img.jpg" />
      {/* 2 - imagem em assets */}
      <img src={night} alt="Noite estrelada" />
    </div>
  );
}

export default App;
