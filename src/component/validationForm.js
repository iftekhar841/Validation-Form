import React from 'react'


const ValidationForm = (props) => {
    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <form action="">
                    <div className='input-wrapper'>
                        <label htmlFor="firstname"> First Name *</label>
                        <input type="text" name="firstname" id="firstname"  required/>
                    </div>
                    <div className='input-wrapper'>
                        <label htmlFor="lastname">Last Name *</label>
                        <input type="text" name="lastname" id="lastname" />
                    </div>
                    <div className='input-wrapper'>
                        <label htmlFor="email">E-mail *</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className='input-wrapper'>
                        <label htmlFor="dateofbirth">Date of Birth *</label>
                        <input type="date" name="dateofbirth" id="dateofbirth" />
                    </div>
                    <div className='input-wrapper'>
                        <label htmlFor="street1">street 1</label>
                        <input type="text" name="street1" id="street1" />
                    </div>
                    <div className='input-wrapper'>
                        <label htmlFor="street2">street 2</label>
                        <input type="text" name="street2" id="street2" />
                    </div>
                    <div className='input-checkbox'>
                        <input type="checkbox" />
                        <p>Same as Residential Address</p>
                    </div>
                    <div className='input-wrapper'>
                        <div className='permanent-address'>Permanent Address</div>
                        <label htmlFor="street1">Street 1</label>
                        <input type="text" name="street1" id="street1" />
                    </div>
                    <div className='input-wrapper street'>
                        <label htmlFor="street2">Street 2</label>
                        <input type="text" name="street2" id="street2" />
                    </div>
                    <div className='paragraph'>
                        Upload Documents 
                    </div>


                    <div className='input-wrapper field'>
                        <label htmlFor="filename">File Name</label>
                        <input type="text" name="filename" id="filename"/>
                    </div>
                    <div className='input-wrapper field '>
                        <label htmlFor="typeoffile">Type of File</label>
                        <input type="text" name="typeoffile" id="typeoffile"/>
                    </div>
                    <div className='input-wrapper field'>
                        <label htmlFor="uploaddocument">Upload Document</label>
                        <input type="file" name="uploaddocument" id="uploaddocument"/>
                    </div>
                    <div className='input-wrapper field'>
                        <label htmlFor="filename">File Name</label>
                        <input type="text" name="filename" id="filename"/>
                    </div>
                    <div className='input-wrapper field'>
                        <label htmlFor="typeoffile">Type of File</label>
                        <input type="text" name="typeoffile" id="typeoffile"/>
                    </div>
                    <div className='input-wrapper field'>
                        <label htmlFor="uploaddocument">Upload Document</label>
                        <input type="file" name="uploaddocument" id="uploaddocument"/>
                    </div>
                    <div className='btn-button'>
                     <button> Submit</button>
                    </div> 
                </form>
            </div>
        </>
    )
}

export default ValidationForm