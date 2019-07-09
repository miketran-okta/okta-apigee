# okta-apigee

To setup this project perform the following:

- Upload the apiproxy.zip bundle as a new Proxy
- Update the **Assign Environment Variables** under Policies with the appropriate configurations
- Update the *HTTP Target* of the *default* under **Target Endpoints** to reference the Okta tenet *i.e https://dev-989484.oktapreview.com* 
- Update the **openid-configuration** under Policies so that the *payload* field references the correct APIAGEE endpoints *i.e https://miketranokta-test.apigee.net/okta-apigee/*. Also ensure the **issuer** is set to the URL of the okta tenet
- Deploy the new proxy to an environment
