'use client' // Error component must be Client-side rendered

import React, { useEffect } from 'react'

type Props = {
  error: Error,
  reset: () => void
}

const Error: React.FC<Props> = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error])

  return (
    <div>
      <h1>Something went wrong.</h1>
      <button onClick={
        () => {
          reset()
        }
      }>Try again</button>
    </div>
  )

}

export default Error
