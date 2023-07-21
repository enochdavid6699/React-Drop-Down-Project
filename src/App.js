import './App.css';
import DropDown from './dropDown';

function App() {
  
    const items = ['Option 1', 'Option 2', 'Option 3'];
  
    return (
      <>
      <h1>Choose From The Drop Down</h1>
        <DropDown items={items} />
      </>
    );
  
}

export default App;
