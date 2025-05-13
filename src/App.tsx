
import Home from './components/Home';
import GlobalContextsProvider from './components/plasmic/beverage_products/PlasmicGlobalContextsProvider'

function App() {
  return (<GlobalContextsProvider><Home /></GlobalContextsProvider>);
}

export default App;
  