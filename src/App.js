import "./App.css";
import Search from "./Search";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="contaner">
        <header>
          <Search />
          <Weather />
        </header>
      </div>
      <footer>
        <small>
          <a
            href="https://github.com/SofiaEn9/week4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-sourced code
          </a>{" "}
          by Sofía Enríquez
        </small>
      </footer>
    </div>
  );
}
