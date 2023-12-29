import React from 'react';

const AdditionalInfo = () => {

    const items = [
        {id:1, title: 'Stand Up', info: '35″L x 24″W x 37-45″H(front to back wheel)' },
        {id:1, title: 'Folded (w/o wheels)', info: '32.5″L x 18.5″W x 16.5″H' },
        {id:1, title: 'Folded (w/ wheels)', info: '32.5″L x 24″W x 18.5″H' },
        {id:1, title: 'Door Pass Through', info: '24' },
        {id:1, title: 'Frame', info: 'Aluminum' },
        {id:1, title: 'Weight (w/o wheels)', info: '20 LBS' },
        {id:1, title: 'Weight Capacity', info: '60 LBS' },
        {id:1, title: 'Width', info: '24″' },
        {id:1, title: 'Handle height (ground to handle)', info: '37-45″' },
        {id:1, title: 'Wheels', info: '12″ air / wide track slick tread' },
        {id:1, title: 'Seat back height', info: '25″' },
        {id:1, title: 'Color', info: 'Black, Blue, Red, White' },
        {id:1, title: 'Size', info: 'M, S' },
    ]
    return (

            <table className={'w-full mt-6'}>
                <tbody>
                {items.map(item => (<tr>
                    <td className={'text-sm font-semibold text-red-500 brightness-110 py-2.5  border border-gray-200 px-5'}>{item.title}</td>
                    <td className={'border border-gray-200 py-2.5 px-5  text-sm text-gray-6 00'}>{item.info}</td>
                </tr>))}

                </tbody>
            </table>

    );
};

export default AdditionalInfo;
