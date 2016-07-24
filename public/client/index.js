import {
  IndexRoute,
  Router,
  Route,
    browserHistory,
    hashHistory
} from 'react-router'
import {
  syncHistoryWithStore
} from 'react-router-redux'
import {
  Provider
} from 'react-redux'
import ReactDOM from 'react-dom'
import React from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './containers/App'
import Home from './containers/Home'
import Index from './containers/Index'
import Contact from './containers/Contact'
import Jobs from './containers/Jobs'
import About from './containers/About'
import Service from './containers/Service'
import GirlService from './containers/GirlService'
import Star from './containers/Star'
import Baby from './containers/Baby'
import Cart from './components/Cart'
import configure from './store'

injectTapEventPlugin();



const store = configure()
const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/app" component={App}>
      </Route>
      <Route path="/cart(/:babyId)" component={Cart} />
      <Route path="/" component={Home}>
        <IndexRoute component={Index} />
        <Route path="/contact" component={Contact}></Route>
        <Route path="/jobs" component={Jobs}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/service" component={Service}></Route>
        <Route path="/star(/:starId)" component={Star} />
        <Route path="/baby(/:babyId)" component={Baby} />
        <Route path="/girl-service" component={GirlService} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
