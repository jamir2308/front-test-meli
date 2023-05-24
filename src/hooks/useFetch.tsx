import { useState, useEffect } from 'react';

const useFetch = (path: string, setData: any) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = () => {
            fetch('http://localhost:5000' + path, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(result => {
                if(!result.ok){
                    throw new Error("Error obteniendo la informacion")
                }
               return result.json();
            }).then(response => {
                setData(response);
                setLoading(false);
            }).catch(error => {
                setError(error);
                setLoading(false);
            });
        };
        fetchData();

    }, [path]);

    return { loading, error };
};

export default useFetch;