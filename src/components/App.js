import { Toaster } from "react-hot-toast";
import { GlobalStyle } from "../Base/BaseStyle";

import ContactForm from "./Form";
import Section from "./Section";
import Contacts from "./Contacts";
import Filter from "./Filter";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Section title="PhoneBook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <Contacts />
      </Section>
      <Toaster />
    </>
  );
};

export default App;
