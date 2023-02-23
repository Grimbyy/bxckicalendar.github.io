import './App.css';
import { useState, useContext } from "react";
import { CalendarSaveContext } from './Contexts/CalendarSaveProvider';

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
    {[...new Array(daysInCurrentMonth)].map((_, i) => <CalendarNavItem day={new Date(currDate.getFullYear(), currDate.getMonth(), i+1)}/>)}
  </div>
}

function CalendarNavItem({day}) {
  const [complete, setComplete] = useState(false);
  const ConfigSave = useContext(CalendarSaveContext);
  console.log(ConfigSave.save.entries[day.toISOString().split('T')[0]])
  const todayGoals = ConfigSave.save.config.daily_goals.concat(ConfigSave.save.entries[day.toISOString().split('T')[0]]?.goals || []);
  const todayReminders = ConfigSave.save.config.daily_reminders.concat(ConfigSave.save.entries[day.toISOString().split('T')[0]]?.reminders || []);

  function onDayClick(e) {
    alert(`Goals:\n${todayGoals.map(g => g.name + `\n\tSteps:\n\t\t${g.steps.map(step => step.name).join('\n\t\t')}`).join('\n')}`)
  }

  return <div onClick={onDayClick} className={"DateNavItem " + (complete ? 'complete' : '')} data-date={`${day}`.slice(0,4) + ' ' + day.getDate() + (day.toLocaleDateString() === new Date().toLocaleDateString() ? ' ⭕' : '')} >
    {todayGoals.length ? <a data-goal>{todayGoals.length}</a> : null}
    {todayReminders.length ? <a data-reminder>{todayReminders.length}</a> : null}
  </div>;
}

function CalendarConfig() {
  return <div className="CalendarConfig">

  </div>
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
