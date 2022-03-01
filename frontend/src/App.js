import { Container } from 'react-bootstrap'
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomeScreens from './screens/HomeScreens';

function App() {
  return (
    <>
      <Header />
        <main className="py-3">
          <Container>
            <HomeScreens />
          </Container>
        </main>
      <Footer />
    </>
  );
}

export default App;
