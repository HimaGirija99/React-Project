
import './App.css';
import MyComponent from './components/MyComponent'
import UserProfile from './componentUserProfiles'

function App() {
  return (
    <div> <h1>Hello from React</h1> 
      <MyComponent/>
      <UserProfile name = "John Doe" age = "25" occupation = "gardener"/>
      </div>
  )
}

export default App;
