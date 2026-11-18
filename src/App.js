import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="App-container">
        <header className="App-header">Dictionary App</header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center" style={{ color: "white" }}>
          Coded by
        </footer>
      </div>
    </div>
  );
}
