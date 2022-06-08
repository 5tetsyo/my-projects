import { useMemo } from "react";

export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
}

export const usePagination = (totalPages) => {
    const createPagesBut = useMemo(() => {
        const pagesArray = [];
        for(let i = 0; i < totalPages; i++){
          pagesArray.push(i+1)
        }
        return pagesArray
      }, [totalPages])
      return createPagesBut
}
