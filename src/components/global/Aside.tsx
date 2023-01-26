// Modules
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';

// Components
import SectionTitle from './SectionTitle';
import AsideItem from '../aside/AsideItem';
import Calendar from '../aside/Calendar';

// Icons
import { ReactComponent as ArrowDownBlue } from '../../assets/icons/arrow-down-blue.svg';

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

const buttonMotion = {
  rest: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    color: '#2368ad',
    duration: 0.4,
    type: 'tween',
  },
  hover: {
    backgroundColor: '#2368ad',
    color: '#ffffff',
    duration: 0.4,
    type: 'spring',
  },
};

const arrowMotion = {
  rest: {
    fill: '#2368ad',
    transform: 'rotateX(0%)',
    duration: 0.4,
    type: 'tween',
  },
  hover: {
    fill: '#ffffff',
    transform: 'rotateX(180%)',
    duration: 0.4,
    type: 'spring',
  },
};

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
      <motion.button
        className="aside-btn"
        type="button"
        initial={buttonMotion.rest}
        whileHover={buttonMotion.hover}>
        <span>Открыть полностью</span>
        <motion.div initial={'rest'} variants={arrowMotion}>
          <ArrowDownBlue />
        </motion.div>
      </motion.button>
      <Calendar />
    </aside>
  );
};

export default Aside;
