import React, { createContext, useContext } from 'react'
import useToolsInfo from '../../hook/useToolsInfo'
import ToolCard from '../ToolCard/ToolCard';
import { ToolsContext } from '../../context/ToolsContext';

const Tools = () => {
  const toolsData = useContext(ToolsContext);
 
  return (
    <div className='container mx-auto px-20 py-14 dark:text-white dark:bg-gray-800'>
        <h1 className='text-center text-5xl font-bold text-blue-500'>Developer Tools</h1>
        <div className='mt-16 grid gap-y-20 gap-x-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {toolsData?.map((tool) => <ToolCard key={tool?.id} toolsData={tool} />
            )}

        </div>
    </div> 
  )
}

export default Tools