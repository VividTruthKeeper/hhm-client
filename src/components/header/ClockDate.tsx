// Modules
import { useState, useEffect } from 'react';

// Helpers
import { clockParser } from '../../helpers/clockParser';

const ClockDate = () => {
  const [date, setDate] = useState<Date>(new Date());
  useEffect(() => {
    setInterval(() => setDate(new Date()), 5000);
  }, []);
  return (
    <div id="time">
      <span className="time">{clockParser(date)}</span>
      <span className="date">14 февраля</span>
    </div>
  );
};

export default ClockDate;
