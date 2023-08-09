import React from 'react'
import Hotgirl from './Hotgirl.jpg'

function FormPic() {
    return (
        <div>
            <div className='w-full md:w-[700px]'>
                <img src={Hotgirl} alt="HotGirls_image" className='w-full h-full rounded-none md:rounded-l-lg' />
            </div>

        </div>
    )
}

export default FormPic
