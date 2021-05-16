import {useState, useEffect} from 'react';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

function App() {
  
  const [serachField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);

  const getUsers = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    setMonsters(users);
  }
      
  useEffect( () => {
    
    getUsers();

  },[]);
  
  const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(serachField.toLowerCase()))
  return (
    <div className="App">
      <h1 className="title">Monster Rolex</h1>
      <SearchBox placeholder='serachMonster' handleChange={e => setSearchField(e.target.value)} />
      <CardList monsters={filteredMonsters} />  
    </div>
  );
}

export default App;
