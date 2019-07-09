# okta-apigee

This proxy project mints APIGEE opaque tokens which are mapped to Okta JWT tokens for authentication and authorizaton.  The project allows teams to leverage the benefits of Okta as an Identity Provider and yet continue to leverage APIGEE opaque tokens which may have already been issued in live production environments.  Thus this proxy provides a vehicle for teams to gracefully migrate OAuth clients over to Okta without requiring re-authenticaton, password resets or any other functions which could disrupte the user experience.

## Prerequisites

- An Apigee OAuth client ID and secret
- An Okta OAuth application setup with the provided client ID and redirect URI

## Setup & Deployment

- Zip the apiproxy directory (i.e apiproxy.zip) and depoy the bundle as a new Proxy within the APIGEE administrator console
- Update the **Assign Environment Variables** under Policies with the appropriate configuration values

<img src="https://github.com/miketran-okta/okta-apigee/blob/master/1.png"/>

- Update the *HTTP Target* of the *default* under **Target Endpoints** to reference the Okta tenet 
    - for example: *https://dev-989484.oktapreview.com*

<img src="https://github.com/miketran-okta/okta-apigee/blob/master/2.png"/>

- Under Policies -> **openid-configuration**, update the json object within the *payload* tag to reference the Apigee proxy URL 
    - for example: *https://miketranokta-test.apigee.net/okta-apigee*
    - ensure the **issuer** is set to the URL of the okta tenet

```json

{
    "issuer": "https://dev-989484.oktapreview.com",
    "authorization_endpoint": "https://miketranokta-test.apigee.net/okta-apigee/oauth2/v1/authorize",
    "token_endpoint": "https://miketranokta-test.apigee.net/okta-apigee/oauth2/v1/token",
    "userinfo_endpoint": "https://miketranokta-test.apigee.net/okta-apigee/oauth2/v1/userinfo",
    "registration_endpoint": "https://miketranokta-test.apigee.net/okta-apigee/oauth2/v1/clients/0oalfafa3z23dBWMB0h7",
    "jwks_uri": "https://miketranokta-test.apigee.net/okta-apigee/oauth2/v1/keys?client_id=0oalfafa3z23dBWMB0h7",
    "response_types_supported": ["code"],
    "response_modes_supported": ["query", "fragment", "form_post", "okta_post_message"],
    "grant_types_supported": ["authorization_code", "refresh_token"],
    "subject_types_supported": ["public"],
    "id_token_signing_alg_values_supported": ["RS256"],
    "scopes_supported": ["openid", "email", "profile", "address", "phone", "offline_access"],
    "token_endpoint_auth_methods_supported": ["none"],
    "claims_supported": ["iss", "ver", "sub", "aud", "iat", "exp", "jti", "auth_time", "amr", "idp", "nonce", "name", "nickname", "preferred_username", "given_name", "middle_name", "family_name", "email", "email_verified", "profile", "zoneinfo", "locale", "address", "phone_number", "picture", "website", "gender", "birthdate", "updated_at", "at_hash", "c_hash"],
    "code_challenge_methods_supported": ["S256"],
    "introspection_endpoint": "https://miketranokta-test.apigee.net/okta-apigee/oauth2/v1/introspect",
    "introspection_endpoint_auth_methods_supported": ["none"],
    "revocation_endpoint": "https://miketranokta-test.apigee.net/okta-apigee/oauth2/v1/revoke",
    "revocation_endpoint_auth_methods_supported": ["none"],
    "end_session_endpoint": "https://miketranokta-test.apigee.net/okta-apigee/oauth2/v1/logout",
    "request_parameter_supported": false
}
```

<img src="https://github.com/miketran-okta/okta-apigee/blob/master/3.png"/>

- Deploy the new proxy to an environment

## Testing

This project can be tested with any OAuth client.  A good example would be the Okta for Android Sample found [here](https://github.com/okta/samples-android/tree/master/custom-sign-in)

## Architecture Flow

<img src="https://github.com/miketran-okta/okta-apigee/blob/master/Okta%2BApigee%20Sequence%20Diagram_v4.png"/>





