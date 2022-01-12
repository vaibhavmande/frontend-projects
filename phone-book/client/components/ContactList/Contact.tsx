import React from "react";

type Props = {
  name: string;
};

const Contact = ({ name }: Props) => {
  return (
    <ul>
      <li>{name}</li>
    </ul>
  );
};

export default Contact;
