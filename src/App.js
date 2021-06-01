import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Billing from './screens/Billing';
import Profile from './screens/Profile';
import Purchase from './screens/Purchase';
import Success from './screens/Success';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Profile} />
        <Route path="/billing" component={Billing} />
        <Route path="/purchase" component={Purchase} />
        <Route path="/success" component={Success} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
