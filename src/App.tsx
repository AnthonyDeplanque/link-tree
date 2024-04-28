import { getFirestore } from 'firebase/firestore';
import { BrowserRouter } from 'react-router-dom';
import './assets/App.css';
import MainComponent from './components/MainComponent';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { app } from './firebase/firebase-app';

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export const firestore = getFirestore(app);

function App() {
  // const { isDarkTheme } = useTheme()

  return (
    <>
      <div className='main'>
        <BrowserRouter>
          <Header />
          <MainComponent />
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}
export default App;
