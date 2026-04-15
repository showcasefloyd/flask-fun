import * as React from 'react';

function Hello() {

    const [message ,setMessage] = React.useState("Is this thing on?");

    React.useEffect(()=>{
        fetch('/api/hello')
            .then(response => response.json())
            .then(data => setMessage(data.message))
            .catch(error => console.error('Error fetching message:', error));
    }, [])

    return <h1>{message}</h1>;
}


export default Hello;