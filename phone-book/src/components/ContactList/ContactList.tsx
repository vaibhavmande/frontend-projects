import { Contact as ContactType } from "./Contact.types";
import Contact from "./Contact";
import { FixedSizeList } from "react-window";
import "./ContactList.css";

type Props = {
  users: ContactType[];
  loading: boolean;
};

const Skeleton = ({ ...props }) => {
  return <div {...props}></div>;
};

const ContactList = ({ users, loading }: Props) => {
  return (
    <ul>
      {loading ? (
        "Loading..."
      ) : (
        <FixedSizeList
          itemCount={users.length}
          itemSize={20}
          height={500}
          width="100%"
          useIsScrolling={true}
        >
          {({ index, style, isScrolling }) => {
            return (
              <div style={style}>
                {isScrolling ? (
                  <Skeleton style={style} />
                ) : (
                  <div style={style}>
                    <Contact name={users[index].name} />
                  </div>
                )}
              </div>
            );
          }}
        </FixedSizeList>
      )}
    </ul>
  );
};

export default ContactList;
