import { useState } from 'react';
import './styles.css';

export default function App() {
  return <Calculator />;
}

function Calculator() {
  const [sumBill, setSumBill] = useState(0);
  const [myPercents, setMyPercents] = useState(0);
  const [frPercents, setFrPercents] = useState(0);

  // const [allPercents, setAllPersents] = useState([]);

  // function handleCahnge(obj) {
  //   setAllPersents((ps) =>
  //     ps.map((p) =>
  //       obj.id === p.id
  //         ? {
  //             ...p,
  //             value: obj.value,
  //           }
  //         : {
  //             value: obj.value,
  //             id: obj.id,
  //           }
  //     )
  //   );
  // }

  function handleCahnge(value, id) {
    id === 1 ? setMyPercents(value) : setFrPercents(value);
  }

  function reset() {
    setSumBill(0);
    setMyPercents(0);
    setFrPercents(0);
  }

  const percents = ((myPercents + frPercents) / 100) * sumBill;
  const total = sumBill + percents;

  return (
    <div>
      <p>
        How much was the bill?
        <input
          value={sumBill}
          onChange={(e) => setSumBill(+e.target.value)}
          type='textarea'
        ></input>
      </p>
      <Percentage id={1} onHandleChange={handleCahnge} perc={myPercents}>
        How did you like the service?
      </Percentage>
      <Percentage id={2} onHandleChange={handleCahnge} perc={frPercents}>
        How did your friend like the service?
      </Percentage>
      {sumBill !== 0 && (
        <>
          <h3>
            You pay ${total} (${sumBill} + ${percents})
          </h3>

          <button onClick={reset}>Reset</button>
        </>
      )}
    </div>
  );
}

function Percentage({ children, perc, onHandleChange, id }) {
  return (
    <>
      <p>
        {children}
        <select
          value={perc}
          onChange={(e) => onHandleChange(+e.target.value, id)}
        >
          <option value={0}>Dissatisfied (0%)</option>
          <option value={5}>It was okay (5%)</option>
          <option value={10}>It was good (10%)</option>
          <option value={20}>Absolutely amazing! (20%)</option>
        </select>
      </p>
    </>
  );
}
