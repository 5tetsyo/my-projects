import React from 'react';
import { usePagination } from '../../utilites/pages';

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = usePagination(totalPages);
    return (
        <div className='page_wrapper'>
        {pagesArray.map(p => <button 
          onClick={()=> {
            changePage(p)
          }}
          className={ p === page ? 'page page_active' : 'page' } key={p}>{p}</button>)}
      </div>
    );
}

export default Pagination;
