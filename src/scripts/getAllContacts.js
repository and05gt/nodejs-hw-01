import { readContacts } from '../utils/readContacts';

export const getAllContacts = async () => {
  const contacts = await readContacts();

  console.log(contacts);
};

getAllContacts().catch((error) => console.error(error));

console.log(await getAllContacts());
