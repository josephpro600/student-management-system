
const API_URL = import.meta.env.VITE_API_BASE_URL;

export async function checkBackendHealth() {
  try {
    const response = await fetch(`${API_URL}/health`);
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Backend request failed");
    }

    return result;
  } catch (error) {
    throw new Error(error.message || "Unable to connect to backend");
  }
}
