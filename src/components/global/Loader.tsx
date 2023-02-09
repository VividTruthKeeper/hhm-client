// Modules
import { CSSProperties } from "react";
import { PulseLoader } from "react-spinners";

const Loader = () => {
  const override: CSSProperties = {
    display: "block",
    margin: "10 auto",
    borderColor: "red",
    // width: "100%",
    height: "100%",
  };
  return (
    <div className="loader">
      <PulseLoader
        color={"#38a39d"}
        loading={true}
        cssOverride={override}
        aria-label="loader"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
