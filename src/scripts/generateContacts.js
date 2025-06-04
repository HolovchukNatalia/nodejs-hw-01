import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { promises as fs } from 'node:fs';

const generateContacts = async (number) => {
  try {
    const existingContacts = await readContacts();
    const newContact = [];

    for (let i = 0; i < number; i++) {
      newContact.push(createFakeContact());
    }
    const updatedContacts = [...existingContacts, ...newContact];
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));
  } catch (error) {
    console.log(error);
  }
};

generateContacts(5);
