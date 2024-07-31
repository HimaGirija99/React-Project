
import './App.css';

import UserProfiles from './components/UserProfiles'
import Event from './components/event'

function App() {
  return (
    <div> 
      
      <UserProfiles Name = "John Doe" Age = {25} Occupation = "gardener"/>
      <UserProfiles Name = "Steve" Age = {35} Occupation = "lawyer"/>
      <Event/>
      </div>
  )
}

export default App;
