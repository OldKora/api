import * as React from 'react'

const AboutPage = (props: {pageTitle: string, text: string}) => {
    console.log(props);
    return(
        <>
            <h2>{props?.pageTitle}</h2>
            <p>{props?.text}</p>
        </>
    )
}

export default AboutPage;