import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    // BEM naming convention
    <div className="app">
      <Header />
      <div className="app_body">
        <Sidebar />
        {/* Feed */}
        {/* Widget */}
      </div>
    </div>
  );
}

export default App;
