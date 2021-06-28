import React, { useEffect, ReactElement } from "react";
import "./App.css";
import { fetchDefault } from "./api";
import { styled } from "tsstyled";

function App() {
  useEffect(() => {
    fetchDefault();
  }, []);
  return (
    <div className="App">
      <StyledBase />
    </div>
  );
}
const Base = (props: { className?: string }): ReactElement => {
  return <div className={props.className}>Foo</div>;
};
const StyledBase = styled(Base)`
  color: red;
`;
export default App;
