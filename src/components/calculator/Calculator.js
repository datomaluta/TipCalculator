import ContainerWrapper from "../../Layout/ContainerWrapper";
import dollar from "../../assets/icon-dollar.svg";
import person from "../../assets/icon-person.svg";
import "./Calculator.scss";
import Result from "../result/Result";
import CheckBox from "../../UI/CheckBox";
import { useEffect, useState } from "react";

const Calculator = () => {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [customTip, setCustomTip] = useState("");
  const [peopleCount, setPeopleCount] = useState("");
  const [peopleCountError, setPeopleCountError] = useState(false);

  const [tipPerPerson, setTipPerPerson] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);

  useEffect(() => {
    if (bill && tip && peopleCount) {
      const tipAmount = bill * (tip / 100);
      console.log(tipAmount / peopleCount);
      console.log((tipAmount + bill) / peopleCount);
      setTipPerPerson(tipAmount / peopleCount);
      setTotalPerPerson((tipAmount + bill) / peopleCount);
    }
  }, [bill, tip, peopleCount]);

  const reset = () => {
    setTip("");
    setBill("");
    setPeopleCount("");
    setCustomTip("");
    setTipPerPerson(0);
    setTotalPerPerson(0);
  };

  const billChangeHandler = (event) => {
    if (isNaN(+event.target.value)) {
      return;
    } else {
      setBill(+event.target.value);
    }
  };

  const tipChangeHandler = (event) => {
    setTip(+event.target.value);
  };

  const customTipChangeHandler = (event) => {
    if (isNaN(+event.target.value)) {
      return;
    } else {
      setTip(+event.target.value);
      setCustomTip(+event.target.value);
    }
  };

  const peopleCountChangeHandler = (event) => {
    if (isNaN(+event.target.value)) {
      return;
    } else {
      if (+event.target.value === 0) {
        setPeopleCountError(true);
      } else {
        setPeopleCount(+event.target.value);
        setPeopleCountError(false);
      }
    }
  };

  return (
    <ContainerWrapper>
      <div className="form">
        <form className="form__calc-side">
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
                checked={!customTip && tip === 5}
                onChange={tipChangeHandler}
                value="5"
              />
              <CheckBox
                checked={!customTip && tip === 10}
                onChange={tipChangeHandler}
                value="10"
              />
              <CheckBox
                checked={!customTip && tip === 15}
                onChange={tipChangeHandler}
                value="15"
              />
              <CheckBox
                checked={!customTip && tip === 25}
                onChange={tipChangeHandler}
                value="25"
              />
              <CheckBox
                checked={!customTip && tip === 50}
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
                  peopleCountError
                    ? "form__input form__input-error"
                    : "form__input"
                }`}
                placeholder="0"
                type="text"
                value={peopleCount}
              />
            </div>
          </div>
        </form>

        <Result
          reset={reset}
          tipPerPerson={tipPerPerson}
          totalPerPerson={totalPerPerson}
        />
      </div>
    </ContainerWrapper>
  );
};

export default Calculator;
