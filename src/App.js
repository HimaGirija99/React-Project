
import './App.css';

import UserProfiles from './components/UserProfiles'
import event from './components/Event'

function App() {
  return (
    <div> 
      
      <UserProfiles Name = "John Doe" Age = {25} Occupation = "gardener"/>
      <UserProfiles Name = "Steve" Age = {35} Occupation = "lawyer"/>
      <event/>
      </div>
  )
}

export default App;
