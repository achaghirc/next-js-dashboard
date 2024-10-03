'use client';
import React, { useEffect } from 'react'

type ErrorType = {
    error: Error & {digest?: string};
    reset: () => void;
}

export default function Error({error, reset} : ErrorType) {

	useEffect(() => {
		console.error(error);
	}), [error];


  return (
    <main className='flex h-full flex-col items-center justify-center'>
			<h2 className='text-center text-md'>
				Something went wrong!
			</h2>
			<button 
				className='mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400'
				onClick={() => reset()}
			>
				Try again
			</button>
		
		</main>
  )
}
