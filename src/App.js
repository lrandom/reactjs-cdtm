import './App.css';
import Signup from './components/Signup';
import DecrementComponent from "./smart_components/DecrementComponent";
import IncrementComponent from "./smart_components/IncrementComponent";
import ShowNumberComponent from "./smart_components/ShowNumberComponent";

function App() {
    return (
        <div>
            <DecrementComponent></DecrementComponent>
            <ShowNumberComponent></ShowNumberComponent>
            <IncrementComponent></IncrementComponent>
        </div>
    );
}

export default App;
