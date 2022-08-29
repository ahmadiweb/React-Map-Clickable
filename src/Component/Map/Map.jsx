import React from 'react'
import ImageMapper from 'react-image-mapper';
import worldImg from './world-map.jpg'
import world from './coords.json'


export default function Map({ handleSelect }) {
    return (
        <>
            <ImageMapper
                onClick={(e) => handleSelect(e.name)}
                src={worldImg}
                map={world}
                lineWidth={2}
                strokeColor={"blue"}
                width={800}
                imgWidth={1000}
            />


        </>
    )
}
