// Компоненты
import TextField from "../test-field/TextField";
import SymbolsPerMinute from "../symbols-per-minutes/SymbolsPerMinute";
import Accuracy from "../accuracy-block/Accuracy";
import AudioPlayer from "../audio-player/AudioPlayer";

const TestPage = () => {
  return (
    <div className="test-page">
      <AudioPlayer />
      <div className="test-page__container">
        <TextField />
        <div className="test-page__middle-results">
          <SymbolsPerMinute />
          <Accuracy />
        </div>
      </div>
    </div>
  );
};

export default TestPage;
