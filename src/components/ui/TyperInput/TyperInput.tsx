import {ChangeEvent, FC} from "react";

interface TyperInputType {
  value: "",
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
}

const TyperInput: FC = ({ value, onChange }: TyperInputType) => {
  const styles = {
    input: {
      border: "1px solid white",
      backgroundColor: "#000",
      borderRadius: "3px",
      width: "300px",
      height: "40px",
      padding: "5px",
      margin: "15px 0 15px 0",
      color: "#fff",
    },
  };

  return <>
    <input type="text" value={value} onChange={onChange} style={styles.input} />
  </>;
};

export default TyperInput;