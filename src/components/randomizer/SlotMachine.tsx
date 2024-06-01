import { useEffect, useState } from 'react'
import { SelectedGame } from './Randomizer'
import '../../assets/css/slot-machine.css'
import CancelIcon from '../icons/CancelIcon'

const SlotMachine = (props: { slots: SelectedGame[]; onClose: () => void }) => {
  const { slots, onClose } = props

  const randomizeSlot = () => Math.floor(Math.random() * slots.length)

  const [firstSlot, setFirstSlot] = useState<SelectedGame>(slots[randomizeSlot()])
  const [secondSlot, setSecondSlot] = useState<SelectedGame>(slots[1])
  const [thirdSlot, setThirdSlot] = useState<SelectedGame>(slots[0])
  const [isRolling, setIsRolling] = useState<boolean>(false)

  const isAllSame = () => thirdSlot!.emote === secondSlot!.emote && thirdSlot!.emote === firstSlot!.emote

  useEffect(() => {
    if (isRolling) {
      const interval = setInterval(() => {
        randomization()
      }, 50)
      return () => clearInterval(interval)
    }
  }, [isRolling, slots])

  const randomization = () => {
    setFirstSlot(slots[randomizeSlot()])
    setSecondSlot(slots[randomizeSlot()])
    setThirdSlot(slots[randomizeSlot()])
  }

  const handleRandomizeClick = () => {
    setIsRolling(true)
    setTimeout(() => {
      setIsRolling(false)
    }, 750) // Change this value to adjust the duration of rolling
  }

  return (
    <div className='dialog-display-background'>
      <div className='randomization-machine card-box'>
        <div className='dialog-header'>
          {' '}
          <p className='item-delete' onClick={onClose}>
            <CancelIcon />
          </p>
        </div>
        <div className='randomization-machine-content'>
          <p className='slot-machine-result'>{isRolling ? 'Rolling ...' : isAllSame() && thirdSlot.name}</p>
          <div className='slot-machine'>
            <div className='slot-box'>
              <p>{firstSlot.emote}</p>
            </div>
            <div className='slot-box'>
              <p>{secondSlot.emote}</p>
            </div>
            <div className='slot-box'>
              <p>{thirdSlot.emote}</p>
            </div>
          </div>
          <div className='button-selector-div'>
            <button className='game-selector-button' onClick={handleRandomizeClick}>
              Randomize
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SlotMachine
