import './App.css';
import { UserProvider } from './contexts/UserContext';
import MainRoute from './routes/routes';


function App() {
  return (
    <div className="App">
      <UserProvider>
        <MainRoute />
      </UserProvider>
    </div>
  );
}

export default App;
