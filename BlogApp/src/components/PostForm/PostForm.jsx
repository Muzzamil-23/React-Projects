import React, {useCallback} from 'react'
import { useForm } from 'react-hook-form'
import {Button, Input, RTE} from '../index'
import appwriteService from "../../appwrite/config"
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'

const PostForm = ({post}) => {
    const {register, handleSubmit, watch, setValue, control, getValues} = useForm({
        defaultValues: {
            title: post?.title || '',
            slug: post?.slug || '',
            content: post?.content || '',
            status: post?.status || 'active',
        }
    })

    const navigate = useNavigate()
    const userData = useSelector(state => state.auth.userData)
  return (
    <div>PostForm</div>
  )
}

export default PostForm