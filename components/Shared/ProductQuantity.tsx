import React from 'react';

interface  propsType {
    setQuantity : (arg:number) => void;
    quantity: number;
}
const ProductQuantity = ({setQuantity,quantity}:propsType) => {
    return (
        <>
            <input onChange={(e: any) => setQuantity(e.target.value > 1 ? Number(e.target.value) : 1)}
                   className={'p-2.5 border-2 border-primary outline-0 rounded text-lg max-w-[96px]'}
                   value={quantity} type={'number'}/>
        </>
    );
};

export default ProductQuantity;
