import { useState, useEffect } from "react"


function Relogio() {

    const [hora, setHora] = useState(new Date().toLocaleDateString());
    useEffect(() => {
        const interval = setInterval(() => {
            setHora(new Date().toLocaleString());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <h2>Relogio Digital</h2>
            <p>{hora}</p>
        </>
    )

}

export default Relogio