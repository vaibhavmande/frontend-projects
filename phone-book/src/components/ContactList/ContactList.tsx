import { Contact as ContactType } from "./Contact.types";
import Contact from "./Contact";
import { FixedSizeList } from "react-window";
import "./ContactList.css";

type Props = {
  users: ContactType[];
  loading: boolean;
};

// Try once without windowing, with the Contact component, without using a big store
// it might speed up the rendering
const ContactList = ({ users, loading }: Props) => {
  const Row = (props: any) => {
    const item = users[props.index];

    return <Contact name={item.name} />;
  };

  return (
    <ul>
      {loading
        ? "Loading..."
        : users?.map((user) => (
            <FixedSizeList
              itemCount={users.length}
              itemSize={10}
              height={50}
              width="100%"
            >
              {Row}
            </FixedSizeList>
          ))}
    </ul>
  );
};

export default ContactList;
