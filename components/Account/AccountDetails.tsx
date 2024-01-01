import React from 'react';

const AccountDetails = () => {
    return (
        <div>
            <h3 className={'text-3xl font-bold'}>Account Details</h3>
            <form className={'mt-5 space-y-5'}>
                <div className={'grid grid-cols-1 sm:grid-cols-2 gap-5'}>
                    <div className={'space-y-2'}>
                        <label className={"text-sm font-medium text-gray-600 inline-block"} htmlFor={'firstName'}>First
                            Name</label>
                        <input name={"firstName"} id={"firstName"}
                               className={'outline-0 px-3.5 py-4 font-semibold text-gray-500 focus:border-primary/80 duration-300 rounded-lg border border-gray-200 block w-full placeholder:font-semibold'}
                               type={'text'}/>
                    </div>
                    <div className={'space-y-2'}>
                        <label htmlFor={"lastName"} className={"text-sm font-medium text-gray-600 inline-block"}>Last
                            Name</label>
                        <input name={"lastName"} id={"lastName"}
                               className={'outline-0 px-3.5 py-4 font-semibold text-gray-500 focus:border-primary/80 duration-300 rounded-lg border border-gray-200 block w-full placeholder:font-semibold'}
                               type={'text'}/>
                    </div>
                </div>

                <div className={'space-y-2'}>
                    <label htmlFor={'displayName'} className={"text-sm font-medium text-gray-600 inline-block"}>Display
                        Name</label>
                    <input
                        name={"displayName"}
                        id={"displayName"}
                        className={'outline-0 px-3.5 py-4 font-semibold text-gray-500 focus:border-primary/80 duration-300 rounded-lg border border-gray-200 block w-full placeholder:font-semibold'}
                        type={'text'}/>
                </div>
                <div className={'space-y-2'}>
                    <label htmlFor={'email'} className={"text-sm font-medium text-gray-600 inline-block"}>Email</label>
                    <input
                        name={"email"}
                        id={"email"}
                        className={'outline-0 px-3.5 py-4 font-semibold text-gray-500 focus:border-primary/80 duration-300 rounded-lg border border-gray-200 block w-full placeholder:font-semibold'}
                        type={'email'}/>
                </div>
                <div className={'space-y-2'}>
                    <label htmlFor={'currentPassword'} className={"text-sm font-medium text-gray-600 inline-block"}>Current Password</label>
                    <input
                        name={"currentPassword"}
                        id={"currentPassword"}
                        className={'outline-0 px-3.5 py-4 font-semibold text-gray-500 focus:border-primary/80 duration-300 rounded-lg border border-gray-200 block w-full placeholder:font-semibold'}
                        type={'password'}/>
                </div>
                <div className={'space-y-2'}>
                    <label htmlFor={'newPassword'} className={"text-sm font-medium text-gray-600 inline-block"}>New Password</label>
                    <input
                        name={"newPassword"}
                        id={"newPassword"}
                        className={'outline-0 px-3.5 py-4 font-semibold text-gray-500 focus:border-primary/80 duration-300 rounded-lg border border-gray-200 block w-full placeholder:font-semibold'}
                        type={'password'}/>
                </div>
                <div className={'space-y-2'}>
                    <label htmlFor={'confirmPassword'} className={"text-sm font-medium text-gray-600 inline-block"}>Confirm Password</label>
                    <input
                        name={"confirmPassword"}
                        id={"confirmPassword"}
                        className={'outline-0 px-3.5 py-4 font-semibold text-gray-500 focus:border-primary/80 duration-300 rounded-lg border border-gray-200 block w-full placeholder:font-semibold'}
                        type={'password'}/>
                </div>

                <button
                    className={'px-6 py-4 rounded-lg text-white  font-semibold text-lg duration-300 bg-primary/80 hover:bg-primary'}>
                    Save Changes
                </button>
            </form>
        </div>
    );
};

export default AccountDetails;
