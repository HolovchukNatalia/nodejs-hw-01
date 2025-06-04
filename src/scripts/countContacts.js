import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  const totalContacts = await readContacts();
  return totalContacts.length;
};

console.log(await countContacts());
