import { Switch, Route } from 'react-router-dom';
import About from './components/About'
import Info from './components/Info'
import Home from './components/Home'
import NotFound from './components/NotFound'


const Routes = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/info' component={Info} />
        <NotFound />
    </Switch>
)

export default Routes;