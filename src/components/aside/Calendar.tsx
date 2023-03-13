// Modules
import { useState, useEffect, useCallback, useMemo } from "react";
import { Calendar as ReactCalendar } from "react-calendar";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { v4 as uuiv4 } from "uuid";

//
import { Api } from "../../api/Api";
import { url } from "../../url";
import { IPostData } from "../../types/store.types";
import Loader from "../global/Loader";
import { Link } from "react-router-dom";

const Calendar = () => {
  const [value, onChange] = useState(new Date());

  const [data, setData] = useState<any>();

  const valueMemo = useMemo(() => ({ value, onChange }), [value, onChange]);
  const dataMemo = useMemo(() => ({ data, setData }), [data, setData]);

  const constructDateParam = useCallback(() => {
    return `${value.getFullYear()}-${
      value.getDate().toString().length < 2
        ? "0" + value.getDate()
        : value.getDate()
    }-${
      (value.getMonth() + 1).toString().length < 2
        ? "0" + (value.getMonth() + 1)
        : value.getMonth() + 1
    }`;
  }, [valueMemo.value]);

  const api = new Api(url + `/posts`, [
    { name: "date", value: constructDateParam() },
  ]);
  useEffect(() => {
    api.get(dataMemo.data, dataMemo.setData);
  }, [value]);

  return (
    <div className="calendar">
      <LazyLoadComponent useIntersectionObserver>
        <ReactCalendar value={value} onChange={valueMemo.onChange} />
      </LazyLoadComponent>
      <div className={"calendar-popup"}>
        {data ? (
          data[0] ? (
            <Link
              to={`/news/${data[0].id}`}
              className="calendar-popup-item"
              key={uuiv4()}
            >
              <p>{data[0].title}</p>
            </Link>
          ) : (
            <div className="calendar-popup-item" key={uuiv4()}>
              <p>Нет событий</p>
            </div>
          )
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Calendar;
