import React from 'react';
import ReactDOM from 'react-dom';
import * as LDClient from 'launchdarkly-js-client-sdk';

const LD = () => {
    var showFeature = false;
    var user = {
        "key": "aa0ceb"
    };
    var ldclient = LDClient.initialize('MY_CLIENT_SIDE_ID', user);
    ldclient.on('ready', () => {
        console.info('LD client ready.');
        showFeature = ldclient.variation('my-feature-key', false);
    });

    return (
        <h2>LD flag enabled: {showFeature ? "true" : "false"}</h2>
    );
};

ReactDOM.render(
    <LD />,
    document.getElementById('root')
);