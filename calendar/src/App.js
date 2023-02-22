import './App.css';
import { useState } from "react";

function CurrentDateTime() {
  const [date, setDate] = useState(new Date());
  setInterval(() => setDate(new Date()), 1000);

  return <a className="dateTimeHolder">{date.toLocaleString().replace(',', '')}</a>
}

function Calendar() {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);
  return <div className="CalendarMain">
    <CalendarNav selectedDate setSelectedDate />

  </div>
}

function CalendarNav({setSelectedDate, selectedDate}) {
  const currDate = new Date()
  const daysInCurrentMonth = new Date(currDate.getFullYear(), currDate.getMonth()+1, 0).getDate();
  return <div className="CalendarNav">
    {[...new Array(daysInCurrentMonth)].map((_, i) => <div className="DateNavItem" data-date={i+1} />)}
  </div>
}

function CalendarConfig() {
  return <div className="CalendarConfig"></div>
}

function App() {

  const date = new Date();

  return (
    <div className="App">
      <div className="CalendarHolder">
        <h1 className="CalendarTitle">My {date.getFullYear()}</h1>
        <h2 className="CalendarSubtitle">Today <CurrentDateTime /></h2>
        <Calendar />
        <CalendarConfig />
      </div>
    </div>
  );
}

export default App;
