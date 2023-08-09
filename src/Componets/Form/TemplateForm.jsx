import React from 'react'
import FormPic from './FormPic'
import FormInput from './FormInput'

function TemplateForm() {
    return (
        <div className='p-4 md:p-16  bg-transparent'>
            <div className='bg-slate-100 flex flex-col md:flex-row rounded-lg'>
                <FormPic />
                <FormInput />
            </div>
        </div>
    )
}

export default TemplateForm
