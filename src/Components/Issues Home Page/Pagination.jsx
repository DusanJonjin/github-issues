import React, { useState } from 'react';
import './Styles/Pagination.css'

export function Pagination({ pageNum, itemsPerPage, openIssuesNum, handleSetPageNumber}) {

    const firstPageNum = 1;

    const lastPageNum = Math.ceil(openIssuesNum / itemsPerPage);

    // eslint-disable-next-line no-unused-vars
    const [paginateBtnsTotal, setPaginButtonsTotal] = useState(7); 
    // set this state to be not smaller than 5 and not larger than 10

    const midBtnsTotal = paginateBtnsTotal - 2;

    const startMidBtnsArr = Array.from({length: midBtnsTotal}, (v, i) => i + 2);

    const endMidBtnsArr = Array.from({length: midBtnsTotal}, (v, i) => i + (lastPageNum - midBtnsTotal));

    const initialMidBtnsArr = () => {
        if (pageNum <= midBtnsTotal) return startMidBtnsArr;
        if (pageNum >= lastPageNum - (midBtnsTotal - 1)) return endMidBtnsArr;
        const midBtnsArr = Array.from({length: midBtnsTotal}, (v, i) => {
            if (midBtnsTotal <= 4) return i + (pageNum - 1);
            else return i + (pageNum - 2);
        });
        return midBtnsArr;
    };


    const [midPaginateBtnsArr, setMidPaginateBtnsArr] = useState(initialMidBtnsArr());

    
    const moveToFirstPage = () => {
        setMidPaginateBtnsArr(startMidBtnsArr);
        return firstPageNum;
    };

    const moveToLastPage = () => {
        setMidPaginateBtnsArr(endMidBtnsArr);
        return lastPageNum;
    };

    /*const numOfPlacesToMove = midBtnsTotal % 2 === 0 ? 
        midBtnsTotal / 2
      : (midBtnsTotal - 1) / 2;

    const movePaginBtnsForward = () => {
        if (midPaginateBtnsArr[midBtnsTotal - 1] === lastPage - 1) return;
        const increasePageBtnsNums = midPaginateBtnsArr.map(num => 
            num + numOfPlacesToMove);
        setMidPaginateBtnsArr(increasePageBtnsNums);
    }

    const movePaginBtnsBackwards = () => {
        if (midPaginateBtnsArr[0] <= firstPage + 1) return;
        const decreasePageBtnsNums = midPaginateBtnsArr.map(num => 
            num - numOfPlacesToMove);
        setMidPaginateBtnsArr(decreasePageBtnsNums);
    }

    const handlePaginateBtnsClick = (num, i) => {
        if (num === pageNum) return;
        else if (i === 0) movePaginBtnsBackwards();
        else if (i === midBtnsTotal - 1) movePaginBtnsForward();
        return num;
    };*/

    const showThreeDots = {
        begin: midPaginateBtnsArr[0] !== 2,
        end: midPaginateBtnsArr[midBtnsTotal - 1] !== (lastPageNum - 1)
    }

    const paginateBtnsNumbers = midPaginateBtnsArr.map(number => 
        <li key={number}
            className={`pagin-numbers ${number === pageNum && 'selected'}`}
            onClick={() => handleSetPageNumber(number)} 
        >
            {number}
        </li>
    )

    return (
        <section id="pagination">
            <div onClick={() => handleSetPageNumber(moveToFirstPage())}
                className={`pagin-numbers ${firstPageNum === pageNum && "selected"}`}>
                {firstPageNum}
            </div>
            {showThreeDots.begin && 
                <div className='three-dots'>...</div>
            }
            <ol>{paginateBtnsNumbers}</ol>
            {showThreeDots.end && 
                <div className='three-dots'>...</div>
            }
            <div onClick={() => handleSetPageNumber(moveToLastPage())}
                className={`pagin-numbers ${lastPageNum === pageNum && "selected"}`} >
                {lastPageNum}
            </div>
    </section>
    )
}


