import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'node:fs';

export const writeContacts = async (updatedContacts) => {
  const data = JSON.stringify(updatedContacts, null, 2);
  try {
    await fs.writeFile(PATH_DB, data, 'utf-8');
    return updatedContacts;
  } catch (error) {
    console.error('Помилка читання файлу:', error);
  }
};
