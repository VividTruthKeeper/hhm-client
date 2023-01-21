// Modules
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

// Types
import { navListDataType, navListItemType } from '../../types/header.types';

const data: navListDataType = [
  { title: 'Политика', path: '/category' },
  { title: 'Экономика', path: '/category' },
  { title: 'Общество', path: '/category' },
  { title: 'Культура', path: '/category' },
  { title: 'Спорт', path: '/category' },
  { title: 'Технологии', path: '/category' },
  { title: 'Экология', path: '/category' },
];
const Nav = () => {
  return (
    <div className="nav">
      <div className="container">
        <div className="nav-inner">
          <ul>
            {data.map((dataItem: navListItemType) => (
              <li key={uuidv4()}>
                <Link to={dataItem.path}>{dataItem.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
