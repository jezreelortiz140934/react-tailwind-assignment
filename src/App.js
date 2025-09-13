import Header from './components/Header';
import SideBar from './components/SideBar';
import ProfileContent from './components/ProfileContent';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <SideBar />
        <ProfileContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;

