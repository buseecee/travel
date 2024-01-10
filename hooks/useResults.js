import React, { useState, useEffect } from "react";
import yelp from "../src/screens/api/YelpAPI";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, seterrorMessage] = useState("");
    console.log("Rendering HomeScreen");

    const searchApi = async () => {
        console.log("hi there");
        try {
            const response = await YelpAPI.get("/search", {
                params: {
                    limit: 50,
                    term,
                    location: "Istanbul",
                },
            });
            setResults(response.data.business);
        } catch (err) {
            seterrorMessage("Something went wrong");
        }
    }

    useEffect(()=>{
        searchApi("pasta");
    }, []);

    return [searchApi, results, errorMessage];
}