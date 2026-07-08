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
      size: JSON.stringify(response.data).length,
    };
  } catch (error) {
    const end = performance.now();

    return {
      success: false,
      error: error.message,
      time: Math.round(end - start),
    };
  }
};