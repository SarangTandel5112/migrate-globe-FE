import { API_URL } from "@/constants";

export const authenticateWithToken = async (token: string) => {
  try {
    const response = await fetch(`${API_URL}token-auth/authenticate?token=${token}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result?.error?.message || "Authentication failed");
    }

    return result;
  } catch (error) {
    console.error("Error authenticating with token:", error);
    throw error;
  }
};
