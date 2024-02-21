// import classes from "./GlobalCounter.module.css";
import { useContext } from "react";
import { CounterContext, GlobalCounterContext } from "./GlobalCounterContext";

export default function GlobalCounter() {
  return (
    <CounterContext>
      <MiniCounter />
      <MiniCounter />
      <AnotherTestComponent />
    </CounterContext>
  );
}

const AnotherTestComponent = () => {
  const { currentCounter: counter } = useContext(GlobalCounterContext);
  return (
    <div>
      <span>Another component that may just display the counter...</span>
      <span>Counter: {counter}</span>
    </div>
  );
};
const MiniCounter = () => {
  const { currentCounter: counter, setCurrentCounter: setCounter } =
    useContext(GlobalCounterContext);
  return (
    <div>
      {counter}{" "}
      <button onClick={() => setCounter((counter) => counter - 1)}>-</button>
      <button onClick={() => setCounter((counter) => ++counter)}>+</button>
    </div>
  );
};
