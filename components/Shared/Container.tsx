import React from 'react';
import {cn} from "@/utls/utils";

const Container = ({className, children}: {className?: String, children: React.ReactNode}) => {
    return (
        <section className={cn('max-w-8xl mx-auto px-4 2xl:px-0',className )}>
            {children}
        </section>
    );
};

export default Container;
