import { createContext, useState, useEffect } from "react";
import { databases } from "../lib/appwrite";
import { ID, Permission, Role } from "react-native-appwrite";
import { useUser } from "../hooks/useUser";
import { Query } from "react-native-appwrite";

const DATABASE_ID = "6820880a00034091847d";
const COLLECTION_ID = "6820882800008e4461ff";
export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    if (user) { 
      fetchBooks();
    } else {
      setBooks([]);
    }
  }, [user]);

  async function fetchBooks() {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTION_ID,
        [
          Query.equal("userId", user.$id),
        ]
      )
      setBooks(response.documents)
      console.log(response.documents)
    } catch (error) {
      console.error(error.message);
    }
  }

  async function fetchBookById() {
    try {
    } catch (error) {
      console.error(error.message);
    }
  }

  async function createBook(data) {
    try {
      const newBook = await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        {...data, userId: user.$id},
        [Permission.read(Role.user(user.$id)),
          Permission.update(Role.user(user.$id)),
          Permission.delete(Role.user(user.$id)),
        ]
      )
    } catch (error) {
      console.error(error.message);
    }
  }

  async function deleteBook(id) {
    try {
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <BooksContext.Provider
      value={{ books, fetchBooks, fetchBookById, createBook, deleteBook }}
    >
      {children}
    </BooksContext.Provider>
  );
};
