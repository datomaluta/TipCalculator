import "./Form.scss";
import dollar from "../../assets/icon-dollar.svg";
import person from "../../assets/icon-person.svg";
import CheckBox from "../../UI/CheckBox";

const Form = (props) => {
  const {
    bill,
    tip,
    customTip,
    peopleCount,
    billChangeHandler,
    tipChangeHandler,
    customTipChangeHandler,
    peopleCountChangeHandler,
    peopleCountError,
  } = props;

  return (
    <form className="form">
      <div className="form__input-box">
        <label className="form__label">Bill</label>
        <div className="form__input-wrapper">
          <img src={dollar} alt="dollarIcon" className="form__input-icon" />
          <input
            onChange={billChangeHandler}
            className="form__input"
            placeholder="0"
            type="text"
            value={bill}
          />
        </div>
      </div>

      <div className="form__check-box">
        <label className="form__label">Select Tip %</label>
        <div className="form__check-container">
          <CheckBox
            checked={!customTip && tip === "5"}
            onChange={tipChangeHandler}
            value="5"
          />
          <CheckBox
            checked={!customTip && tip === "10"}
            onChange={tipChangeHandler}
            value="10"
          />
          <CheckBox
            checked={!customTip && tip === "15"}
            onChange={tipChangeHandler}
            value="15"
          />
          <CheckBox
            checked={!customTip && tip === "25"}
            onChange={tipChangeHandler}
            value="25"
          />
          <CheckBox
            checked={!customTip && tip === "50"}
            onChange={tipChangeHandler}
            value="50"
          />

          <div className="form__check-wrapper">
            <input
              className="form__check-input-custom"
              placeholder="Custom"
              onChange={customTipChangeHandler}
              value={customTip}
            />
          </div>
        </div>
      </div>

      <div className="form__input-box">
        <div className="form__label-wrapper">
          <label className="form__label">Number of People</label>
          {peopleCountError && (
            <label className="form__error-label">Cant be zero!</label>
          )}
        </div>
        <div className="form__input-wrapper">
          <img src={person} alt="dollarIcon" className="form__input-icon" />
          <input
            onChange={peopleCountChangeHandler}
            className={`${
              peopleCountError ? "form__input form__input-error" : "form__input"
            }`}
            placeholder="0"
            type="text"
            value={peopleCount}
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
