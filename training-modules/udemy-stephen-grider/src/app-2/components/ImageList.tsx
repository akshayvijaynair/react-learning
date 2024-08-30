import './ImageList.css';
import ImageShow from './ImageShow';
import {Result} from "../types.ts";

interface ImageListProps  {
  images :  Result[]
}

function ImageList({ images }: ImageListProps) {
  const renderedImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });

  return <div className="image-list">{renderedImages}</div>;
}

export default ImageList;
