import { Link, Route } from 'react-router-dom';
import './App.css';
import page1 from './pages/page1';
import page2 from './pages/page2';
import page3 from './pages/page3';

function App() {
  return (
    <div>
      <div>ページ遷移</div>
      <ul>
        <li><Link to="/page1">page1</Link></li>
        <li><Link to="/page2">page2</Link></li>
        <li><Link to="/page3">page3</Link></li>
      </ul>

      <div>↓↓page↓↓</div>

      <div>
        <Route path="/" render={() => (<div>homepage</div>)} />
        <Route path="/page1" component={page1} />
        <Route path="/page2" component={page2} />
        <Route path="/page3" component={page3} />
      </div>

    </div>
  );
}

export default App;
