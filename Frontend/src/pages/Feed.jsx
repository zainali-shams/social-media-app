import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'



const Feed = () => {
    const navigate = useNavigate()

    const [posts, setPosts] = useState([
        {
            _id: "1",
            image: "https://imgs.search.brave.com/6H8jH78_njc5yzE4HN-8hT_aCGkrIuAEqhkwLnPTQGE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2UyL2Vh/L2M0L2UyZWFjNDcw/OGNkYWNkNGZlMTA0/ZDNhMGVhMmUwNDBl/LmpwZw",
            caption: "Beautyfull photo"
        }
    ])

    useEffect(() => {
        axios.get("http://localhost:3000/posts")
            .then((res) => {
                setPosts(res.data.posts)
            })
    }, [])

    return (<>



        <section className='feed-section'>

            {
                posts.length > 0 ? (
                    posts.map((post) => (
                        <div key={post._id}
                            className='post-card'>
                            <img src={post.image}
                                alt={post.caption} />
                            <p>{post.caption}</p>
                        </div>
                    ))
                ) : (
                    <h1>No Post Available</h1>
                )
            }

        </section>
    </>
    )


}

export default Feed
