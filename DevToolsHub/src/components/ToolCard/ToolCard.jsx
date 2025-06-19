import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ToolsContext } from '../../context/ToolsContext'

const ToolCard = ({toolsData}) => { 
  return (
    <div className='shadow-lg rounded-lg border-[1px] border-gray-200 dark:bg-gray-900 dark:border-gray-700'>
      <div className='flex flex-col px-8 py-6 gap-4 min-h-[100%]'>
        <h3 className='text-2xl font-bold'>{toolsData?.name}</h3>
        <div className='flex-1'>
          <p className='text-xl'>{toolsData?.description}</p>
        </div>
        <div className='mt-4'>
          <Link to={`/tools/detail/${toolsData?.id}`} className='px-6 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 text-md'>Show Details</Link>
        </div>
      </div>
    </div>
  )
}

export default ToolCard