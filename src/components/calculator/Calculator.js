import ContainerWrapper from "../../Layout/ContainerWrapper";
import Result from "../result/Result";
import { useEffect, useState } from "react";
import Form from "../form/Form";

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
      const tipAmount = +bill * (+tip / 100);
      console.log(tipAmount / +peopleCount);
      console.log((tipAmount + +bill) / +peopleCount);
      setTipPerPerson(tipAmount / +peopleCount);
      setTotalPerPerson((tipAmount + +bill) / +peopleCount);
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
      setBill(event.target.value);
    }
  };

  const tipChangeHandler = (event) => {
    setTip(event.target.value);
  };

  const customTipChangeHandler = (event) => {
    if (isNaN(+event.target.value)) {
      return;
    } else {
      setTip(event.target.value);
      setCustomTip(event.target.value);
    }
  };

  const peopleCountChangeHandler = (event) => {
    if (isNaN(+event.target.value)) {
      return;
    } else {
      if (event.target.value === "0") {
        setPeopleCountError(true);
      } else {
        setPeopleCount(event.target.value);
        setPeopleCountError(false);
      }
    }
  };

  return (
    <ContainerWrapper>
      <Form
        billChangeHandler={billChangeHandler}
        tipChangeHandler={tipChangeHandler}
        customTipChangeHandler={customTipChangeHandler}
        peopleCountChangeHandler={peopleCountChangeHandler}
        bill={bill}
        tip={tip}
        customTip={customTip}
        peopleCount={peopleCount}
        peopleCountError={peopleCountError}
      />
      <Result
        reset={reset}
        tipPerPerson={tipPerPerson}
        totalPerPerson={totalPerPerson}
      />
    </ContainerWrapper>
  );
};

export default Calculator;
