import { Client, Account, Avatars, Databases } from 'react-native-appwrite';

export const client = new Client()
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('680ec36700085c562a8c')
    .setPlatform('org.gdelgado.shelfie');

export const account = new Account(client);
export const avatars = new Avatars(client);
export const databases = new Databases(client);
