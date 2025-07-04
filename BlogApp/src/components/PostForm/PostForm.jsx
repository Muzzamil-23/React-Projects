import React, { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input, RTE, Select } from '../index'
import appwriteService from "../../appwrite/config"
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PostForm = ({ post }) => {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || '',
            slug: post?.slug || '',
            content: post?.content || '',
            status: post?.status || 'active',
        }
    })

    const navigate = useNavigate()
    const userData = useSelector(state => state.userData)

    // const submit = async (data) => {
    //     if (post) {
    //         const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null

    //         if (file) {
    //             appwriteService.deleteFile(post.featuredImage)
    //         }

    //         const dbPost = await appwriteService.updatePost(post.$id, {
    //             ...data, featuredImage: file ? file.$id : undefined
    //         })

    //         if (dbPost) {
    //             navigate(`/post/${dbPost.$id}`)
    //         }
    //     } else {
    //         const file = await data.image[0] ? appwriteService.uploadFile(data.image[0]) : null

    //         if (file) {
    //             const fileID = file.$id
    //             data.featuredImage = fileID
    //             const dbPost = await appwriteService.createPost({
    //                 ...data,
    //                 userData: userData.$id

    //             })

    //             if (dbPost) {
    //                 navigate(`/post/${dbPost.$id}`)
    //             }
    //         }
    //     }
    // }

    const submit = async (data) => {
        try {
            console.log("Form data:", data); // Debug log

            if (post) {
                // UPDATE POST
                const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null

                if (file) {
                    appwriteService.deleteFile(post.featuredImage)
                }

                const dbPost = await appwriteService.updatePost(post.$id, {
                    ...data,
                    featuredImage: file ? file.$id : undefined
                })

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`)
                }
            } else {
                // CREATE NEW POST
                const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null

                if (file) {
                    const fileID = file.$id
                    data.featuredImage = fileID

                    const dbPost = await appwriteService.createPost({
                        ...data,
                        userId: userData.$id // Fixed: Changed from userData to userId
                    })

                    if (dbPost) {
                        navigate(`/post/${dbPost.$id}`)
                    }
                } else {
                    // Handle case where no image is uploaded but form is submitted
                    console.error("No image uploaded")
                    alert("Please upload a featured image")
                }
            }
        } catch (error) {
            console.error("Error submitting form:", error)
            alert("Error submitting form: " + error.message)
        }
    }

    const slugTransform = useCallback((value) => {
        if (value && typeof value === 'string') {
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-z0-9\s-]/g, '')
                .replace(/\s+/g, '-')
                .replace(/-+/g, '-');
        }
        return ''
    }, [])

    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === 'title') setValue('slug', slugTransform(value.title, { shouldValidate: true }))
        })

        return () => {
            subscription.unsubscribe()
        }
    }, [watch, slugTransform, setValue])

    return (
        <form onSubmit={handleSubmit(submit)} className='flex flex-wrap'>
            <div className='w-2/3 px-2'>
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true })
                    }}
                // {...register("slug", {
                //     required: true,
                //     onChange: (e) => {
                //         setValue("slug", slugTransform(e.target.value), { shouldValidate: true });
                //     }
                // })}
                />
                <RTE label="Content : " name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className='w-1/3 px-2'>
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", {
                        required: !post
                    })}
                />
                {post?.featuredImage && (
                    <div className='w-full mb-4'>
                        <img src={appwriteService.getFileView(post.featuredImage)} alt={post.title} className='rounded-lg' />
                    </div>
                )}

                {/* {post && (
                    <div className='w-full mb-4'>
                        <img
                            src={appwriteService.getFileView(post.featuredImage)?.href}
                            alt={post.title}
                            className='rounded-lg'
                            onError={(e) => {
                                console.log("Image load error:", e);
                                e.target.style.display = 'none';
                            }}
                        />
                    </div>
                )} */}



                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type='submit' bgColor={post ? "bg-green-500" : undefined} className='w-full'>
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    )
}

export default PostForm