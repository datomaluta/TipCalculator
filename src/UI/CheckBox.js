const CheckBox = (props) => {
  return (
    <div className="form__check-wrapper">
      <input
        id={props.value}
        name="tip"
        className="form__check-input"
        type="radio"
        value={props.value}
        onChange={props.onChange}
        checked={props.checked}
      />
      <label htmlFor={props.value} className="form__check-label">
        {props.value}%
      </label>
    </div>
  );
};

export default CheckBox;
