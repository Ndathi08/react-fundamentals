import './App.css';
import MyButton from './Components/MyButton';
import AboutPage from './Components/AboutPage';
import Profile from './Components/Profile';

function App() {
  return (
    <div className="App">
      <h1>Welcome to my app</h1>
      <MyButton/>
      <AboutPage/>
      <Profile/>
    </div>
  );
}

export default App;
