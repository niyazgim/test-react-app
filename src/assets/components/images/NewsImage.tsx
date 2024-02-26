import { useState } from 'react';

interface Props {
  imageUrl: string | null;
  altText: string;
  isSmall?: boolean | false;
}

export default function NewsImage({ imageUrl, altText, isSmall }: Props) {
  const [imageError, setImageError] = useState<boolean>(false);

  const [imageLoading, setImageLoading] = useState<boolean>(true);

  const onErrorHandler = () => {
    setImageError(true);
    setImageLoading(false);
  };

  const onLoadHandler = () => {
    setImageLoading(false);
  };

  return (
    <div className="w-full aspect-square">
      {!imageError && imageUrl ? (
        <>
          {imageLoading && <div className="w-full aspect-video flex flex-col gap-5 items-center justify-center"><div className="lds-ring h-5 w-5"><div></div><div></div><div></div><div></div></div></div>}
          <img
            className={imageLoading ? "hidden" : "w-full aspect-video rounded"}
            src={imageUrl}
            alt={altText}
            onError={onErrorHandler}
            onLoad={onLoadHandler}
          />
        </>
      ) : (
        <div className="w-full aspect-video border border-gray-900 rounded flex flex-col gap-5 items-center justify-center">
          <svg className={`${isSmall ? `h-1/2` : `h-1/4`}`} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.37061 21.9932C4.82061 21.9932 4.34977 21.7973 3.95811 21.4057C3.56644 21.014 3.37061 20.5432 3.37061 19.9932V5.99316C3.37061 5.44316 3.56644 4.97233 3.95811 4.58066C4.34977 4.189 4.82061 3.99316 5.37061 3.99316H8.37061L12.3706 -0.00683594L16.3706 3.99316H19.3706C19.9206 3.99316 20.3914 4.189 20.7831 4.58066C21.1748 4.97233 21.3706 5.44316 21.3706 5.99316V19.9932C21.3706 20.5432 21.1748 21.014 20.7831 21.4057C20.3914 21.7973 19.9206 21.9932 19.3706 21.9932H5.37061ZM5.37061 19.9932H19.3706V5.99316H5.37061V19.9932ZM6.37061 17.9932H18.3706L14.6206 12.9932L11.6206 16.9932L9.37061 13.9932L6.37061 17.9932ZM10.4706 3.99316H14.2706L12.3706 2.09316L10.4706 3.99316Z" fill="white" />
          </svg>
          {isSmall ? null : (<span className='text-sm text-center'>Изображение отсутствует</span>)}
        </div>
      )}
    </div>
  );
}