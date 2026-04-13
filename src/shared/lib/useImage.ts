type ImageParams = {
  imageEndpointUrl: string | null | undefined;
  originalTitle: string;
  height?: number;
  width?: number;
};

export const getImageUrl = ({
  imageEndpointUrl = "mock",
  originalTitle = "original title",
  height = 450,
  width = 300,
}: ImageParams) => {
  return imageEndpointUrl
    ? `${import.meta.env.VITE_IMAGE_BASE_URL}original${imageEndpointUrl}`
    : `https://placehold.co/${width}x${height}?text=${encodeURIComponent(originalTitle)}`;
};
