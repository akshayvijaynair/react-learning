import { useState } from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import searchImages from './api';
import {Result} from "./types.ts";

function App_2() {
  const [images, setImages] = useState<Result[]>([]);

  const handleSubmit = async (term: string) => {
    const result: Result[] = await searchImages(term);

    setImages(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App_2;
