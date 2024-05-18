import { useEffect, useState } from "react";
import { LinkModel } from "../config/link-model";
import LinkCard from "./card/LinkCard";
import {
  DiscordIcon,
  DonationIcon,
  GamepadIcon,
  InstagramIcon,
  MerchIcon,
  SpotifyIcon,
  ThreadsIcon,
  TiktokIcon,
  TwitchIcon,
  TwitterIcon,
  YoutubeIcon
} from "./icons/";

import { fetchData } from "../Helpers/fetch-data";



const LinkList = () => {
  const [links, setLinks] = useState<LinkModel[]>()

  useEffect(() => {
    fetchData<LinkModel[]>("./config/data.json").then((data: LinkModel[]) => setLinks(data))
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
