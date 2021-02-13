import TextField from "../test-field/TextField";
import SymbolsPerMinute from "../symbols-per-minutes/SymbolsPerMinute";
import Accuracy from "../accuracy-block/Accuracy";

const TestPage = () => {
  return (
    <div className="test-page">
      <TextField />
      <div className="test-page__middle-results">
        <SymbolsPerMinute />
        <Accuracy />
      </div>
    </div>
  );
};

export default TestPage;
