import axios from "axios";

export const sendRequest = async ({ method, url }) => {
  const start = performance.now();

  try {
    const response = await axios({
      method,
      url,
    });

    const end = performance.now();

    return {
      success: true,
      data: response.data,
      headers: response.headers,
      status: response.status,
      statusText: response.statusText,
      time: Math.round(end - start),
      size: new Blob([JSON.stringify(response.data)]).size,
    };
  } catch (error) {
    const end = performance.now();

    return {
      success: false,
      data: error.response?.data || null,
      headers: error.response?.headers || {},
      status: error.response?.status || 0,
      statusText: error.response?.statusText || "Network Error",
      error: error.message,
      time: Math.round(end - start),
      size: error.response?.data
        ? new Blob([JSON.stringify(error.response.data)]).size
        : 0,
    };
  }
};