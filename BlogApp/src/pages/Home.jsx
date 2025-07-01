import React, { useEffect, useState } from 'react'
import service from '../appwrite/config'
import { Button, Container, PostCard } from '../components'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

const Home = () => {
    const [posts, setPosts] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        service.getPosts().then((posts) => {
            if(posts && posts.length > 0) {
                setPosts(posts)
            }
        })
    }, [])

    if(posts.length <= 0) {
        return (
            <div className='w-full py-8 mt-4 text-center'>
                <Container>
                    <div className='flex flex-wrap'>
                        <div className='p-2 w-full'>
                            <h1 className='text-2xl font-bold hover:text-gray-500'>
                                No Posts Available, be the first to write a blog!
                            </h1>
                            <button onClick={() => navigate("/add-post")}>Add post</button>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home