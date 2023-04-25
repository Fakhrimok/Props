import Profile from "./Profile/Profile";
import "./App.css";

function App() {
  const fullName = "Fakhri Mokni";
  const profession = "Web Developper";
  const bio = "Helicopter Pilot";

  const photostyle = { width: 400, borderRadius: 45 };

  const alertMe = () => {
    alert(`Hello I am ${fullName}`);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Profile
          alertMe={alertMe}
          fullName={fullName}
          profession={profession}
          bio={bio}
        >
          <img
            style={photostyle}
            src="https://i.pinimg.com/736x/25/78/61/25786134576ce0344893b33a051160b1.jpg"
          />
        </Profile>
      </header>
    </div>
  );
}

export default App;
