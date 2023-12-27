import { Dialog, Transition } from '@headlessui/react'
import { ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { Fragment } from 'react'
import Countdown from 'react-countdown'
import CounterBox from './CounterBox'
import ProductRating from '../Shared/ProductRating'

export default function Modal({ isOpen, setIsOpen }: any) {


    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>

                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-40" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel 
                                className="w-full max-w-[850px] transform overflow-hidden
                                 rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all
                                 
                                 ">
                                    <div className='flex justify-end'>
                                        <XMarkIcon onClick={closeModal} className='cursor-pointer' width={30} />
                                    </div>
                                    <div className='p-4 home_popup'>
                                        <h4 className='text-[#fdc040] text-[16px] font-bold'>Deal of the Day</h4>
                                        <a href={'/'} className='' tabIndex={-1}>
                                        <h4 className='mb-5 text-gray-black text-[45px] leading-[60px] max-w-[59%] font-bold'>

                                                Seeds of change Organic Red Rice

                                        </h4>
                                        </a>
                                        <div className='flex space-x-4 items-center mb-5'>
                                            <h4 className='text-green-black text-[50px]
                                             font-bold'>$28.85</h4>
                                            <h4 className='text-[#b6b6b6] text-[28px]
                                             font-bold line-through decoration-[3px]'>$32.80</h4>
                                        </div>
                                        <div className='mb-8'>
                                            <h5 className='text-[16x] text-light-gray mb-5 font-semibold'>Hurry Up! Offer End In:</h5>
                                            <Countdown
                                                date={new Date("Jan 5, 2026 15:37:25").getTime()}
                                                renderer={CounterBox}
                                            />

                                        </div>
                                        <div className='flex items-center space-x-2 mb-5'>
                                            <ProductRating rating={0} />
                                            <span className="text-light-gray text-sm">
                                                0
                                            </span>
                                        </div>
                                        <button className='flex items-center gap-2
                                         bg-green-black hover:bg-orange-light duration-300 py-4 px-4 rounded-md text-white'>
                                            <ShoppingCartIcon width={20} />
                                            <span className='font-semibold'>Add to cart</span>
                                        </button>
                                    </div>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
