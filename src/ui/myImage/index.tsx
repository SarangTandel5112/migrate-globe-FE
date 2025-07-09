'use client';
import React, { useEffect, useState } from 'react';
import Image, { StaticImageData, ImageProps } from 'next/image';

type MyImageSource = string | StaticImageData;
type NumericString = `${number}`;
type ValidSize = number | NumericString;

interface MyImageProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: MyImageSource;
  alt: string;
  width?: ValidSize;
  height?: ValidSize;
  className?: string;
  errorSrc?: MyImageSource;
}

const MyImage: React.FC<MyImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  errorSrc,
  ...rest
}) => {
  const [url, setUrl] = useState<MyImageSource>(src);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setUrl(src);
    setHasError(false);
  }, [src]);

  // Ensure width and height are provided, use defaults if not specified
  const finalWidth = width || 100;
  const finalHeight = height || 100;

  // If there's an error and no errorSrc provided, show a placeholder div
  if (hasError && !errorSrc) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center text-gray-400 text-sm ${className}`}
        style={{ width: finalWidth, height: finalHeight }}
      >
        Image not found
      </div>
    );
  }

  return (
    <Image
      src={url}
      alt={alt}
      width={finalWidth}
      height={finalHeight}
      className={className}
      {...rest}
      onError={(e) => {
        if (errorSrc && !hasError) {
          setUrl(errorSrc);
          setHasError(true);
        } else {
          setHasError(true);
        }
        if (typeof rest.onError === 'function') {
          rest.onError(e);
        }
      }}
    />
  );
};

export default React.memo(MyImage);
