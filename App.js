import './App.css';
import GoogleMap from './components/GoogleMap';
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
      <h1>Google Maps App</h1>
      <GoogleMap />

      <Helmet>
            <script defer data-key="aeff924e-f7ff-4348-a90e-f636f592f62b" src="https://widget.tochat.be/bundle.js"></script>
       </Helmet>
    </div>
  );
}

export default App;
