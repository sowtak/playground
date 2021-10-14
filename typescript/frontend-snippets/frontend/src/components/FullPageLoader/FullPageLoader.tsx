import React, {FC} from "react";

export const FullPageLoader: FC = () => {
    return(
        <div className='fp-container'>
            <div className='spinner-grow text-success fp-loader' role='status'>
                <span className='sr-only'/>
            </div>
        </div>
    )
}