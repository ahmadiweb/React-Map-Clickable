import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Info({ data, transaction }) {
    return (

        <div className="card">
            {transaction ? <Skeleton height={148} /> : <img className="card-img-top" src={data.flag} alt="Card image cap" />}
            {transaction ?
                <Skeleton height={41} count={6} /> :
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Country: {data.countryName}</li>
                    <li className="list-group-item">Capital: {data.capital}</li>
                    <li className="list-group-item">Currency: {data.currency}</li>
                    <li className="list-group-item">Official languages: {data.officialLanguages}</li>
                    <li className="list-group-item">Population: {data.population}</li>
                    <li className="list-group-item">Area: {data.area}</li>
                </ul>
            }
        </div>

    )
}
