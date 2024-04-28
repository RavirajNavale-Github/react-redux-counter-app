import "./App.css";
import Counter from "./component/Counter";
import { Provider } from "react-redux";
import store from "./redux/Store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;