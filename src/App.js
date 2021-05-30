import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PaymentPortOne from './screens/PaymentPortOne';
import PaymentPortTwo from './screens/PaymentPortTwo';          
import PaymentPortThree from './screens/PaymentPortThree';
import Profile from './screens/Profile';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Profile} />
        <Route path="/payment-port-one" component={PaymentPortOne} />
        <Route path="/payment-port-two" component={PaymentPortTwo} />
        <Route path="/payment-port-three" component={PaymentPortThree} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
