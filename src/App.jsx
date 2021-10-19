import { useState } from 'react'
import Home from './pages/Home'
import { Switch, Route } from 'wouter'
import Product from './pages/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Switch>
      <Route path="/product/:title" component={Product} />
      <Route path="/" component={Home} />
    </Switch>
  )
}

export default App
