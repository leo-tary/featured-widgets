import React from 'react';

const Link = ( { href , className , children }) => {

    const onNavClick = (event) => {

        if(event.metaKey || event.ctrlKey) {
            return;
        }

        event.preventDefault();
        window.history.pushState({} , '' , href);

        // Lookout for popstate Event
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);

    }


    return (
        <a href={href} className={className} onClick={onNavClick}>{children}</a>
    );


}

export default Link;