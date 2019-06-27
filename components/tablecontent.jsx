import React, { useState, useEffect } from 'react';
import axios from "axios";

export default () => {

    const [content, setContent] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                console.log(res.data);
                setContent(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    return (
        <>
            <table className="container-fluid table table-dark table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>Street</th>
                        <th>Zip-Code</th>
                        <th>Company</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        content.map((elem, i) => {
                            return (
                                <tr key={elem.id}>
                                    <td>{elem.id}</td>
                                    <td>{elem.name}</td>
                                    <td>{elem.email}</td>
                                    <td>{elem.address.city}</td>
                                    <td>{elem.address.street}</td>
                                    <td>{elem.website}</td>
                                    <td>{elem.company.name}</td>
                                    <td>{elem.website}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </>
    );
};