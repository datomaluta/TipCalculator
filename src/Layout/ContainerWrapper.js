import "./ContainerWrapper.scss";

const ContainerWrapper = (props) => {
  return <div className="container">{props.children}</div>;
};

export default ContainerWrapper;
