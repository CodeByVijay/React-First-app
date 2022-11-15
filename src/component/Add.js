import React from 'react'
import { Button, TextField, Typography } from '@mui/material'
import { useState } from 'react';
import {useNavigate } from 'react-router-dom';

function Add() {
    const navigate = useNavigate([])
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [id, setId] = useState(1);
    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleIdChange = (e) => {
        setId(e.target.value)
       
    }

    const handleDescChange = (e) => {
        setDesc(e.target.value)
    }
    const handleSubmit = (e) =>{
        console.log({title,desc})
        const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
        
        localStorage.setItem('blogs',JSON.stringify([...blogs,{title,desc}]))
        
        navigate('/')
    }
    return (
        <div className='container'>
            <Typography> Add User</Typography>
            <TextField type="hidden" label="Title" onChange={(e)=>handleIdChange(e)} value={id} variant="standard" /> <br />
            <TextField label="Title" onChange={(e)=>handleTitleChange(e)} value={title} variant="standard" /> <br />
            <TextField label="Description" onChange={(e)=>handleDescChange(e)} value={desc} variant="standard" /> <br /> <br />
            <Button onClick={(e)=> handleSubmit(e)} className="btn btn-success">Save</Button>
        </div>
    )
}

export default Add
