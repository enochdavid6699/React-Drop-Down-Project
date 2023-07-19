import './App.css';
import DropDown from './dropDown';

function App() {
  
    const items = ['Option 1', 'Option 2', 'Option 3'];
  
    return (
      <>
        <DropDown items={items} />
      </>
    );
  
}

export default App;
