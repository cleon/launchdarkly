import React from 'react';
import ReactDOM from 'react-dom';
import * as LDClient from 'launchdarkly-js-client-sdk';

var showFeature = false;

const LD = () => {
    return (
        <h2>ld-demo flag enabled: {showFeature ? "true" : "false"}</h2>
    );
};

var user = {
    "firstName": "chris",
    "lastName": "leon",
    "key": "chris.leon@appdynamics.com"
};

var ldclient = LDClient.initialize('607a00d6aea1e70c30fae7b8', user);

ldclient.on('ready', () => {
    showFeature = ldclient.variation('ld-demo', false);
    ReactDOM.render(
        <LD />,
        document.getElementById('root')
    );
});