// Modules
import { useState, useEffect } from 'react';

// Helpers
import { clockParser, dateParser } from '../../helpers/dates';

const ClockDate = () => {
  const [date, setDate] = useState<Date>(new Date());
  useEffect(() => {
    setInterval(() => setDate(new Date()), 5000);
  }, []);
  return (
    <div id="time">
      <span className="time">{clockParser(date)}</span>
      <span className="date">{dateParser(date)}</span>
    </div>
  );
};

export default ClockDate;
