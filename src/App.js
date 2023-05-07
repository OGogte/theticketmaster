import styles from './App.module.css';
import LoginSignup from './components/LoginSignup';
import train from './assets/train.png';
import tmlogo from './assets/logo.png';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CSVUploader from './components/CSVUploader';

function App() {
    return (
        <div className={styles.App}>
            <img src={tmlogo} alt='Theticketmaster'></img>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginSignup />} />
                    <Route path="home" index element={<Home />} />
                    <Route path="csv" index element={<CSVUploader />} />
                </Routes>
            </BrowserRouter>

            {/* <LoginSignup /> */}
            <img className={styles.bottomImg} src={train} alt='train'></img>
        </div>
    );
}

export default App;
