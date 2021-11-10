import DirectionButton from "./DirectionButton";

const DirectionButtons = () => (
  <div className="buttons group">

    <DirectionButton label="To left" direction="90deg" />
    <DirectionButton label="To 45°" direction="45deg" />
    <DirectionButton label="To 135°" direction="135deg" />
    <DirectionButton label="To 225°" direction="225deg" />
    <DirectionButton label="To 315°" direction="315deg" />
    <DirectionButton label="To right" direction="90deg" />

  </div>
);

export default DirectionButtons;
