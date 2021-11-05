import './App.css';
import {Provider} from 'react-redux'
import store from './redux/store/store'
import {Route , Switch} from 'react-router-dom'
import {Home, Questions ,Result,NotFound} from './components'
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Switch>
          <Route path="/" exact={true}>
            <Home/>
          </Route>
          <Route path="/questions">
            <Questions/>
          </Route>
          <Route path="/result">
            <Result/>
          </Route>
          <NotFound/>
        </Switch>
      </Provider>
    </div>

  );
}

export default App;
