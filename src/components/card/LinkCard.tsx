import { LinkModel } from "../../config/link-model";
import "../../assets/link-card.css"
export interface LinkCardProps {
  link: LinkModel,
  icon?: JSX.Element
}
const LinkCard = (props: LinkCardProps) => {
  const { link, icon } = props;

  return (
    <a className="link-card" href={link.address}>
      <div className="link-card-icon">
        {
          icon ?
            icon :
            ''
        }
      </div>
      <div className="link-card-name">
        <span>{link.name}</span>
      </div>
    </a>)

}

export default LinkCard;