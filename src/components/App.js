import React, { useState, useEffect } from "react";

function App() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>Random Dog Image</h1>
            {data && <img src={data.message} alt="A Random Dog" />}
        </div>
    );
}

export default App;

