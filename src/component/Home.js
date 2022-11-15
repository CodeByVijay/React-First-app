import { Button } from '@mui/material';
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate([])
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const blogs = localStorage.getItem('blogs')
        setBlogs(JSON.parse(blogs))
    }, []);
    const handleDelete = (index) => {
        console.log(index)
    }
    return (

        <div className='container'>
            <br />
            <Button onClick={(e) => { navigate('/add') }} className='btn btn-primary'>Add</Button>
            <br /><br />
            {

                blogs && blogs.length > 0 ?
                    blogs.map((blog, index) => {
                        return (
                            <div>
                                Title: {
                                    blog.title
                                }
                                <br />
                                Description : {
                                    blog.desc
                                }
                                <br />
                                Delete : {
                                    <Button onClick={(e) => handleDelete(index)} className='btn btn-danger'>Del</Button>
                                }
                                <br />
                                <br />
                            </div>
                        )
                    })
                    : 'No data Found'
            }
        </div>
    )
}

export default Home
