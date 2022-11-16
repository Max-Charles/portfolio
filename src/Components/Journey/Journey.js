import React from "react";
import { useSprings, animated as a } from "react-spring";

const data = [
  {
    id: 1,
    from: { display: "hide" },
    to: [{ display: "display" }, { display: "hide" }],

    text: "Hello World",
  },
  {
    id: 2,
    from: { scale: 1 },
    to: [{ scale: 5 }, { scale: 1 }],
    // delay: 2000,
    text: "Nice to meet you",
    config: { mass: 1 },
  },
];

function Journey(props) {
  const isFlipped = props.isFlipped;

  const spring = useSprings(
    data.length,
    data.map(({ id, ...from }) => from)
  );

  return (
    <div className="journey">
      {isFlipped
        ? spring.map((spring, index) => (
            <a.div key={data[index].id} style={{ ...spring }}>
              {data[index].text}
            </a.div>
          ))
        : null}
      <div className="journey__section">
        {/* <p>
          After graduating from university I wasn't quite sure what path to go
          down.
        </p>
        <p>
          I ended up starting an e-commerce business on Amazon, which was
          sucessful.
        </p>
        <p>
          I then founded my first Tech Startup, working on a food based social
          media application. This was less successful. But I learnt a lot!
        </p> */}
      </div>
    </div>
  );
}

export default Journey;
