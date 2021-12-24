import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav.js';
import Ex1 from './components/Ex1.js';

import {name} from './demo/helper.js';
import {getTotal} from "./demo/helper.js";
import {obj} from './demo/helper.js';
import getMyName from './demo/helper';

function App() {
    const schoolName = "Cao đẳng công nghệ và thương mại";
    const getTotal = (a, b) => {
        return a + b;
    }
    const imgSrc = 'https://image.winudf.com/v2/image1/Y29tLm5hdHVyYWxpbWFnZWhkd2FsbHBhcGVyLnJ5cnNfc2NyZWVuXzBfMTU0MjM3MDgxNl8wODU/screen-0.jpg?fakeurl=1&type=.jpg';
    const obj = {
        backgroundColor: 'red'
    }
    const clickMe = () => {
        alert('Click me');
    }
    const isRenderA = false;
    let list = [
        10,
        20,
        30,
        40
    ];
    return (
        <div className="App">
            {
                isRenderA ? <Nav/> : <div>Hello</div>
            }
            {schoolName}
            {10 * 20}
            {getTotal(10, 20)}
            <img className="img" style={obj} src={imgSrc}/>
            <button onClick={clickMe}>Click me, bro</button>
            {
                list.map((item, index) => {
                    return <div key={index}>{item}</div>
                })
            }
            <Ex1></Ex1>
            <div>{name}</div>
            <div>{getTotal(10, 10)}</div>
            <div>{obj.name}</div>
            <div>{getMyName}</div>
        </div>
    );
}

export default App;
