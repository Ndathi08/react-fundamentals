import './App.css';
import MyButton from './Components/MyButton';
import AboutPage from './Components/AboutPage';
import Profile from './Components/Profile';
import ShoppingList from './Components/ShoppingList';
import Heading from './Components/Heading';
import Section from './Components/Section';
import Stopwatch from './Components/Stopwatch';

function App() {
  return (
    <div className="App">
      <h1>Welcome to my app</h1>
      <Section>
        <Heading >Title</Heading>
        <Section>
          <Heading >Heading</Heading>
          <Heading >Heading</Heading>
          <Heading >Heading</Heading>
          <Section>
            <Heading >Sub-heading</Heading>
            <Heading >Sub-heading</Heading>
            <Heading >Sub-heading</Heading>
            <Section>
              <Heading >Sub-sub-heading</Heading>
              <Heading >Sub-sub-heading</Heading>
              <Heading >Sub-sub-heading</Heading>
            </Section>
          </Section>
        </Section>
      </Section>
      <Stopwatch/>
    </div>
  );
}

export default App;
