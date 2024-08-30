import {Result} from "../types.ts";

interface ImageShowProps {
    image: Result
}

function ImageShow({ image }: ImageShowProps) {
  return (
    <div>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
}

export default ImageShow;
