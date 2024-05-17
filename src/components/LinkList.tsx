import { useEffect, useState } from "react";
import { LinkModel } from "../config/link-model";
import LinkCard from "./card/LinkCard";
import DiscordIcon from "./icons/DiscordIcon";
import DonationIcon from "./icons/DonationIcon";
import GamepadIcon from "./icons/GamepadIcon";
import InstagramIcon from "./icons/InstagramIcon";
import ThreadsIcon from "./icons/ThreadsIcon";
import TiktokIcon from "./icons/TiktokIcon";
import TwitchIcon from "./icons/TwitchIcon";
import TwitterIcon from "./icons/TwitterIcon";
import YoutubeIcon from "./icons/YoutubeIcon";
import SpotifyIcon from "./icons/SpotifyIcon";
import MerchIcon from "./icons/MerchIcon";

const LinkList = () => {

  const [links, setLinks] = useState<LinkModel[]>()

  useEffect(() => {
    fetch("./config/data.json")
      .then((result: Response) => result.json())
      .then((data) => setLinks(data))
      .catch((error) => console.log(error))
  }, [])

  const socialIcons = new Map<string, JSX.Element>([
    ['instant gaming', <GamepadIcon />],
    ["instagram", <InstagramIcon />],
    ['discord', <DiscordIcon />],
    ["threads", <ThreadsIcon />],
    ["tiktok", <TiktokIcon />],
    ['spotify', <SpotifyIcon />],
    ["twitch", <TwitchIcon />],
    ["twitter", <TwitterIcon />],
    ["youtube", <YoutubeIcon />],
    ["dons", <DonationIcon />],
    ["merch", <MerchIcon />],
    ['discord', <DiscordIcon />]
  ])

  return <div className="link-list">
    {
      links && links.map((link: LinkModel, key: number) =>
        <LinkCard key={key} link={link} icon={socialIcons.get(link.name)} />)
    }
  </div>
}

export default LinkList;
