import React from "react";
import { useLocation } from "react-router-dom";
import { get } from "lodash";
import ErrorPage from './ErrorPage';
import UnauthPage from './UnauthPage';

const ErrorHandler = ({ children }) => {
    const location = useLocation();

    switch (get(location.state, "errorStatusCode")) {
        case 403:
            return <UnauthPage />;

        case 404:
            return <ErrorPage />;

        default:
            return children;
    }
};

export default ErrorHandler;