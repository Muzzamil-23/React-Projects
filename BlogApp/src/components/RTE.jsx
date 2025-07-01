import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'
import conf from '../conf/conf'


const RTE = ({ name, control, label, defaultValue = "" }) => {
    return (
        <div className='w-full'>
            {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

            <Controller
                name={name || "content"}
                control={control}
                render={({ field: { onChange } }) => (
                    <Editor
                        apiKey={conf.tinymceApiKey}
                        initialValue={defaultValue}
                        init={{
                            initialValue: defaultValue,
                            // height: 500,
                            menubar: true,
                            plugins: [
                                'advlist', 'anchor', 'autolink', 'autoresize', 'charmap', 'code', 'codesample',
                                'directionality', 'emoticons', 'fullscreen', 'help', 'image',
                                'importcss', 'insertdatetime', 'link', 'lists', 'media', 'nonbreaking', 'pagebreak',
                                'preview', 'quickbars', 'save', 'searchreplace', 'table', 'visualblocks',
                                'visualchars', 'wordcount'
                            ],

                            toolbar: 'undo redo | styleselect | bold italic underline | alignleft aligncenter alignright alignjustify | ' +
                                'bullist numlist outdent indent | link image media | code preview fullscreen | ' +
                                'emoticons charmap hr insertdatetime | visualblocks visualchars | spellchecker searchreplace',
                            toolbar_sticky: true,
                            toolbar_mode: 'sliding',
                            height: 500
                        }}
                        onEditorChange={onChange}
                    />

                )}
            />
        </div>
    )
}

export default RTE