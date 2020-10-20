import React from 'react';
import './styles.scss';
import { ReactComponent as ArrowIcon } from 'core/assests/images/arrow.svg';
import { generateList } from 'core/utils/list';

type Props = {
    totalPages: number;
    activePage: number;
    onChange: (item: number) => void;

}

const Pagination = ({totalPages, activePage, onChange}:Props) => {
    const items = generateList(totalPages);

    const firstPage = (activePage === 0);
    const lastPage = (activePage === (totalPages - 1));

    const previousClass = firstPage ? 'page-inactive' : 'page-active';
    const nextClass = lastPage ? 'page-inactive' : 'page-active';

    return (
        <div className="pagination-container">
            <ArrowIcon 
                className={`pagination-previous ${previousClass}`}
                onClick={() => onChange(activePage - 1)}/>
            {items.map(item => (
                <div 
                    className={`pagination-item ${item === activePage ? 'active' : ''}`}
                    key={item}
                    onClick={() => onChange(item)}>
                        {item + 1}
                </div>
            ))}
            <ArrowIcon 
                className={`pagination-next ${nextClass}`}
                onClick={() => onChange(activePage + 1)}/>
        </div>
    );
}

export default Pagination;