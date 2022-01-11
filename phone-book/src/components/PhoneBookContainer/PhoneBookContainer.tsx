import React, { ChangeEvent, ChangeEventHandler, useState } from "react";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import { Contact as ContactType } from "../ContactList/Contact.types";
import "./PhoneBookContainer.css";

const PhoneBookContainer = () => {
  const [users, setUsers] = useState<ContactType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  let timer: any = null;

  // Run once on initial render
  React.useEffect(() => {
    setLoading(true);

    fetch("http://localhost:3005/users")
      .then((users) => users.json())
      .then((users) => {
        setUsers(users);
        setLoading(false);
      });
  }, []);

  const getSearchResults = async (query: string) => {
    const URL = "http://localhost:3005/users?";
    const SEARCH = URL + "q=" + query;

    const response = await fetch(SEARCH);
    const results = await response.json();

    return results as ContactType[];
  };

  const onChange: ChangeEventHandler = async (event: ChangeEvent) => {
    const input = (event.currentTarget as HTMLInputElement).value;

    clearInterval(timer);
    timer = setTimeout(() => {
      getAndSetSearchResults(input);
    }, 3000);
  };

  const getAndSetSearchResults = async (input: string) => {
    setLoading(true);
    const results = await getSearchResults(input);
    setUsers(results);
    setLoading(false);
  };

  return (
    <div className="container flex">
      <SearchBox onChange={onChange} />
      <ContactList users={users} loading={loading} />
    </div>
  );
};

export default PhoneBookContainer;
