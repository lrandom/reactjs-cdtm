import './App.css';
import MyComponent1 from "./components/MyComponent1";
import MyComponent2 from "./components/MyComponent2";
import {useState} from "react";
import Parent from "./components/Parent";

function App() {
    const [isShow, setShow] = useState(true);
    const deleteComponent2 = () => {
        setShow(false);
    }
    return (
        <div>
            {/*  <MyComponent1></MyComponent1>*/}
            {isShow && <MyComponent2/>}
            <button onClick={() => {
                deleteComponent2()
            }}>Delete MyComponent 2
            </button>
        </div>
    );
}

export default App;
