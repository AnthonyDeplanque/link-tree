import React from 'react'
import { emotes } from '../../Constants/emotes'
import '../../assets/css/emote-grid.css'
import CancelIcon from '../icons/CancelIcon'

interface EmoteGridProps {
  onSelect: (emote: string) => void
  onClose: () => void
}

const EmoteGrid: React.FC<EmoteGridProps> = ({ onSelect, onClose }) => {
  return (
    <div className='dialog-display-background'>
      <div className='emote-grid card-box'>
        <div className='dialog-header'>
          <p className='item-delete' onClick={onClose}>
            <CancelIcon />
          </p>
        </div>

        <div className='emote-list'>
          {emotes.map((emote) => (
            <div key={emote} style={{ cursor: 'pointer' }} onClick={() => onSelect(emote)}>
              {emote}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmoteGrid
