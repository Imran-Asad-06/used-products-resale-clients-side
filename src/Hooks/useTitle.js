import { useEffect } from "react";


const useTitle = (title) => {
    useEffect(()=>{
     document.title = `${title} - old furniture`;
    }, [title])

    }

export default useTitle;