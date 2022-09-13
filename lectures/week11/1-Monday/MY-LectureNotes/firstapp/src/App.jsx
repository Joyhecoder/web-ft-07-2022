import logo from './logo.svg';  //an image in our directory
import './App.css';
import Name from './components/Name.jsx';
import City from './components/City.jsx';
import Days from './components/Days';

function App() {

  let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  let dias = ["lunes", 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']
  let tag = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"]
  let dag = ["måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag", "söndag"]
  const daysInKorean = ['wollyoil', 'hwayoil', 'suyoil', 'mongnyoil', 'geumyoil', 'toyoil', 'illyoil'];
  const Tydzień = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"]

  return (
    <div>

    
      <Name name="Joy" days={days} language="English" /> <br />
      <Name name="Veronica" days={dias} language="Spanish" /> <br />
      <Name name="Shannon" days={tag} language="German" /> <br />
      <Name name="Kipp" days={daysInKorean} language="Korean" /> <br />
      <Name name="Thomas" days={Tydzień} language="Polish" /> <br />
     

      <City city="Houston"/> <br />
      <City city="Maui"/> <br />
      <City city="Seattle"/> <br />
      <City city="Chengdu"/> <br />

    </div>
    
  )
}

export default App;


