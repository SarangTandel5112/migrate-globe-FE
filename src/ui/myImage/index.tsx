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
  errorSrc = '/defaultErrorImage.png',
  ...rest
}) => {
  const [url, setUrl] = useState<MyImageSource>(src);

  useEffect(() => {
    setUrl(src);
  }, [src]);

  return (
    <Image
      src={url}
      alt={alt}
      width={width}
      height={height}
      className={className}
      {...rest}
      onError={(e) => {
        setUrl(errorSrc);
        if (typeof rest.onError === 'function') {
          rest.onError(e);
        }
      }}
    />
  );
};

export default React.memo(MyImage);
