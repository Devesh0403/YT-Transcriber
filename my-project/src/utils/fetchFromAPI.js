import axios from 'axios';

const BASE_URL = "https://www.youtube-transcript.io/api";

const options = {
  headers: {
    'Authorization': '67ac9f0bb919add103ece586',
    'Content-Type': 'application/json'
  }
};

export const fetchFromAPI = async (endpoint, params = {}, method = "GET", bodyData = null) => {
  try {
    const config = {
      method,
      url: `${BASE_URL}/${endpoint}`,
      headers: options.headers,
      ...(method === "GET" ? { params } : { data: bodyData }),
    };

    const { data } = await axios(config);
    return data;
  } catch (error) {
    console.error("API fetch error:", error);
    return null;
  }
};

// Fetch transcript using the new API
export const fetchTranscript = async (videoId) => {
  return fetchFromAPI("transcripts", {}, "POST", { ids: [videoId] });
};
