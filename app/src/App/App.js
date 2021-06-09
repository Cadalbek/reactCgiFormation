import React from 'react';
import Button from './components/Button/Button';

//Composant principal de notre application 
class App extends React.Component{
  //counter = 1 
  constructor(props){
    super(props);
    this.state={counter:1, machaine:'Hello'};
  }
  componentDidUpdate(){
    console.log(arguments);
    console.log(this.state);
  }
  render() {
    return <div className="App">
    Compter le counter : {this.state.counter}
    <hr/>
    {this.state.machaine}
    <hr/>
      <Button lorsqueJeCliqueraiSurLeButton={()=>{
        console.log('J\'ai été cliqué sur ça : '+this.state.counter)
        this.setState({counter:this.state.counter+1})
        }}>
        <img src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/beer-512.png" alt='click'/>Need a beer ? Push the button !</Button>

    </div>
  }
}
export default App;
