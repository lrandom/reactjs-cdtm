import {useEffect, useReducer, useState} from "react";

const MyComponent = () => {
    const [counter, setCounter] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [name, setName] = useState('NIIT');
    const [age, setAge] = useState(10);

    const [users, setUsers] = useReducer((state, action) => {
        switch (action.type) {
            case 'updateCounter':
                return {...state, counter: state.counter + 1};

            case 'updateName':
                return {...state, name: "CDTM"};

            case 'updateLoading':
                return {...state, isLoading: false};

            case 'updateAge':
                return {...state, age: 20};
        }
    }, {
        counter: 0,
        isLoading: true,
        name: 'NIIT',
        age: 10
    });

    useEffect(() => {
        console.log("Mounted successfully")
    }, [counter])

    return (
        <div>
            <div>
                Name {users.name}
            </div>

            <div>
                Age {users.age}
            </div>

            <div>
                Counter {users.counter}
            </div>

            <div>
                Is Loading {users.isLoading}
            </div>

            <button onClick={() => {
                setUsers({type: 'updateCounter'})
            }}>
                Update Counter
            </button>

            <button onClick={() => {
                setUsers({type: 'updateName'})
            }}>
                Update Name
            </button>

            <button onClick={() => {
                setUsers({type: 'updateLoading'})
            }}>
                Update Loading
            </button>

            <button onClick={() => {
                setUsers({type: 'updateAge'})
            }}>
                Update Age
            </button>
        </div>
    )
}

export default MyComponent;
