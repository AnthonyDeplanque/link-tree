import React from "react";

interface ClipProps {
  clip: ClipType;
}

export interface ClipType {
  broadcaster_id: string,
  broadcaster_name: string,
  created_at: Date,
  creator_id: string,
  creator_name: string,
  duration: number,
  embed_url: string,
  game_id: string,
  id: string,
  is_featured: boolean,
  language: string,
  thumbnail_url: string,
  title: string,
  url: string,
  video_id: string,
  view_count: number,
  vod_offset: null
}

const ShowClip: React.FC<ClipProps> = ({ clip }) => {

  const locationURL = process.env.LOCATION_URL;

  return (
    <div key={clip.id} className="card-box clip-container">
      <p className="clip-title">{clip.title}</p>
      <div className="clip-information">
        <p className="clip-label">Créateur : </p><p>{clip.creator_name}</p>
      </div>
      <div className="clip-information">
        <p className="clip-label">Date de création : </p><p>{new Date(clip.created_at).toLocaleDateString()}</p>

      </div>
      <div className="clip-information">
        <p className="clip-label">Nombre de vues : </p><p>{clip.view_count}</p>

      </div>
      <iframe className="twitch-iframe-clip"
        title={clip.title}
        // src="https://player.twitch.tv/?video=v40464143&parent=streamernews.example.com&autoplay=false"
        src={`https://clips.twitch.tv/embed?clip=${clip.id}&parent=${locationURL ? locationURL : window.location.href}&autoplay=false`}
        allowFullScreen
      />
    </div>
  );
};

export default ShowClip;