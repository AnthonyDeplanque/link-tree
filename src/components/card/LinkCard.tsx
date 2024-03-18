import { LinkModel } from "../../config/link-model";

export interface LinkCardProps {
  link: LinkModel
}
const LinkCard = (props: LinkCardProps) => {
  const { link } = props;

  return <a className="link-card" href={link.address}>
    <div><img src={link.icon} /><span>{link.name}</span></div>
  </a>

}

export default LinkCard;