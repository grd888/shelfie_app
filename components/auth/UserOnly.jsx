import { useEffect } from "react";
import { useUser } from "../../hooks/useUser";
import { useRouter } from "expo-router";
import ThemedLoader from "../ThemedLoader";

const UserOnly = ({ children }) => {
  const { user, authChecked } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (authChecked && !user) {
      router.replace("/login");
    }
  }, [user, authChecked, router]);

  if (!authChecked || !user) {
    return <ThemedLoader />;
  }

  return children;
};

export default UserOnly;