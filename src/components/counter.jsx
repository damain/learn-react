import Tip from "../Tip";

function Counter() {
  return (
    <div>
      <Tip>we should use state to store the number </Tip>
      <div>Number goes here:</div>
      <hr />
      <Tip>What does the button need to do to trigger the state change?</Tip>
      <div>Button goes here:</div>
    </div>
  );
}

export default Counter;
