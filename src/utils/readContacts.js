import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'node:fs';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    if (!data) return [];
    const parseData = JSON.parse(data);
    if (!Array.isArray(parseData)) return [];
    return parseData;
  } catch (error) {
    console.error('Помилка читання файлу:', error);
    return [];
  }
};
