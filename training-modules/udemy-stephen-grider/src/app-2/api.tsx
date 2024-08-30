import axios from "axios";
import {Result, Root} from "./types.ts";

const searchImages = async (term: string) => {
  const response = await axios.get<Root>('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID 8O50V7bNzfKdVixwS9W9nZVdr0VnrCv9gmeimfdvp6Y',
    },
    params: {
      query: term,
    },
  });

  return response.data.results as Result[];
};

export default searchImages;
