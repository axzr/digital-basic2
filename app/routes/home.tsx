import { useState } from "react";
import { HighlightWithinTextarea } from "react-highlight-within-textarea";

export function meta() {
  return [{ title: "Basic English Spellchecker" }];
}

const Home = () => {
  const [value, setValue] = useState("X Y Z and then XYZ");
  const onChange = (value: string) => setValue(value);

  return (
    <HighlightWithinTextarea
      value={value}
      highlight={/[XYZ]/g}
      onChange={onChange}
    />
  );
};

export default Home;
