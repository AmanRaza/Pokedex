import React from 'react'
import Button from 'react-bootstrap/Button'
export default function Pagination({gotoNextPage, gotoPrevPage})
{
    return(
        <div className="col-md-12 text-center mt-4">
            {gotoPrevPage && <Button  className = "mx-2 my-1" onClick={gotoPrevPage}>Prev</Button>}
            {gotoNextPage && <Button  className = "mx-2 my-1"  onClick={gotoNextPage}>Next</Button>}
        </div>
    )
}