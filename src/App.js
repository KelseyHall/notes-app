import Header from './components/Header';
import Notes from './components/pages/Notes';
import Router from './components/pages/Router';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>

      <Router />
    </div>
  );
}

export default App;
