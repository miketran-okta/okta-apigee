# okta-apigee

This proxy project mints APIGEE opaque tokens which are mapped to Okta JWT tokens for authentication and authorizaton.  The project allows teams to leverage the benefits of Okta as an Identity Provider and yet continue to leverage APIGEE opaque tokens which may have already been issued in live production environments.  Thus this proxy provides a vehicle for teams to gracefully migrate OAuth clients over to Okta without requireing re-authenticaton, password resets or any other functions which could disrupte the user experience.

## Setup & Deployment

- Zip the apiproxy directory (i.e apiproxy.zip) and depoy the bundle as a new Proxy within the APIGEE administrator console
- Update the **Assign Environment Variables** under Policies with the appropriate configuration values
- Update the *HTTP Target* of the *default* under **Target Endpoints** to reference the Okta tenet *i.e https://dev-989484.oktapreview.com* 
- Update the **openid-configuration** under Policies so that the *payload* field references the correct APIAGEE endpoints *i.e https://miketranokta-test.apigee.net/okta-apigee/*. Also ensure the **issuer** is set to the URL of the okta tenet
- Deploy the new proxy to an environment

## Testing

This project can be tested with any OAuth client.  A good example would be the Okta for Android Sample found [here](https://github.com/okta/samples-android/tree/master/custom-sign-in)

## Architecture Flow

![Okta + Apigee](https://github.com/miketran-okta/okta-apigee/blob/master/Okta%2BApigee%20Sequence%20Diagram_v4.png "Okta + APIGEE")





