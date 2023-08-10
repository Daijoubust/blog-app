import './blogs.scss'
import blogs from '../../../data/Blogs'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export const Blogs = () => {
    const [search,setSearch] = useState('')
    const [filterBlog, setFilterBlog] = useState([])
    useEffect(() => {
        // filtering blogs
        const searchResult = blogs.filter((item) => item.title.includes(search))
        setFilterBlog(searchResult);
    }, [search])
    return (
        <div className='page-container blogs'>
            <h2 className='title'>Blog</h2>
            <div className="searchBar">
                <input className='search-input' type="text" placeholder="Search for blogs" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            <article>
                {filterBlog.map((item) =>(
                    <Link to={`/blog/${item.id}`} key={item.id}>
                        <div className='card'>
                        <h3>{item.title}</h3>
                        <p>{item.content.substring((0,400))}</p>
                    </div>
                    </Link>
                ))}
            </article>
        </div>
    )
}