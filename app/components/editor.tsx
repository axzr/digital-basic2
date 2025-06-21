import { useState } from "react";
import { HighlightWithinTextarea } from "react-highlight-within-textarea";
import { spellCheck } from "~/helpers/spellCheck";

const Editor = () => {
  const [value, setValue] = useState(
    "Mary had a little lamb, its fleece was white as snow"
  );
  const onChange = (value: string) => setValue(value);

  return (
    <div className="bg-white text-lg p-4 rounded-lg shadow-md max-w-md mx-auto">
      <HighlightWithinTextarea
        value={value}
        highlight={spellCheck}
        onChange={onChange}
      />
    </div>
  );
};

export default Editor;
