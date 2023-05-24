import React from 'react';
import { Link } from 'react-router-dom'
import { Mayor } from '../../assets/svg/mayor';
import './breadcrumbs.scss';

interface Props {
    steps: string[];
}

const Breadcrumbs: React.FC<Props> = ({steps}) => {
    return (
        <div className="breadcrumbs">
            <div className="breadcrumbs__container">
                {steps && steps.length > 0 && steps.map((item: string, index: number)=>(
                <div className='breadcrumbs__nav' key={item}>
                    <Link to={`/items?search=${item}`}>{item}</Link>
                    {index !== steps.length - 1 ?  <span><Mayor /></span> : ""}
                </div>
                ))}
            </div>
        </div>
    );
};

export default Breadcrumbs;