
import { useEffect, useState } from 'react';

function App() {
    const [time, setTime] = useState(1);

    function Clock() {
        setTime(currentTime => currentTime + 1);
    }

    useEffect(function () {
        console.log('Clock App mounted');
        let timer = setInterval(Clock, 1000);

        // cleanup function 
        return function () {
            console.log('Clock App unmounted');
            clearInterval(timer);
        }
    }, []);
    // this effect will run on every mount of the component bcox the array is empty 

    useEffect(function () {
        console.log("clock app mounted on every render -state change" + time);
    }, [time]);


    return (
        <div>
            <h1>Clock App</h1>
            {time}
        </div>
    )
}

export default App;
