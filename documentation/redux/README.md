## Detailed Instruction

#### Simple explaination with REACT

1)  We have to create separate folders **'actions'** and **'reducers'** in src folder

    **Folder structure:**

            public
            src
            ├── reducers
            │   ├── index.js             # combineReducers file
            │   ├── counter.js           # reducer for counter state
            │   ├── isLogged.js      
            ├── actions
            |   ├── index.js
            |   ├── counter.js 
            ├── index.js                 # entry point
            README.md                    # description

2) create **counter.js** and **isLogged.js** reducers files
    **counter.js** - file

        const counterReducer = (state = 0, action) => {
            switch(action.type) {
                case 'INC':
                    return state + 1;
                case 'DEC':
                    return state - 1;
                default:
                    return state;    
            }
        }
        
        export default counterReducer;

    **isLogged.js** - file

        const loggedReducer = (state = false,  action) => {
            switch(action.type) {
                case 'SIGN_IN': {
                    return !state;
                }
                default:
                    return state;
            }
        };

        export default loggedReducer;    

3) to combine all reducers create **index.js** in **reducers** folder

            import counterReducer from './counter';
            import loggedReducer from './isLogged';

            import { combineReducers } from 'redux';

            const rootReducers = combineReducers({
                counterReducer,
                loggedReducer
            });

            export default rootReducers;

3) connect react and redux using provider (entry point)

            import { Provider } from 'react-redux';

AND add **Provider** construction in the **ReactDOM.render()** into the entry point file

            ReactDOM.render(
                <Provider store={appStore}>
                    <App />
                </Provider>, 
                document.getElementById('root')
            );

4) How to use it in Application (App.js)

    1. import useSelector

            import { useSelector } from 'reatc-redux';
    
    2. add code

            function App() {
                const counter = useSelector(state=>state.counterReducer);
                const isLogged = useSelector(state => state.loggedReducer);
                return (
                    <div className="App">
                        <h1>Counter {counter}</h1>
                        {isLogged ? <h3>Valuable Information I shouldn`t see</h3> : ''}
                    </div>
                );
            }

#### Define state in redux store

1) Go to folder **reducers** and create new file with naming recomendations bellow
    
| Function name  | File name | Folder
|-----------|-------------|-------------|
| clickerReducer() | clicker.js | reducers

Code example of new reducer:

    const clickerReducer = (state = 20, action) => {
        switch(action.type) {
            case 'PLUS_ONE': {
                return state + 1;
            }
            default:
                return state;
        }
    }

    export default clickerReducer;

2) Register new **reducer** to combineReducer 

| combineReducer  | File name | Folder
|-----------|-------------|-------------|
|           | index.js | reducers

3) Define action for new state

| Function name  | File name | Folder
|-----------|-------------|-------------|
| clickerPlusOne | clicker.js | actions

Code example of new reducer:

    export const clickerPlusOne = () => {
        return {
            type: 'MULT'
        }
    };

4) Use it in your app

        import React from 'react';
        import { useSelector, useDispatch } from 'react-redux';
        import { clickerPlusOne } from './actions/clicker';


        function App() {
        const clicker = useSelector(state => state.clickerReducer);
        const dispatch = useDispatch();

        return (
            <div className="App">
            <h3>Clicker {clicker}</h3>
            <button onClick= {() => dispatch(clickerPlusOne())}>increment</button>
            </div>
        );
        }

        export default App; 
