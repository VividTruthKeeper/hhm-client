// Modules
import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { Calendar as ReactCalendar } from 'react-calendar';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { v4 as uuiv4 } from 'uuid';

//
import { Api } from '../../api/Api';
import { url } from '../../url';
import { IPostData } from '../../types/store.types';
import Loader from '../global/Loader';

const Calendar = () => {
  const [value, onChange] = useState(new Date());

  const [data, setData] = useState<any>();
  const [popup, setPopup] = useState<boolean>(false);
  const ref = useRef<boolean>(false);

  const valueMemo = useMemo(() => ({ value, onChange }), [value, onChange]);
  const dataMemo = useMemo(() => ({ data, setData }), [data, setData]);

  const constructDateParam = useCallback(() => {
    return `${value.getFullYear()}-${
      value.getDate().toString().length < 2 ? '0' + value.getDate() : value.getDate()
    }-${
      (value.getMonth() + 1).toString().length < 2
        ? '0' + (value.getMonth() + 1)
        : value.getMonth() + 1
    }`;
  }, [valueMemo.value]);

  const api = new Api(url + `/posts`, [{ name: 'date', value: constructDateParam() }]);
  useEffect(() => {
    if (!ref.current) {
      ref.current = true;
      console.log(dataMemo.data);
      setPopup(false);
      return;
    }
    api.get(dataMemo.data, dataMemo.setData);
    setPopup(true);
  }, [value]);

  return (
    <div className="calendar">
      {popup ? (
        <div className={popup ? 'calendar-popup calendar-popup-active' : 'calendar-popup'}>
          {data ? (
            // data.map((el: any, index: number) => (
            //   <div className="calendar-popup-item" key={uuiv4()}>
            //     <p>{el.title}</p>
            //   </div>
            // ))
            data[0] ? (
              <div className="calendar-popup-item" key={uuiv4()}>
                <p>{data[0].title}</p>
              </div>
            ) : (
              <div className="calendar-popup-item" key={uuiv4()}>
                <p>Нет событий</p>
              </div>
            )
          ) : (
            <Loader />
          )}
        </div>
      ) : null}
      <LazyLoadComponent useIntersectionObserver>
        <ReactCalendar value={value} onChange={valueMemo.onChange} />
      </LazyLoadComponent>
    </div>
  );
};

export default Calendar;
