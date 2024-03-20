import { Link } from 'react-router-dom';
import BackIcon from './icons/BackIcon';

const Legal: React.FC = (): JSX.Element => {
  window.scrollTo({ top: 0, behavior: 'smooth' });

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
