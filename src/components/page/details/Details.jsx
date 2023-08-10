import './details.scss'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import blogs from '../../../data/Blogs'

export const Details = () => {
    const {id} = useParams()
    const [title,setTitle] = useState('')
    const [image,setImage] = useState('')
    const [content,setContent] = useState('')
    const [author,setAuthor] = useState()

    useEffect(() => {
        const result = blogs.find((item) => item.id === parseInt(id))
        setTitle(result.title)
        setImage(result.image_url)
        setContent(result.content)
        setAuthor(result.author)
    }, [])
    useEffect
    return (
        <>
            <div className='blog-container'>
                <h2 className='title'>{title}</h2>
                <img src={image} alt={title} />
                <div className='blog-detail'>
                    <strong>Author : {author}</strong>
                    <p>{content}</p>
                </div>
            </div>
        </>
    )
}
