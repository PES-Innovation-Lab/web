import React from 'react'

function Timeline({ date, title, description, alignment }) {

    const isRightAligned = alignment === 'right';

    return (
        <div className={`mb-8 flex justify-between ${isRightAligned ? 'flex-row-reverse' : 'items-center'} w-full`}>
            <div className="order-1 w-5/12"></div>
            <div className={`order-1 w-5/12 px-1 py-4 ${isRightAligned ? 'text-right' : 'text-left'}`}>
                <p className="pb-1 text-base text-lab-light-green">{date}</p>
                <h4 className="pb-1 font-bold text-lg md:text-2xl text-lab-green">{title}</h4>
                <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Timeline