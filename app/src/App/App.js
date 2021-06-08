import './App.css';
import Button from './components/Button/Button';

function App() {
  let counter = 0;
  return (
    <div className="App">
      Bienvenue sur la page chill
      <hr />
    <Button lorsqueJeCliqueraiSurLeButton={()=>{
      console.log('J\'ai été cliqué sur ça : '+counter)
      counter++
      }}><img src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/beer-512.png" alt='click'/>Need a beer ? Push the button !</Button>
    <Button lorsqueJeCliqueraiSurLeButton={argument=>{
      console.log('J\'ai été cliqué sur ça : '+argument)
      }} bgcolor="tomato">Benjamin</Button>
    <Button lorsqueJeCliqueraiSurLeButton={argument=>{
      console.log('J\'ai été cliqué sur ça : '+argument)
      }} bgcolor="skyblue">Ne pas cliquer</Button>
    {/* <Button title="Gus"></Button>
    <Button title="Manon"></Button>
    <Button title="Yupi"></Button>
    <Button title="Pito"></Button> */}
    </div>
  );
}

export default App;
