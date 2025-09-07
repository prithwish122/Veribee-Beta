'use client';

import { Button } from "@/components/ui/button"; // or any button you use
import { useOCAuth } from "@opencampus/ocid-connect-js";

export default function AuthButton() {
  const { isInitialized, authState, ocAuth } = useOCAuth();

  if (!isInitialized) {
    return <Button disabled>Loading...</Button>;
  }

  if (authState.error) {
    return <Button variant="destructive">Error</Button>;
  }

  if (authState.isAuthenticated) {
    return (
      <Button
        variant="outline"
        onClick={async () => {
          try {
            await ocAuth.signOut();
          } catch (err) {
            console.error("Logout failed:", err);
          }
        }}
      >
        Logout
      </Button>
    );
  }

  return (
    <Button
      onClick={async () => {
        try {
          await ocAuth.signIn();
        } catch (err) {
          console.error("Login failed:", err);
        }
      }}
    >
      Login
    </Button>
  );
}
