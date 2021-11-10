// == Import
import './styles.scss';
import NbColors from '../NbColors';
import ColorButtons from '../ColorButtons';
import Colors from '../Colors';
import Gradient from '../Gradient';
import DirectionButtons from '../DirectionButtons';

// == Composant
const App = () => (
  <div className="app">
    <NbColors />
    <ColorButtons />
    <Colors />
    <Gradient />
    <DirectionButtons />
  </div>
);

// == Export
export default App;
