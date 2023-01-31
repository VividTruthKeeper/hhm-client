// Modules
import { useState } from "react";
import { Calendar as ReactCalendar } from "react-calendar";
import { LazyLoadComponent } from "react-lazy-load-image-component";

const Calendar = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="calendar">
      <LazyLoadComponent useIntersectionObserver>
        <ReactCalendar value={value} onChange={onChange} />
      </LazyLoadComponent>
    </div>
  );
};

export default Calendar;
