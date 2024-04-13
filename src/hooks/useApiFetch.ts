import { useState, useEffect, useCallback } from 'react';

function useApiFetch(promise: () => Promise<any>) {
  
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<any>(null);

    const refresh = useCallback(async () => {
        setLoading(true);
        promise()
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, [promise]);

    useEffect(() => {
        refresh(); // Call refresh when the component mounts
    }, [refresh]);
  
    return { data, loading, error, refresh };
}

export default useApiFetch;