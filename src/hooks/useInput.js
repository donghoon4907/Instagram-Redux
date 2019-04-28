import { useState } from "react";
export default function(defaultValue) {
  const [value, setValue] = useState(defaultValue);
  const onChange = e => {
    const {
      target: { value }
    } = e;
    setValue(value);
  };
  return { value, onChange, setValue };
}
