import "./Result.scss";

const Result = (props) => {
  const resetHandler = () => {
    props.reset();
  };
  return (
    <div className="result">
      <div className="result-info">
        <div className="result-box">
          <div className="result-headers">
            <h2>Tip Amount</h2>
            <p>/ person</p>
          </div>
          <div className="result-amount">
            <p>${props.tipPerPerson.toFixed(2)}</p>
          </div>
        </div>

        <div className="result-box">
          <div className="result-headers">
            <h2>Total</h2>
            <p>/ person</p>
          </div>
          <div className="result-amount">
            <p>${props.totalPerPerson.toFixed(2)}</p>
          </div>
        </div>
      </div>

      <button
        disabled={props.buttonDisabled}
        onClick={resetHandler}
        className="result-reset"
      >
        Reset
      </button>
    </div>
  );
};

export default Result;
