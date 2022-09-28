import React from 'react'

export default function SearchItem({result}) {
    return (
        // <Link href={`/products/${result.slug}`} passHref key={result.id}>
        <div>
        <a>
        <div className='right floated content'>
        </div>
        <div className='content'>
            <div className='header'>
                {result.title}
            </div>
        </div>
        </a>
        </div>
    )
}
