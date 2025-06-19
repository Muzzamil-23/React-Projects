import { useEffect, useState } from "react"

const useToolsInfo = () => {
    const [toolsData, setToolsData] = useState([]);
    useEffect(() => {
        fetch('/data/tools.json')
        .then((res) => res.json())
        .then((res) => setToolsData(res))
    }, [])
    return toolsData;
}

export default useToolsInfo