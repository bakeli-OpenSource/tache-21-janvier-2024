// import logo from './logo.svg';
// import './App.css';
import Header from "./components/header";
import Home from "./pages/admin/Home";
import SidebareContextProvider from "./utils/contexte/SidebareContext";

function App() {
  return (
    <div className="App min-h-screen">
      <SidebareContextProvider>
        <Header />
        <Home />
      </SidebareContextProvider>
    </div>
  );
}

export default App;
