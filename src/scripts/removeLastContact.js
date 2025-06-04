import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const totalContacts = await readContacts();
  totalContacts.pop();
  return await writeContacts(totalContacts);
};

removeLastContact();
