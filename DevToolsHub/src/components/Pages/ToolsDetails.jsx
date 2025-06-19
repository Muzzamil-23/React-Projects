import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ToolsContext } from '../../context/ToolsContext';

const ToolsDetails = () => {
  const { toolId } = useParams();
  const data = useContext(ToolsContext);
  const toolDetail = data.find(tool => tool.id === parseInt(toolId));

  return (
    <div className='flex flex-col h-[100%] container mx-auto justify-center gap-10 dark:bg-gray-800 dark:text-white'>
      <div className='px-20 flex justify-start'>
        <Link to='/tools' className='px-6 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 text-md'>👈 Back to Tools</Link>
      </div>
      <div className='w-[100%] flex justify-center'>
        <div className='flex flex-col gap-4 shadow-lg border-2 border-gray-100 dark:border-gray-700 dark:bg-gray-900 py-10 rounded-xl px-12'>
          <h2 className='text-4xl font-bold dark:text-blue-500'>{toolDetail?.name}</h2>
          <div className='flex flex-wrap gap-2'>
            <span className='bg-yellow-200 dark:bg-gray-800 dark:border-[1px] dark:border-gray-700 px-4 py-1.5 rounded-2xl'>{toolDetail?.category}</span>
            {
              toolDetail?.tags?.map((tag) => (
                <span key={tag} className='bg-yellow-200 px-4 py-1.5 rounded-2xl dark:bg-gray-800 dark:border-[1px] dark:border-gray-700'>{tag}</span>
              ))
            }

          </div>
          <p className='mt-5 text-xl'>{toolDetail?.description}</p>
          <div className='flex flex-col gap-2'>
            <h4 className='text-2xl font-bold'>Try it! ⬇️</h4>
            <a href={toolDetail?.link} target='_blank' className='text-blue-800 dark:text-[#6a7dff] hover:underline text-xl'>{toolDetail?.link}</a>
          </div>

        </div>

      </div>
    </div>
  )
}

export default ToolsDetails