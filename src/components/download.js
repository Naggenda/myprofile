import React from 'react'

const download = () => {

    const onButtonClick = () => {
        fetch('cv.pdf').then(response => {
            response.blob().then(blob => {
                // const fileURL = window.URL.creLateObjectURL(blob);

                let alink = document.createElement('a');
                // alink.href = fileURL;
                alink.download = 'cv.pdf';
                alink.click();
            })
        })
    }
    return (
        <div>
            
            <button onClick={onButtonClick} className="btn">Download Cv</button>
        
        </div>
    )
}

export default download
