import { Instagram, Music2 as Tiktok, Twitch, Twitter, Youtube, HandCoins as Dons, BotMessageSquare as Discord, Gamepad2 as InstantGaming } from "lucide-react";
import { useEffect, useState } from "react";
import { LinkModel } from "../config/link-model";
import LinkCard from "./card/LinkCard";

const LinkList = () => {

  const [links, setLinks] = useState<LinkModel[]>()

  useEffect(() => {
    fetch("./config/data.json")
      .then((result: Response) => result.json())
      .then((data) => setLinks(data))
      .catch((error) => console.log(error))
  }, [])

  const lucideSocialIcons = new Map<string, JSX.Element>([
    ["instagram", <Instagram />],
    ["tiktok", <Tiktok />],
    ["twitch", <Twitch />],
    ["twitter", <Twitter />],
    ["youtube", <Youtube />],
    ["dons", <Dons />],
    ['discord', <Discord />],
    ['instant gaming', <InstantGaming />]
  ])

  return <div className="link-list">
    {
      links && links.map((link: LinkModel, key: number) =>
        <LinkCard key={key} link={link} icon={lucideSocialIcons.get(link.name)} />)

    }
  </div>
}

export default LinkList;