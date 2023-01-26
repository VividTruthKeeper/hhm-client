// Modules
import { v4 as uuidv4 } from 'uuid';

// Components
import SectionTitle from './SectionTitle';
import AsideItem from '../aside/AsideItem';
import Calendar from '../aside/Calendar';

interface AsideDataType {
  title: string;
  category: string;
}
const asideData: AsideDataType[] = [
  {
    title:
      'Государственному объединению «Türkmen atlary» разрешено заключить дополнительное соглашение с ИП «Röwşen»',
    category: 'Политика',
  },
  {
    title:
      'Государственному объединению «Türkmen atlary» разрешено заключить дополнительное соглашение с ИП «Röwşen»',
    category: 'Политика',
  },
  {
    title:
      'Государственному объединению «Türkmen atlary» разрешено заключить дополнительное соглашение с ИП «Röwşen»',
    category: 'Политика',
  },
  {
    title:
      'Государственному объединению «Türkmen atlary» разрешено заключить дополнительное соглашение с ИП «Röwşen»',
    category: 'Политика',
  },
  {
    title:
      'Государственному объединению «Türkmen atlary» разрешено заключить дополнительное соглашение с ИП «Röwşen»',
    category: 'Политика',
  },
  {
    title:
      'Государственному объединению «Türkmen atlary» разрешено заключить дополнительное соглашение с ИП «Röwşen»',
    category: 'Политика',
  },
];
const Aside = () => {
  return (
    <aside className="aside">
      <SectionTitle title="Самое читаемое" />
      <div className="aside-scroll">
        {asideData.map((asideScrollItem: AsideDataType) => {
          return (
            <AsideItem
              key={uuidv4()}
              title={asideScrollItem.title}
              category={asideScrollItem.category}
            />
          );
        })}
      </div>
      <Calendar />
    </aside>
  );
};

export default Aside;
