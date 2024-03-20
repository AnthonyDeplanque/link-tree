import '../../assets/link-card.css';
import { LinkModel } from '../../config/link-model';
export interface LinkCardProps {
  link: LinkModel;
  icon?: JSX.Element;
}
const LinkCard: React.FC<LinkCardProps> = (props: LinkCardProps): JSX.Element => {
  const { link, icon } = props;

  return (
    <a className='link-card' href={link.address} target='_blank'>
      <div className='link-card-icon'>{icon ? icon : ''}</div>
      <div className='link-card-name'>
        <span>{link.name}</span>
      </div>
    </a>
  );
};

export default LinkCard;
