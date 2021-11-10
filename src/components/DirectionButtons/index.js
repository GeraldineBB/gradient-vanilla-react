const DirectionButtons = () => (
  <div className="buttons group">
    <button type="button" className="button" id="toLeft">to left</button>
    <button type="button" className="button button--space-before" id="to45">to 45°</button>
    <button type="button" className="button" id="to135">to 135°</button>
    <button type="button" className="button" id="to225">to 225°</button>
    <button type="button" className="button button--space-after" id="to315">to 315°</button>
    <button type="button" className="button" id="toRight">to right</button>
  </div>
);

export default DirectionButtons;
