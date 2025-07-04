import React, { useEffect, useState } from 'react'
import service from '../appwrite/config'
import { Button, Container, PostCard } from '../components'
import { useNavigate } from 'react-router'

const Home = () => {
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()
    useEffect(() => {
        service.getPosts().then((posts) => {
            if (posts && posts.documents) {
                setPosts(posts.documents)
            }
            setIsLoading(false)
        }).catch((error) => {
            console.log("Appwrite Service :: getPosts :: error", error);
        })
    }, [])

    if (!isLoading && posts.length === 0) {
        return (
            <div className='w-full py-8 mt-4 text-center'>
                <Container>
                    <h1 className='text-2xl font-bold'>
                        No Posts Available, be the first to write a blog!
                    </h1>
                     <Button className='mt-5 cursor-pointer' onClick={() => navigate("/add-post")}>Add Post</Button>
                </Container>
            </div>
        )
    }

    return isLoading ? (<div className='w-full py-8 mt-4 text-center'>
        <Container>
            <div className='flex flex-wrap'>
                <div className='p-2 w-full'>
                    <h1 className='text-2xl font-bold hover:text-gray-500'>
                        Loading......
                    </h1>
                </div>
            </div>
        </Container>
    </div>) : (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts?.map((post) => (
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