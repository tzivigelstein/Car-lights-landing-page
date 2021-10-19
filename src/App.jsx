import Home from './pages/Home'
import { Switch, Route } from 'wouter'
import Product from './pages/Product'
import AppState from './context/app/appState'

function App() {
  return (
    <AppState>
      <Switch>
        <Route path="/product/:title" component={Product} />
        <Route path="/" component={Home} />
      </Switch>
    </AppState>
  )
}

export default App
