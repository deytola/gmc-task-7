import './App.css';
import ProfilePhoto from './Components/Profile/ProfilePhoto';
import Address from './Components/Profile/Address';
import FullName from './Components/Profile/FullName';

function App() {
  return (
    <div className='flex items-center justify-center flex-col h-screen'>
      <ProfilePhoto></ProfilePhoto>
      <FullName firstName='Adetola' lastName='Adebola'></FullName>
      <Address></Address>
    </div>
  );
}

export default App;
