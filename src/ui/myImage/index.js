'use client'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'

/**
 * MyImage component
 * @param {Object} props - Component props
 * @param {string|object} props.src - Source URL or object for the image
 * @param {string} props.alt - Alternative text for the image
 * @param {string} props.errorSrc - Source URL or object to use when the image fails to load
 * @param {string} props.className - Additional CSS classes for the image
 * @returns {React.ReactElement} Image component
 */
function MyImage({ src, className, alt, height, width, errorSrc, ...rest }) {
  const [url, setUrl] = useState(src)

  useEffect(() => {
    setUrl(src)
  }, [src])

  return (
    <Image
      src={url}
      alt={alt}
      height={height}
      width={width}
      className={`${className}`}
      {...rest}
      onError={(e) => {
        setUrl(errorSrc)
        if (typeof rest?.onError === 'function') rest.onError(e)
      }}
    />
  )
}

MyImage.defaultProps = {
  src: '',
  errorSrc: 'defaultErrorImage.png'
}

MyImage.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  errorSrc: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  alt: PropTypes.string,
  className: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

MyImage.defaultProps = {
  src: ''
}

export default React.memo(MyImage)
