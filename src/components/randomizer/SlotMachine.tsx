import { useEffect, useState } from "react";
import { SelectedGame } from "./Randomizer";
import '../../assets/slot-machine.css'

const SlotMachine = (props: { slots: SelectedGame[] }) => {

  const { slots } = props;

  const [firstSlot, setFirstSlot] = useState<SelectedGame>(slots[0]);
  const [secondSlot, setSecondSlot] = useState<SelectedGame>(slots[1]);
  const [thirdSlot, setThirdSlot] = useState<SelectedGame>(slots[0]);
  const [isRolling, setIsRolling] = useState<boolean>(false);

  const randomizeSlot = () => Math.floor(Math.random() * slots.length);
  const isAllSame = () => thirdSlot!.emote === secondSlot!.emote && thirdSlot!.emote === firstSlot!.emote;

  useEffect(() => {
    if (isRolling) {
      const interval = setInterval(() => {
        randomization()
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isRolling, slots])

  const randomization = () => {
    setFirstSlot(slots[randomizeSlot()])
    setSecondSlot(slots[randomizeSlot()])
    setThirdSlot(slots[randomizeSlot()])
  }

  const handleRandomizeClick = () => {
    setIsRolling(true);
    setTimeout(() => {
      setIsRolling(false);
    }, 750); // Change this value to adjust the duration of rolling
  };

  return <div className="randomization-machine">
    <div className="slot-machine">
      <div className="slot-box">
        <p>{firstSlot.emote}</p>
      </div>
      <div className="slot-box">
        <p>{secondSlot.emote}</p>
      </div>
      <div className="slot-box">
        <p>{thirdSlot.emote}</p>
      </div>

    </div>
    <button onClick={handleRandomizeClick}>Randomize</button>
    {isRolling ? <p>Rolling ...</p> : isAllSame() && <p>{thirdSlot.name}</p>}
  </div>
}

export default SlotMachine;