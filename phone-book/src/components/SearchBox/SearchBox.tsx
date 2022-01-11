import { ChangeEventHandler } from "react";
import "./SearchBox.css";

type Props = {
  onChange: ChangeEventHandler;
};

const SearchBox = ({ onChange }: Props) => {
  return (
    <>
      <input
        onChange={onChange}
        type="text"
        className="search"
        placeholder="Search users"
      />
    </>
  );
};

export default SearchBox;
