import { Link } from 'react-router-dom';
import BackIcon from './icons/BackIcon';

const Legal: React.FC = (): JSX.Element => {
  return (
    <>
      <div style={{ padding: '1rem' }}>
        <p>Coming soon !</p>
      </div>
      <div style={{ padding: '1rem' }}>
        <Link to='/'>
          <BackIcon />
        </Link>
      </div>
    </>
  );
};

export default Legal;
