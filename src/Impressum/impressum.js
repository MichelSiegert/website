import './impressum.css'

import React from 'react';

function Impressum(){
    return(
        <div id="impressum" className='pl-10 max-w-full'>
            <div className="text-3xl pb-5">Impressum </div>
            <div className='impressumItems text-lg'> 
                    <div className='impressumColumn'>
                        <div>Website Owner / Operator:</div>
                        <div>Name: Michel Siegert</div>
                        <div>Contact Information</div>
                    </div>
                    <div className='impressumColumn'>
                        <div>Address:</div>
                        <div>Waisenhofstraße 27</div>
                        <div>24103 Kiel </div>
                        <div> Germany</div>
                    </div>
                   
                    <div className="impressumColumn">
                        <div> Email: Michel@Siegert.online</div>
                        <div>Phone: +49 177 87 207 96</div>
                    </div>
                    <div className='max-w-52 impressumColumn'> Content Responsible in accordance with § 18 (2) MStV: Michel Siegert, Waisenhofstraße 27, 24103 Kiel.</div>
                </div>
            </div>
    );
}

export default Impressum   