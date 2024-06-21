import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTitle = (props: any) => {
    const location = useLocation();

    useEffect(() => {
        document.title = props.title;
    }, [location, props.title]);

    return null;
};

export default PageTitle;