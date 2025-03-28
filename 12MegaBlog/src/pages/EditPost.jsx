import React, {useState, useEffect} from 'react'
import {Container, PostForm} from '../components'
import appwriteService from '../appwrite/config'
import {useParams, useNavigate} from 'react-router'


function EditPost() {
    const [post, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
       if(slug) {
        appwriteService.getPost(slug).then((post) => {
            if (post) {
                setPosts(post)
            } else {
                navigate('/')
            }
        })
       }
    }, [slug, navigate])
  return post? (
    <Container>
        <PostForm post={post} />
    </Container>
  ): null
}

export default EditPost
