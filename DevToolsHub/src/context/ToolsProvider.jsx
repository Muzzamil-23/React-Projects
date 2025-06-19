import useToolsInfo from "../hook/useToolsInfo";
import  {ToolsContext}  from "./ToolsContext";


const ToolsProvider = ({children}) => {
    const toolsData = useToolsInfo();
    return(
        <ToolsContext value={toolsData}>
            {children}
        </ToolsContext>
    )

}

export default ToolsProvider;