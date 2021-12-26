import './App.css';
import Page1 from './components/pages/Page1';
import Page2 from './components/pages/Page2';
import Notfound from './components/pages/Notfound';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
    return (
        <Router>
            <nav>
                <Link to="/page-1/1/Luan">Page 1</Link>
                <Link to="/page-2?id=1&name=Luan">Page 2</Link>
            </nav>

            <Switch>
                <Route path="/page-1/:id/:name">
                    <Page1/>
                </Route>
                <Route path="/page-2">
                    <Page2/>
                </Route>
                <Route path="*">
                    <Notfound/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
