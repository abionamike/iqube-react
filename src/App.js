import { HashRouter, Route, Switch } from 'react-router-dom';
import Billing from './screens/Billing';
import Profile from './screens/Profile';
import Purchase from './screens/Purchase';
import Success from './screens/Success';

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Profile} />
        <Route path="/billing" component={Billing} />
        <Route path="/purchase" component={Purchase} />
        <Route path="/success" component={Success} />
      </Switch>
    </HashRouter>
  );
}

export default App;
