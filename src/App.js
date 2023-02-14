import './App.css';
import Profile from './Components/Profile/Profile';

function App() {
  const handleName = (fullName) => alert(fullName)
  return (
    <div className='flex items-center justify-center flex-col h-screen'>
      <Profile 
        fullName='Adetola Adebola' 
        bio='Trying to watch more sunsets than Netflix' 
        profession='Daddy | Husband | Software Engineer'
        handleName={handleName}
      >
        <img src='/logo192.png' className='' alt='profile-pic'/>
      </Profile>
    </div>
  );
}

export default App;
