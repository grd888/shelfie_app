import { createContext, useState } from "react";
import { account } from "../lib/appwrite";
import { ID } from "react-native-appwrite";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    async function login(email, password) {
        try {
            await account.createEmailPasswordSession(email, password);
            const response = await account.get();
            setUser(response);
        } catch (error) {
            throw Error(error.message); // Re-throw the error so it can be caught by the component
        }
    }

    async function register(email, password) {
        try {
            await account.create(ID.unique(), email, password);
            await login(email, password);
        } catch (error) {
            throw Error(error.message); // Re-throw the error so it can be caught by the component
        }
    }

    async function logout() {
        try {
            await account.deleteSession("current");
            setUser(null);
        } catch (error) {
            throw Error(error.message); // Re-throw the error so it can be caught by the component
        }
    }

    return (
        <UserContext.Provider value={{ user, setUser, login, register, logout }}>
            {children}
        </UserContext.Provider>
    );
};