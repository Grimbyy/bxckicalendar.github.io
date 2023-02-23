import React, { useState } from 'react'

export const CalendarSaveContext = React.createContext();

export function CalendarSaveProvider({nosave = false, children}) {

    const defaultEntry = {
        config: {
            daily_goals: [{name: 'Feel Good', steps: [{name: 'Look Good'}, {name: 'Eat Well'}]}],
            daily_reminders: [{name: 'Feed Dog', time: '08:00:00'}, {name: 'Feed Dog', time: '17:00:00'}],
        },
        entries: {
            [new Date().toISOString().split('T')[0]]: {
                goals: [{name: 'LAUGH', steps: [{name: 'LIVE'}, {name: 'LOVE'}]}],
                reminders: [{name: 'Have a wee', time: '03:00:00'}],
            }
        }
    };

    const [save, setSave] = useState(defaultEntry);

  return (
    <CalendarSaveContext.Provider value={{save, setSave}}>
        {children}
    </CalendarSaveContext.Provider>
  );
}
