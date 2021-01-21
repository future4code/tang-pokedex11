import React from "react";
import Routes from "./Routes/Router";
import './style.css';

// Pages
import PageHome from "./Home/Home"

function App() {
  return (
    <div className="App">
		<Routes>
        <PageHome />
		</Routes>
    </div>
  );
}

export default App;
