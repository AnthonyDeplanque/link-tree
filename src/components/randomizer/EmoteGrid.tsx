import React from "react";
import { emotes } from "../../Constants/emotes";
import '../../assets/emote-grid.css'

interface EmoteGridProps {
  onSelect: (emote: string) => void;
  onClose: () => void;
}

const EmoteGrid: React.FC<EmoteGridProps> = ({ onSelect }) => {
  return (
    <div className="emote-grid" >
      <div className="emote-list">
        {emotes.map((emote) => (
          <div key={emote} style={{ cursor: 'pointer' }} onClick={() => onSelect(emote)}>
            {emote}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmoteGrid;