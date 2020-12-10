import "./App.css";
import Profile from "./Profile/Profile";
import celine from "./Profile/celine.jpg";

const fullName = "Celine Dion";
const bio =
  "Celine Dion was born on March 30, 1968 in Charlemagne, Quebec, a small town 50 km from Montreal She is the 14th child of Thérèse Tanguay and Adhémar Dion.";
const profession = "French Canadian pop singer";
const alertName = alert("Rihab Kouira");

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile
          fullName={fullName}
          bio={bio}
          profession={profession}
          alertName={alertName}
        >
          <img src={celine} alt="CelineDion" height="300px" />
        </Profile>
      </header>
    </div>
  );
}

export default App;
