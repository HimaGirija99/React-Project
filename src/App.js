
import './App.css';
import MyComponent from './components/MyComponent'
import UserProfiles from './components/UserProfiles'

function App() {
  return (
    <div> <h1>Hello from React</h1> 
      <MyComponent/>
      <UserProfiles Name = "John Doe" Age = {25} Occupation = "gardener"/>
      </div>
  )
}

export default App;
