import { useEffect, useState } from "react";
import { data } from "../Constants";

const Carousal = () => {
  const [action, setAction] = useState(0);

  const handlePrev = () => {
    setAction(!action ? data.length - 1 : action - 1);
  };

  const handleNext = () => {
    setAction((action + 1) % data.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [action]);

  return (
    <div>
      <div>List</div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button
          onClick={() => {
            handlePrev();
          }}
        >
          Prev
        </button>
        {data &&
          data.map((url, i) => (
            <img
              src={url}
              style={{
                width: "300px",
                height: "300px",
                objectFit: "cover",
                display: action === i ? "block" : "none",
              }}
              alt="wallpaper"
              key={i}
            />
          ))}
        <button
          onClick={() => {
            handleNext();
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousal;
