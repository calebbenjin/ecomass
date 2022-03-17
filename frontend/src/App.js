import { Container } from 'react-bootstrap'
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import { BrowserRouter as Router, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
      <Header />
        <main className="py-3">
          <Container>
            <Route path="/" component={HomePage} exact />
            <Route path="/products/:id" component={ProductPage} />
          </Container>
        </main>
      <Footer />
    </Router>
  );
}

export default App;
