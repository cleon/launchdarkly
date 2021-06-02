import React from 'react';
import ReactDOM from 'react-dom';
import * as LDClient from 'launchdarkly-js-client-sdk';

var showFeature = false;

const LD = () => {
    return (
        <React.Fragment>
            <h1><b>URL:</b> https://app.launchdarkly.com/ (production)</h1>
            <h3><b>Project:</b> SupportService</h3>
            <h3><b>Environment:</b> cleon</h3>
            <h4><b>Flag:</b> Leon-Test</h4>
            <h4><b>Flag Enabled:</b> { showFeature ? "true" : "false" }</h4>
        </React.Fragment>
    );
};

// this is configured to work against my LD environment running at https://app.launchdarkly.com/support-service/cleon/features
// I have a feature flag called 'Leon-Test'
// My project is here https://app.launchdarkly.com/settings/projects, type in 'support' in 'Your Projects' search bar
// The project name is SupportService
// You'll see the 'environment' there which is 'cleon'
// 'cleon' is the 'key' in the user object below
// LDClient is initialized with the "Client-side ID" found in my Project->Environment info
// I had to go in and enable the Leon-Test flag to get this app to show True

var user = {
    "firstName": "chris",
    "lastName": "leon",
    "key": "cleon"
};

var ldclient = LDClient.initialize('', user);

ldclient.on('ready', () => {
    showFeature = ldclient.variation('Leon-Test', false);
    ReactDOM.render(
        <LD />,
        document.getElementById('root')
    );
});