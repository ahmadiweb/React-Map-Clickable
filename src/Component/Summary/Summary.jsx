import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Summary({ body, transaction }) {
    return (
        <div className="mx-2">
            <p>
                {transaction ? <Skeleton count={10} /> : body}
            </p>
        </div>

    )
}
