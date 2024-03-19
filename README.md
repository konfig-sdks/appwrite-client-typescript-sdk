<div align="left">

[![Visit Appwrite](./header.png)](https://appwrite.io)

# [Appwrite](https://appwrite.io)<a id="appwrite"></a>

Appwrite backend as a service cuts up to 70% of the time and costs required for building a modern application. We abstract and simplify common development tasks behind a REST APIs, to help you develop your app in a fast and secure way. For full API documentation and tutorials go to [https://appwrite.io/docs](https://appwrite.io/docs)

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`appwriteclient.account.addAuthenticator`](#appwriteclientaccountaddauthenticator)
  * [`appwriteclient.account.blockUserStatus`](#appwriteclientaccountblockuserstatus)
  * [`appwriteclient.account.completeMfaChallenge`](#appwriteclientaccountcompletemfachallenge)
  * [`appwriteclient.account.completePasswordRecovery`](#appwriteclientaccountcompletepasswordrecovery)
  * [`appwriteclient.account.confirmPhoneVerification`](#appwriteclientaccountconfirmphoneverification)
  * [`appwriteclient.account.createAnonymousSession`](#appwriteclientaccountcreateanonymoussession)
  * [`appwriteclient.account.createEmailPasswordSession`](#appwriteclientaccountcreateemailpasswordsession)
  * [`appwriteclient.account.createEmailToken`](#appwriteclientaccountcreateemailtoken)
  * [`appwriteclient.account.createEmailVerification`](#appwriteclientaccountcreateemailverification)
  * [`appwriteclient.account.createEmailVerification_0`](#appwriteclientaccountcreateemailverification_0)
  * [`appwriteclient.account.createJwt`](#appwriteclientaccountcreatejwt)
  * [`appwriteclient.account.createMagicUrlToken`](#appwriteclientaccountcreatemagicurltoken)
  * [`appwriteclient.account.createMfaChallenge`](#appwriteclientaccountcreatemfachallenge)
  * [`appwriteclient.account.createMfaRecoveryCodes`](#appwriteclientaccountcreatemfarecoverycodes)
  * [`appwriteclient.account.createOAuth2Session`](#appwriteclientaccountcreateoauth2session)
  * [`appwriteclient.account.createOAuth2Token`](#appwriteclientaccountcreateoauth2token)
  * [`appwriteclient.account.createPasswordRecovery`](#appwriteclientaccountcreatepasswordrecovery)
  * [`appwriteclient.account.createPhoneToken`](#appwriteclientaccountcreatephonetoken)
  * [`appwriteclient.account.createPhoneVerification`](#appwriteclientaccountcreatephoneverification)
  * [`appwriteclient.account.createPushTarget`](#appwriteclientaccountcreatepushtarget)
  * [`appwriteclient.account.createSessionFromToken`](#appwriteclientaccountcreatesessionfromtoken)
  * [`appwriteclient.account.deleteAuthenticator`](#appwriteclientaccountdeleteauthenticator)
  * [`appwriteclient.account.deleteIdentityById`](#appwriteclientaccountdeleteidentitybyid)
  * [`appwriteclient.account.deletePushTarget`](#appwriteclientaccountdeletepushtarget)
  * [`appwriteclient.account.extendSessionLength`](#appwriteclientaccountextendsessionlength)
  * [`appwriteclient.account.getCurrentUser`](#appwriteclientaccountgetcurrentuser)
  * [`appwriteclient.account.getMfaRecoveryCodes`](#appwriteclientaccountgetmfarecoverycodes)
  * [`appwriteclient.account.getPrefs`](#appwriteclientaccountgetprefs)
  * [`appwriteclient.account.getSession`](#appwriteclientaccountgetsession)
  * [`appwriteclient.account.listIdentities`](#appwriteclientaccountlistidentities)
  * [`appwriteclient.account.listLogs`](#appwriteclientaccountlistlogs)
  * [`appwriteclient.account.listMfaFactors`](#appwriteclientaccountlistmfafactors)
  * [`appwriteclient.account.listSessions`](#appwriteclientaccountlistsessions)
  * [`appwriteclient.account.logoutSessionById`](#appwriteclientaccountlogoutsessionbyid)
  * [`appwriteclient.account.regenerateMfaRecoveryCodes`](#appwriteclientaccountregeneratemfarecoverycodes)
  * [`appwriteclient.account.registerUser`](#appwriteclientaccountregisteruser)
  * [`appwriteclient.account.removeSessions`](#appwriteclientaccountremovesessions)
  * [`appwriteclient.account.updateMagicUrlSession`](#appwriteclientaccountupdatemagicurlsession)
  * [`appwriteclient.account.updateMfaStatus`](#appwriteclientaccountupdatemfastatus)
  * [`appwriteclient.account.updateNameOperation`](#appwriteclientaccountupdatenameoperation)
  * [`appwriteclient.account.updatePassword`](#appwriteclientaccountupdatepassword)
  * [`appwriteclient.account.updatePhone`](#appwriteclientaccountupdatephone)
  * [`appwriteclient.account.updatePhoneSession`](#appwriteclientaccountupdatephonesession)
  * [`appwriteclient.account.updatePreferences`](#appwriteclientaccountupdatepreferences)
  * [`appwriteclient.account.updatePushTarget`](#appwriteclientaccountupdatepushtarget)
  * [`appwriteclient.account.updateUserEmail`](#appwriteclientaccountupdateuseremail)
  * [`appwriteclient.account.verifyAuthenticator`](#appwriteclientaccountverifyauthenticator)
  * [`appwriteclient.avatars.generateQrCodeImage`](#appwriteclientavatarsgenerateqrcodeimage)
  * [`appwriteclient.avatars.getBrowserIconByCode`](#appwriteclientavatarsgetbrowsericonbycode)
  * [`appwriteclient.avatars.getCountryFlagByCode`](#appwriteclientavatarsgetcountryflagbycode)
  * [`appwriteclient.avatars.getCreditCardIcon`](#appwriteclientavatarsgetcreditcardicon)
  * [`appwriteclient.avatars.getFavicon`](#appwriteclientavatarsgetfavicon)
  * [`appwriteclient.avatars.getRemoteImage`](#appwriteclientavatarsgetremoteimage)
  * [`appwriteclient.avatars.getUserInitials`](#appwriteclientavatarsgetuserinitials)
  * [`appwriteclient.databases.createDocument`](#appwriteclientdatabasescreatedocument)
  * [`appwriteclient.databases.deleteDocumentById`](#appwriteclientdatabasesdeletedocumentbyid)
  * [`appwriteclient.databases.getDocumentById`](#appwriteclientdatabasesgetdocumentbyid)
  * [`appwriteclient.databases.listUserDocuments`](#appwriteclientdatabaseslistuserdocuments)
  * [`appwriteclient.databases.updateDocumentById`](#appwriteclientdatabasesupdatedocumentbyid)
  * [`appwriteclient.functions.getExecutionLog`](#appwriteclientfunctionsgetexecutionlog)
  * [`appwriteclient.functions.listExecutions`](#appwriteclientfunctionslistexecutions)
  * [`appwriteclient.functions.triggerFunctionExecution`](#appwriteclientfunctionstriggerfunctionexecution)
  * [`appwriteclient.graphql.executeMutation`](#appwriteclientgraphqlexecutemutation)
  * [`appwriteclient.graphql.executeMutationOperation`](#appwriteclientgraphqlexecutemutationoperation)
  * [`appwriteclient.locale.getCurrencies`](#appwriteclientlocalegetcurrencies)
  * [`appwriteclient.locale.getEUCountries`](#appwriteclientlocalegeteucountries)
  * [`appwriteclient.locale.getUserLocale`](#appwriteclientlocalegetuserlocale)
  * [`appwriteclient.locale.listCodes`](#appwriteclientlocalelistcodes)
  * [`appwriteclient.locale.listContinents`](#appwriteclientlocalelistcontinents)
  * [`appwriteclient.locale.listCountries`](#appwriteclientlocalelistcountries)
  * [`appwriteclient.locale.listCountriesPhones`](#appwriteclientlocalelistcountriesphones)
  * [`appwriteclient.locale.listLanguages`](#appwriteclientlocalelistlanguages)
  * [`appwriteclient.messaging.addNewSubscriber`](#appwriteclientmessagingaddnewsubscriber)
  * [`appwriteclient.messaging.deleteSubscriberById`](#appwriteclientmessagingdeletesubscriberbyid)
  * [`appwriteclient.storage.createFile`](#appwriteclientstoragecreatefile)
  * [`appwriteclient.storage.deleteFileById`](#appwriteclientstoragedeletefilebyid)
  * [`appwriteclient.storage.getFileById`](#appwriteclientstoragegetfilebyid)
  * [`appwriteclient.storage.getFileDownload`](#appwriteclientstoragegetfiledownload)
  * [`appwriteclient.storage.getFileForView`](#appwriteclientstoragegetfileforview)
  * [`appwriteclient.storage.getFilePreviewImage`](#appwriteclientstoragegetfilepreviewimage)
  * [`appwriteclient.storage.listFiles`](#appwriteclientstoragelistfiles)
  * [`appwriteclient.storage.updateFileById`](#appwriteclientstorageupdatefilebyid)
  * [`appwriteclient.teams.createMembership`](#appwriteclientteamscreatemembership)
  * [`appwriteclient.teams.createNewTeam`](#appwriteclientteamscreatenewteam)
  * [`appwriteclient.teams.deleteMembership`](#appwriteclientteamsdeletemembership)
  * [`appwriteclient.teams.getById`](#appwriteclientteamsgetbyid)
  * [`appwriteclient.teams.getMembership`](#appwriteclientteamsgetmembership)
  * [`appwriteclient.teams.getPrefs`](#appwriteclientteamsgetprefs)
  * [`appwriteclient.teams.getUserMemberships`](#appwriteclientteamsgetusermemberships)
  * [`appwriteclient.teams.listMemberships`](#appwriteclientteamslistmemberships)
  * [`appwriteclient.teams.removeTeam`](#appwriteclientteamsremoveteam)
  * [`appwriteclient.teams.updateMembershipRoles`](#appwriteclientteamsupdatemembershiproles)
  * [`appwriteclient.teams.updateMembershipStatus`](#appwriteclientteamsupdatemembershipstatus)
  * [`appwriteclient.teams.updateNameById`](#appwriteclientteamsupdatenamebyid)
  * [`appwriteclient.teams.updatePrefsById`](#appwriteclientteamsupdateprefsbyid)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Appwrite&serviceName=Client&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { AppwriteClient } from "appwrite-client-typescript-sdk";

const appwriteclient = new AppwriteClient({
  // Defining the base path is optional and defaults to https://cloud.appwrite.io/v1
  // basePath: "https://cloud.appwrite.io/v1",
  jWT: "API_KEY",
  locale: "API_KEY",
  project: "API_KEY",
  session: "API_KEY",
});

const addAuthenticatorResponse = await appwriteclient.account.addAuthenticator({
  type: "totp",
});

console.log(addAuthenticatorResponse);
```

## Reference<a id="reference"></a>


### `appwriteclient.account.addAuthenticator`<a id="appwriteclientaccountaddauthenticator"></a>

Add an authenticator app to be used as an MFA factor. Verify the authenticator using the [verify authenticator](/docs/references/cloud/client-web/account#verifyAuthenticator) method.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addAuthenticatorResponse = await appwriteclient.account.addAuthenticator({
  type: "totp",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### type: `'totp'`<a id="type-totp"></a>

Type of authenticator. Must be `totp`

#### 🔄 Return<a id="🔄-return"></a>

[MfaType](./models/mfa-type.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/mfa/authenticators/{type}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.account.blockUserStatus`<a id="appwriteclientaccountblockuserstatus"></a>

Block the currently logged in user account. Behind the scene, the user record is not deleted but permanently blocked from any access. To completely delete a user, use the Users API instead.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const blockUserStatusResponse = await appwriteclient.account.blockUserStatus();
```

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/status` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.account.completeMfaChallenge`<a id="appwriteclientaccountcompletemfachallenge"></a>

Complete the MFA challenge by providing the one-time password. Finish the process of MFA verification by providing the one-time password. To begin the flow, use [createMfaChallenge](/docs/references/cloud/client-web/account#createMfaChallenge) method.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const completeMfaChallengeResponse =
  await appwriteclient.account.completeMfaChallenge({
    challengeId: "challengeId_example",
    otp: "otp_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### challengeId: `string`<a id="challengeid-string"></a>

ID of the challenge.

##### otp: `string`<a id="otp-string"></a>

Valid verification token.

#### 🔄 Return<a id="🔄-return"></a>

[Session](./models/session.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/mfa/challenge` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.account.completePasswordRecovery`<a id="appwriteclientaccountcompletepasswordrecovery"></a>

Use this endpoint to complete the user account password reset. Both the **userId** and **secret** arguments will be passed as query parameters to the redirect URL you have provided when sending your request to the [POST /account/recovery](https://appwrite.io/docs/references/cloud/client-web/account#createRecovery) endpoint.

Please note that in order to avoid a [Redirect Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md) the only valid redirect URLs are the ones from domains you have set when adding your platforms in the console interface.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const completePasswordRecoveryResponse =
  await appwriteclient.account.completePasswordRecovery({
    userId: "userId_example",
    secret: "secret_example",
    password: "password_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID.

##### secret: `string`<a id="secret-string"></a>

Valid reset token.

##### password: `string`<a id="password-string"></a>

New user password. Must be between 8 and 256 chars.

#### 🔄 Return<a id="🔄-return"></a>

[Token](./models/token.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/recovery` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.account.confirmPhoneVerification`<a id="appwriteclientaccountconfirmphoneverification"></a>

Use this endpoint to complete the user phone verification process. Use the **userId** and **secret** that were sent to your user's phone number to verify the user email ownership. If confirmed this route will return a 200 status code.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const confirmPhoneVerificationResponse =
  await appwriteclient.account.confirmPhoneVerification({
    userId: "userId_example",
    secret: "secret_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID.

##### secret: `string`<a id="secret-string"></a>

Valid verification token.

#### 🔄 Return<a id="🔄-return"></a>

[Token](./models/token.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/verification/phone` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.account.createAnonymousSession`<a id="appwriteclientaccountcreateanonymoussession"></a>

Use this endpoint to allow a new user to register an anonymous account in your project. This route will also create a new session for the user. To allow the new user to convert an anonymous account to a normal account, you need to update its [email and password](https://appwrite.io/docs/references/cloud/client-web/account#updateEmail) or create an [OAuth2 session](https://appwrite.io/docs/references/cloud/client-web/account#CreateOAuth2Session).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createAnonymousSessionResponse =
  await appwriteclient.account.createAnonymousSession();
```

#### 🔄 Return<a id="🔄-return"></a>

[Session](./models/session.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/sessions/anonymous` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.account.createEmailPasswordSession`<a id="appwriteclientaccountcreateemailpasswordsession"></a>

Allow the user to login into their account by providing a valid email and password combination. This route will create a new session for the user.

A user is limited to 10 active sessions at a time by default. [Learn more about session limits](https://appwrite.io/docs/authentication-security#limits).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createEmailPasswordSessionResponse =
  await appwriteclient.account.createEmailPasswordSession({
    email: "email_example",
    password: "password_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### email: `string`<a id="email-string"></a>

User email.

##### password: `string`<a id="password-string"></a>

User password. Must be at least 8 chars.

#### 🔄 Return<a id="🔄-return"></a>

[Session](./models/session.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/sessions/email` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.account.createEmailToken`<a id="appwriteclientaccountcreateemailtoken"></a>

Sends the user an email with a secret key for creating a session. If the provided user ID has not be registered, a new user will be created. Use the returned user ID and secret and submit a request to the [POST /v1/account/sessions/token](https://appwrite.io/docs/references/cloud/client-web/account#createSession) endpoint to complete the login process. The secret sent to the user's email is valid for 15 minutes.

A user is limited to 10 active sessions at a time by default. [Learn more about session limits](https://appwrite.io/docs/authentication-security#limits).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createEmailTokenResponse = await appwriteclient.account.createEmailToken({
  userId: "userId_example",
  email: "email_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### email: `string`<a id="email-string"></a>

User email.

##### phrase: `boolean`<a id="phrase-boolean"></a>

Toggle for security phrase. If enabled, email will be send with a randomly generated phrase and the phrase will also be included in the response. Confirming phrases match increases the security of your authentication flow.

#### 🔄 Return<a id="🔄-return"></a>

[Token](./models/token.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/tokens/email` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.account.createEmailVerification`<a id="appwriteclientaccountcreateemailverification"></a>

Use this endpoint to complete the user email verification process. Use both the **userId** and **secret** parameters that were attached to your app URL to verify the user email ownership. If confirmed this route will return a 200 status code.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createEmailVerificationResponse =
  await appwriteclient.account.createEmailVerification({
    userId: "userId_example",
    secret: "secret_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID.

##### secret: `string`<a id="secret-string"></a>

Valid verification token.

#### 🔄 Return<a id="🔄-return"></a>

[Token](./models/token.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/verification` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.account.createEmailVerification_0`<a id="appwriteclientaccountcreateemailverification_0"></a>

Use this endpoint to send a verification message to your user email address to confirm they are the valid owners of that address. Both the **userId** and **secret** arguments will be passed as query parameters to the URL you have provided to be attached to the verification email. The provided URL should redirect the user back to your app and allow you to complete the verification process by verifying both the **userId** and **secret** parameters. Learn more about how to [complete the verification process](https://appwrite.io/docs/references/cloud/client-web/account#updateVerification). The verification link sent to the user's email address is valid for 7 days.

Please note that in order to avoid a [Redirect Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md), the only valid redirect URLs are the ones from domains you have set when adding your platforms in the console interface.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createEmailVerification_0Response =
  await appwriteclient.account.createEmailVerification_0({
    url: "url_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### url: `string`<a id="url-string"></a>

URL to redirect the user back to your app from the verification email. Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.

#### 🔄 Return<a id="🔄-return"></a>

[Token](./models/token.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/verification` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.account.createJwt`<a id="appwriteclientaccountcreatejwt"></a>

Use this endpoint to create a JSON Web Token. You can use the resulting JWT to authenticate on behalf of the current user when working with the Appwrite server-side API and SDKs. The JWT secret is valid for 15 minutes from its creation and will be invalid if the user will logout in that time frame.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createJwtResponse = await appwriteclient.account.createJwt();
```

#### 🔄 Return<a id="🔄-return"></a>

[Jwt](./models/jwt.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/jwt` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.account.createMagicUrlToken`<a id="appwriteclientaccountcreatemagicurltoken"></a>

Sends the user an email with a secret key for creating a session. If the provided user ID has not been registered, a new user will be created. When the user clicks the link in the email, the user is redirected back to the URL you provided with the secret key and userId values attached to the URL query string. Use the query string parameters to submit a request to the [POST /v1/account/sessions/token](https://appwrite.io/docs/references/cloud/client-web/account#createSession) endpoint to complete the login process. The link sent to the user's email address is valid for 1 hour. If you are on a mobile device you can leave the URL parameter empty, so that the login completion will be handled by your Appwrite instance by default.

A user is limited to 10 active sessions at a time by default. [Learn more about session limits](https://appwrite.io/docs/authentication-security#limits).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createMagicUrlTokenResponse =
  await appwriteclient.account.createMagicUrlToken({
    userId: "userId_example",
    email: "email_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### email: `string`<a id="email-string"></a>

User email.

##### url: `string`<a id="url-string"></a>

URL to redirect the user back to your app from the magic URL login. Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.

##### phrase: `boolean`<a id="phrase-boolean"></a>

Toggle for security phrase. If enabled, email will be send with a randomly generated phrase and the phrase will also be included in the response. Confirming phrases match increases the security of your authentication flow.

#### 🔄 Return<a id="🔄-return"></a>

[Token](./models/token.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/tokens/magic-url` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.account.createMfaChallenge`<a id="appwriteclientaccountcreatemfachallenge"></a>

Begin the process of MFA verification after sign-in. Finish the flow with [updateMfaChallenge](/docs/references/cloud/client-web/account#updateMfaChallenge) method.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createMfaChallengeResponse =
  await appwriteclient.account.createMfaChallenge({
    factor: "email",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### factor: `string`<a id="factor-string"></a>

Factor used for verification. Must be one of following: `email`, `phone`, `totp`, `recoveryCode`.

#### 🔄 Return<a id="🔄-return"></a>

[MfaChallenge](./models/mfa-challenge.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/mfa/challenge` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.account.createMfaRecoveryCodes`<a id="appwriteclientaccountcreatemfarecoverycodes"></a>

Generate recovery codes as backup for MFA flow. It's recommended to generate and show then immediately after user successfully adds their authehticator. Recovery codes can be used as a MFA verification type in [createMfaChallenge](/docs/references/cloud/client-web/account#createMfaChallenge) method.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createMfaRecoveryCodesResponse =
  await appwriteclient.account.createMfaRecoveryCodes();
```

#### 🔄 Return<a id="🔄-return"></a>

[MfaRecoveryCodes](./models/mfa-recovery-codes.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/mfa/recovery-codes` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.account.createOAuth2Session`<a id="appwriteclientaccountcreateoauth2session"></a>

Allow the user to login to their account using the OAuth2 provider of their choice. Each OAuth2 provider should be enabled from the Appwrite console first. Use the success and failure arguments to provide a redirect URL's back to your app when login is completed.

If there is already an active session, the new session will be attached to the logged-in account. If there are no active sessions, the server will attempt to look for a user with the same email address as the email received from the OAuth2 provider and attach the new session to the existing user. If no matching user is found - the server will create a new user.

A user is limited to 10 active sessions at a time by default. [Learn more about session limits](https://appwrite.io/docs/authentication-security#limits).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createOAuth2SessionResponse =
  await appwriteclient.account.createOAuth2Session({
    provider: "amazon",
    success: "",
    failure: "",
    scopes: [],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### provider: `'amazon' | 'apple' | 'auth0' | 'authentik' | 'autodesk' | 'bitbucket' | 'bitly' | 'box' | 'dailymotion' | 'discord' | 'disqus' | 'dropbox' | 'etsy' | 'facebook' | 'github' | 'gitlab' | 'google' | 'linkedin' | 'microsoft' | 'notion' | 'oidc' | 'okta' | 'paypal' | 'paypalSandbox' | 'podio' | 'salesforce' | 'slack' | 'spotify' | 'stripe' | 'tradeshift' | 'tradeshiftBox' | 'twitch' | 'wordpress' | 'yahoo' | 'yammer' | 'yandex' | 'zoho' | 'zoom' | 'mock'`<a id="provider-amazon--apple--auth0--authentik--autodesk--bitbucket--bitly--box--dailymotion--discord--disqus--dropbox--etsy--facebook--github--gitlab--google--linkedin--microsoft--notion--oidc--okta--paypal--paypalsandbox--podio--salesforce--slack--spotify--stripe--tradeshift--tradeshiftbox--twitch--wordpress--yahoo--yammer--yandex--zoho--zoom--mock"></a>

OAuth2 Provider. Currently, supported providers are: amazon, apple, auth0, authentik, autodesk, bitbucket, bitly, box, dailymotion, discord, disqus, dropbox, etsy, facebook, github, gitlab, google, linkedin, microsoft, notion, oidc, okta, paypal, paypalSandbox, podio, salesforce, slack, spotify, stripe, tradeshift, tradeshiftBox, twitch, wordpress, yahoo, yammer, yandex, zoho, zoom.

##### success: `string`<a id="success-string"></a>

URL to redirect back to your app after a successful login attempt.  Only URLs from hostnames in your project\'s platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.

##### failure: `string`<a id="failure-string"></a>

URL to redirect back to your app after a failed login attempt.  Only URLs from hostnames in your project\'s platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.

##### scopes: `string`[]<a id="scopes-string"></a>

A list of custom OAuth2 scopes. Check each provider internal docs for a list of supported scopes. Maximum of 100 scopes are allowed, each 4096 characters long.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/sessions/oauth2/{provider}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.account.createOAuth2Token`<a id="appwriteclientaccountcreateoauth2token"></a>

Allow the user to login to their account using the OAuth2 provider of their choice. Each OAuth2 provider should be enabled from the Appwrite console first. Use the success and failure arguments to provide a redirect URL's back to your app when login is completed. 

If authentication succeeds, `userId` and `secret` of a token will be appended to the success URL as query parameters. These can be used to create a new session using the [Create session](https://appwrite.io/docs/references/cloud/client-web/account#createSession) endpoint.

A user is limited to 10 active sessions at a time by default. [Learn more about session limits](https://appwrite.io/docs/authentication-security#limits).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createOAuth2TokenResponse =
  await appwriteclient.account.createOAuth2Token({
    provider: "amazon",
    success: "",
    failure: "",
    scopes: [],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### provider: `'amazon' | 'apple' | 'auth0' | 'authentik' | 'autodesk' | 'bitbucket' | 'bitly' | 'box' | 'dailymotion' | 'discord' | 'disqus' | 'dropbox' | 'etsy' | 'facebook' | 'github' | 'gitlab' | 'google' | 'linkedin' | 'microsoft' | 'notion' | 'oidc' | 'okta' | 'paypal' | 'paypalSandbox' | 'podio' | 'salesforce' | 'slack' | 'spotify' | 'stripe' | 'tradeshift' | 'tradeshiftBox' | 'twitch' | 'wordpress' | 'yahoo' | 'yammer' | 'yandex' | 'zoho' | 'zoom' | 'mock'`<a id="provider-amazon--apple--auth0--authentik--autodesk--bitbucket--bitly--box--dailymotion--discord--disqus--dropbox--etsy--facebook--github--gitlab--google--linkedin--microsoft--notion--oidc--okta--paypal--paypalsandbox--podio--salesforce--slack--spotify--stripe--tradeshift--tradeshiftbox--twitch--wordpress--yahoo--yammer--yandex--zoho--zoom--mock"></a>

OAuth2 Provider. Currently, supported providers are: amazon, apple, auth0, authentik, autodesk, bitbucket, bitly, box, dailymotion, discord, disqus, dropbox, etsy, facebook, github, gitlab, google, linkedin, microsoft, notion, oidc, okta, paypal, paypalSandbox, podio, salesforce, slack, spotify, stripe, tradeshift, tradeshiftBox, twitch, wordpress, yahoo, yammer, yandex, zoho, zoom.

##### success: `string`<a id="success-string"></a>

URL to redirect back to your app after a successful login attempt.  Only URLs from hostnames in your project\'s platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.

##### failure: `string`<a id="failure-string"></a>

URL to redirect back to your app after a failed login attempt.  Only URLs from hostnames in your project\'s platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.

##### scopes: `string`[]<a id="scopes-string"></a>

A list of custom OAuth2 scopes. Check each provider internal docs for a list of supported scopes. Maximum of 100 scopes are allowed, each 4096 characters long.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/tokens/oauth2/{provider}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.account.createPasswordRecovery`<a id="appwriteclientaccountcreatepasswordrecovery"></a>

Sends the user an email with a temporary secret key for password reset. When the user clicks the confirmation link he is redirected back to your app password reset URL with the secret key and email address values attached to the URL query string. Use the query string params to submit a request to the [PUT /account/recovery](https://appwrite.io/docs/references/cloud/client-web/account#updateRecovery) endpoint to complete the process. The verification link sent to the user's email address is valid for 1 hour.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createPasswordRecoveryResponse =
  await appwriteclient.account.createPasswordRecovery({
    email: "email_example",
    url: "url_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### email: `string`<a id="email-string"></a>

User email.

##### url: `string`<a id="url-string"></a>

URL to redirect the user back to your app from the recovery email. Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.

#### 🔄 Return<a id="🔄-return"></a>

[Token](./models/token.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/recovery` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.account.createPhoneToken`<a id="appwriteclientaccountcreatephonetoken"></a>

Sends the user an SMS with a secret key for creating a session. If the provided user ID has not be registered, a new user will be created. Use the returned user ID and secret and submit a request to the [POST /v1/account/sessions/token](https://appwrite.io/docs/references/cloud/client-web/account#createSession) endpoint to complete the login process. The secret sent to the user's phone is valid for 15 minutes.

A user is limited to 10 active sessions at a time by default. [Learn more about session limits](https://appwrite.io/docs/authentication-security#limits).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createPhoneTokenResponse = await appwriteclient.account.createPhoneToken({
  userId: "userId_example",
  phone: "phone_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### phone: `string`<a id="phone-string"></a>

Phone number. Format this number with a leading \\\'+\\\' and a country code, e.g., +16175551212.

#### 🔄 Return<a id="🔄-return"></a>

[Token](./models/token.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/tokens/phone` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.account.createPhoneVerification`<a id="appwriteclientaccountcreatephoneverification"></a>

Use this endpoint to send a verification SMS to the currently logged in user. This endpoint is meant for use after updating a user's phone number using the [accountUpdatePhone](https://appwrite.io/docs/references/cloud/client-web/account#updatePhone) endpoint. Learn more about how to [complete the verification process](https://appwrite.io/docs/references/cloud/client-web/account#updatePhoneVerification). The verification code sent to the user's phone number is valid for 15 minutes.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createPhoneVerificationResponse =
  await appwriteclient.account.createPhoneVerification();
```

#### 🔄 Return<a id="🔄-return"></a>

[Token](./models/token.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/verification/phone` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.account.createPushTarget`<a id="appwriteclientaccountcreatepushtarget"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createPushTargetResponse = await appwriteclient.account.createPushTarget({
  targetId: "targetId_example",
  identifier: "identifier_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### targetId: `string`<a id="targetid-string"></a>

Target ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### identifier: `string`<a id="identifier-string"></a>

The target identifier (token, email, phone etc.)

##### providerId: `string`<a id="providerid-string"></a>

Provider ID. Message will be sent to this target from the specified provider ID. If no provider ID is set the first setup provider will be used.

#### 🔄 Return<a id="🔄-return"></a>

[Target](./models/target.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/targets/push` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.account.createSessionFromToken`<a id="appwriteclientaccountcreatesessionfromtoken"></a>

Use this endpoint to create a session from token. Provide the **userId** and **secret** parameters from the successful response of authentication flows initiated by token creation. For example, magic URL and phone login.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createSessionFromTokenResponse =
  await appwriteclient.account.createSessionFromToken({
    userId: "userId_example",
    secret: "secret_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### secret: `string`<a id="secret-string"></a>

Secret of a token generated by login methods. For example, the `createMagicURLToken` or `createPhoneToken` methods.

#### 🔄 Return<a id="🔄-return"></a>

[Session](./models/session.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/sessions/token` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.account.deleteAuthenticator`<a id="appwriteclientaccountdeleteauthenticator"></a>

Delete an authenticator for a user by ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteAuthenticatorResponse =
  await appwriteclient.account.deleteAuthenticator({
    type: "totp",
    otp: "otp_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### otp: `string`<a id="otp-string"></a>

Valid verification token.

##### type: `'totp'`<a id="type-totp"></a>

Type of authenticator.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/mfa/authenticators/{type}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.account.deleteIdentityById`<a id="appwriteclientaccountdeleteidentitybyid"></a>

Delete an identity by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteIdentityByIdResponse =
  await appwriteclient.account.deleteIdentityById({
    identityId: "identityId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### identityId: `string`<a id="identityid-string"></a>

Identity ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/identities/{identityId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.account.deletePushTarget`<a id="appwriteclientaccountdeletepushtarget"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deletePushTargetResponse = await appwriteclient.account.deletePushTarget({
  targetId: "targetId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### targetId: `string`<a id="targetid-string"></a>

Target ID.

#### 🔄 Return<a id="🔄-return"></a>

[Target](./models/target.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/targets/{targetId}/push` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.account.extendSessionLength`<a id="appwriteclientaccountextendsessionlength"></a>

Use this endpoint to extend a session's length. Extending a session is useful when session expiry is short. If the session was created using an OAuth provider, this endpoint refreshes the access token from the provider.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const extendSessionLengthResponse =
  await appwriteclient.account.extendSessionLength({
    sessionId: "sessionId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sessionId: `string`<a id="sessionid-string"></a>

Session ID. Use the string \'current\' to update the current device session.

#### 🔄 Return<a id="🔄-return"></a>

[Session](./models/session.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/sessions/{sessionId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.account.getCurrentUser`<a id="appwriteclientaccountgetcurrentuser"></a>

Get the currently logged in user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCurrentUserResponse = await appwriteclient.account.getCurrentUser();
```

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.account.getMfaRecoveryCodes`<a id="appwriteclientaccountgetmfarecoverycodes"></a>

Get recovery codes that can be used as backup for MFA flow. Before getting codes, they must be generated using [createMfaRecoveryCodes](/docs/references/cloud/client-web/account#createMfaRecoveryCodes) method. An OTP challenge is required to read recovery codes.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMfaRecoveryCodesResponse =
  await appwriteclient.account.getMfaRecoveryCodes();
```

#### 🔄 Return<a id="🔄-return"></a>

[MfaRecoveryCodes](./models/mfa-recovery-codes.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/mfa/recovery-codes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.account.getPrefs`<a id="appwriteclientaccountgetprefs"></a>

Get the preferences as a key-value object for the currently logged in user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPrefsResponse = await appwriteclient.account.getPrefs();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/prefs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.account.getSession`<a id="appwriteclientaccountgetsession"></a>

Use this endpoint to get a logged in user's session using a Session ID. Inputting 'current' will return the current session being used.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSessionResponse = await appwriteclient.account.getSession({
  sessionId: "sessionId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sessionId: `string`<a id="sessionid-string"></a>

Session ID. Use the string \'current\' to get the current device session.

#### 🔄 Return<a id="🔄-return"></a>

[Session](./models/session.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/sessions/{sessionId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.account.listIdentities`<a id="appwriteclientaccountlistidentities"></a>

Get the list of identities for the currently logged in user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listIdentitiesResponse = await appwriteclient.account.listIdentities({
  queries: [],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, provider, providerUid, providerEmail, providerAccessTokenExpiry

#### 🔄 Return<a id="🔄-return"></a>

[IdentityList](./models/identity-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/identities` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.account.listLogs`<a id="appwriteclientaccountlistlogs"></a>

Get the list of latest security activity logs for the currently logged in user. Each log returns user IP address, location and date and time of log.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listLogsResponse = await appwriteclient.account.listLogs({
  queries: [],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset

#### 🔄 Return<a id="🔄-return"></a>

[LogList](./models/log-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/logs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.account.listMfaFactors`<a id="appwriteclientaccountlistmfafactors"></a>

List the factors available on the account to be used as a MFA challange.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listMfaFactorsResponse = await appwriteclient.account.listMfaFactors();
```

#### 🔄 Return<a id="🔄-return"></a>

[MfaFactors](./models/mfa-factors.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/mfa/factors` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.account.listSessions`<a id="appwriteclientaccountlistsessions"></a>

Get the list of active sessions across different devices for the currently logged in user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listSessionsResponse = await appwriteclient.account.listSessions();
```

#### 🔄 Return<a id="🔄-return"></a>

[SessionList](./models/session-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/sessions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.account.logoutSessionById`<a id="appwriteclientaccountlogoutsessionbyid"></a>

Logout the user. Use 'current' as the session ID to logout on this device, use a session ID to logout on another device. If you're looking to logout the user on all devices, use [Delete Sessions](https://appwrite.io/docs/references/cloud/client-web/account#deleteSessions) instead.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const logoutSessionByIdResponse =
  await appwriteclient.account.logoutSessionById({
    sessionId: "sessionId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sessionId: `string`<a id="sessionid-string"></a>

Session ID. Use the string \'current\' to delete the current device session.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/sessions/{sessionId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.account.regenerateMfaRecoveryCodes`<a id="appwriteclientaccountregeneratemfarecoverycodes"></a>

Regenerate recovery codes that can be used as backup for MFA flow. Before regenerating codes, they must be first generated using [createMfaRecoveryCodes](/docs/references/cloud/client-web/account#createMfaRecoveryCodes) method. An OTP challenge is required to regenreate recovery codes.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const regenerateMfaRecoveryCodesResponse =
  await appwriteclient.account.regenerateMfaRecoveryCodes();
```

#### 🔄 Return<a id="🔄-return"></a>

[MfaRecoveryCodes](./models/mfa-recovery-codes.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/mfa/recovery-codes` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.account.registerUser`<a id="appwriteclientaccountregisteruser"></a>

Use this endpoint to allow a new user to register a new account in your project. After the user registration completes successfully, you can use the [/account/verfication](https://appwrite.io/docs/references/cloud/client-web/account#createVerification) route to start verifying the user email address. To allow the new user to login to their new account, you need to create a new [account session](https://appwrite.io/docs/references/cloud/client-web/account#createEmailSession).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const registerUserResponse = await appwriteclient.account.registerUser({
  userId: "userId_example",
  email: "email_example",
  password: "password_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### email: `string`<a id="email-string"></a>

User email.

##### password: `string`<a id="password-string"></a>

New user password. Must be between 8 and 256 chars.

##### name: `string`<a id="name-string"></a>

User name. Max length: 128 chars.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.account.removeSessions`<a id="appwriteclientaccountremovesessions"></a>

Delete all sessions from the user account and remove any sessions cookies from the end client.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeSessionsResponse = await appwriteclient.account.removeSessions();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/sessions` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.account.updateMagicUrlSession`<a id="appwriteclientaccountupdatemagicurlsession"></a>

Use this endpoint to create a session from token. Provide the **userId** and **secret** parameters from the successful response of authentication flows initiated by token creation. For example, magic URL and phone login.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateMagicUrlSessionResponse =
  await appwriteclient.account.updateMagicUrlSession({
    userId: "userId_example",
    secret: "secret_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### secret: `string`<a id="secret-string"></a>

Valid verification token.

#### 🔄 Return<a id="🔄-return"></a>

[Session](./models/session.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/sessions/magic-url` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.account.updateMfaStatus`<a id="appwriteclientaccountupdatemfastatus"></a>

Enable or disable MFA on an account.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateMfaStatusResponse = await appwriteclient.account.updateMfaStatus({
  mfa: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### mfa: `boolean`<a id="mfa-boolean"></a>

Enable or disable MFA.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/mfa` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.account.updateNameOperation`<a id="appwriteclientaccountupdatenameoperation"></a>

Update currently logged in user account name.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateNameOperationResponse =
  await appwriteclient.account.updateNameOperation({
    name: "name_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

User name. Max length: 128 chars.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/name` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.account.updatePassword`<a id="appwriteclientaccountupdatepassword"></a>

Update currently logged in user password. For validation, user is required to pass in the new password, and the old password. For users created with OAuth, Team Invites and Magic URL, oldPassword is optional.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePasswordResponse = await appwriteclient.account.updatePassword({
  password: "password_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### password: `string`<a id="password-string"></a>

New user password. Must be at least 8 chars.

##### oldPassword: `string`<a id="oldpassword-string"></a>

Current user password. Must be at least 8 chars.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/password` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.account.updatePhone`<a id="appwriteclientaccountupdatephone"></a>

Update the currently logged in user's phone number. After updating the phone number, the phone verification status will be reset. A confirmation SMS is not sent automatically, however you can use the [POST /account/verification/phone](https://appwrite.io/docs/references/cloud/client-web/account#createPhoneVerification) endpoint to send a confirmation SMS.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePhoneResponse = await appwriteclient.account.updatePhone({
  phone: "phone_example",
  password: "password_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### phone: `string`<a id="phone-string"></a>

Phone number. Format this number with a leading \\\'+\\\' and a country code, e.g., +16175551212.

##### password: `string`<a id="password-string"></a>

User password. Must be at least 8 chars.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/phone` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.account.updatePhoneSession`<a id="appwriteclientaccountupdatephonesession"></a>

Use this endpoint to create a session from token. Provide the **userId** and **secret** parameters from the successful response of authentication flows initiated by token creation. For example, magic URL and phone login.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePhoneSessionResponse =
  await appwriteclient.account.updatePhoneSession({
    userId: "userId_example",
    secret: "secret_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### secret: `string`<a id="secret-string"></a>

Valid verification token.

#### 🔄 Return<a id="🔄-return"></a>

[Session](./models/session.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/sessions/phone` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.account.updatePreferences`<a id="appwriteclientaccountupdatepreferences"></a>

Update currently logged in user account preferences. The object you pass is stored as is, and replaces any previous value. The maximum allowed prefs size is 64kB and throws error if exceeded.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePreferencesResponse =
  await appwriteclient.account.updatePreferences({
    prefs: {},
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### prefs: `object`<a id="prefs-object"></a>

Prefs key-value JSON object.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/prefs` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.account.updatePushTarget`<a id="appwriteclientaccountupdatepushtarget"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePushTargetResponse = await appwriteclient.account.updatePushTarget({
  targetId: "targetId_example",
  identifier: "identifier_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### identifier: `string`<a id="identifier-string"></a>

The target identifier (token, email, phone etc.)

##### targetId: `string`<a id="targetid-string"></a>

Target ID.

#### 🔄 Return<a id="🔄-return"></a>

[Target](./models/target.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/targets/{targetId}/push` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.account.updateUserEmail`<a id="appwriteclientaccountupdateuseremail"></a>

Update currently logged in user account email address. After changing user address, the user confirmation status will get reset. A new confirmation email is not sent automatically however you can use the send confirmation email endpoint again to send the confirmation email. For security measures, user password is required to complete this request.
This endpoint can also be used to convert an anonymous account to a normal one, by passing an email address and a new password.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateUserEmailResponse = await appwriteclient.account.updateUserEmail({
  email: "email_example",
  password: "password_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### email: `string`<a id="email-string"></a>

User email.

##### password: `string`<a id="password-string"></a>

User password. Must be at least 8 chars.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/email` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.account.verifyAuthenticator`<a id="appwriteclientaccountverifyauthenticator"></a>

Verify an authenticator app after adding it using the [add authenticator](/docs/references/cloud/client-web/account#addAuthenticator) method.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const verifyAuthenticatorResponse =
  await appwriteclient.account.verifyAuthenticator({
    type: "totp",
    otp: "otp_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### otp: `string`<a id="otp-string"></a>

Valid verification token.

##### type: `'totp'`<a id="type-totp"></a>

Type of authenticator.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/mfa/authenticators/{type}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.avatars.generateQrCodeImage`<a id="appwriteclientavatarsgenerateqrcodeimage"></a>

Converts a given plain text to a QR code image. You can use the query parameters to change the size and style of the resulting image.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateQrCodeImageResponse =
  await appwriteclient.avatars.generateQrCodeImage({
    text: "text_example",
    size: 400,
    margin: 1,
    download: false,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### text: `string`<a id="text-string"></a>

Plain text to be converted to QR code image.

##### size: `number`<a id="size-number"></a>

QR code size. Pass an integer between 1 to 1000. Defaults to 400.

##### margin: `number`<a id="margin-number"></a>

Margin from edge. Pass an integer between 0 to 10. Defaults to 1.

##### download: `boolean`<a id="download-boolean"></a>

Return resulting image with \'Content-Disposition: attachment \' headers for the browser to start downloading it. Pass 0 for no header, or 1 for otherwise. Default value is set to 0.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/avatars/qr` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.avatars.getBrowserIconByCode`<a id="appwriteclientavatarsgetbrowsericonbycode"></a>

You can use this endpoint to show different browser icons to your users. The code argument receives the browser code as it appears in your user [GET /account/sessions](https://appwrite.io/docs/references/cloud/client-web/account#getSessions) endpoint. Use width, height and quality arguments to change the output settings.

When one dimension is specified and the other is 0, the image is scaled with preserved aspect ratio. If both dimensions are 0, the API provides an image at source quality. If dimensions are not specified, the default size of image returned is 100x100px.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBrowserIconByCodeResponse =
  await appwriteclient.avatars.getBrowserIconByCode({
    code: "aa",
    width: 100,
    height: 100,
    quality: 100,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### code: `'aa' | 'an' | 'ch' | 'ci' | 'cm' | 'cr' | 'ff' | 'sf' | 'mf' | 'ps' | 'oi' | 'om' | 'op' | 'true'`<a id="code-aa--an--ch--ci--cm--cr--ff--sf--mf--ps--oi--om--op--true"></a>

Browser Code.

##### width: `number`<a id="width-number"></a>

Image width. Pass an integer between 0 to 2000. Defaults to 100.

##### height: `number`<a id="height-number"></a>

Image height. Pass an integer between 0 to 2000. Defaults to 100.

##### quality: `number`<a id="quality-number"></a>

Image quality. Pass an integer between 0 to 100. Defaults to 100.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/avatars/browsers/{code}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.avatars.getCountryFlagByCode`<a id="appwriteclientavatarsgetcountryflagbycode"></a>

You can use this endpoint to show different country flags icons to your users. The code argument receives the 2 letter country code. Use width, height and quality arguments to change the output settings. Country codes follow the [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1) standard.

When one dimension is specified and the other is 0, the image is scaled with preserved aspect ratio. If both dimensions are 0, the API provides an image at source quality. If dimensions are not specified, the default size of image returned is 100x100px.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCountryFlagByCodeResponse =
  await appwriteclient.avatars.getCountryFlagByCode({
    code: "af",
    width: 100,
    height: 100,
    quality: 100,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### code: `'af' | 'ao' | 'al' | 'ad' | 'ae' | 'ar' | 'am' | 'ag' | 'au' | 'at' | 'az' | 'bi' | 'be' | 'bj' | 'bf' | 'bd' | 'bg' | 'bh' | 'bs' | 'ba' | 'by' | 'bz' | 'bo' | 'br' | 'bb' | 'bn' | 'bt' | 'bw' | 'cf' | 'ca' | 'ch' | 'cl' | 'cn' | 'ci' | 'cm' | 'cd' | 'cg' | 'co' | 'km' | 'cv' | 'cr' | 'cu' | 'cy' | 'cz' | 'de' | 'dj' | 'dm' | 'dk' | 'do' | 'dz' | 'ec' | 'eg' | 'er' | 'es' | 'ee' | 'et' | 'fi' | 'fj' | 'fr' | 'fm' | 'ga' | 'gb' | 'ge' | 'gh' | 'gn' | 'gm' | 'gw' | 'gq' | 'gr' | 'gd' | 'gt' | 'gy' | 'hn' | 'hr' | 'ht' | 'hu' | 'id' | 'in' | 'ie' | 'ir' | 'iq' | 'is' | 'il' | 'it' | 'jm' | 'jo' | 'jp' | 'kz' | 'ke' | 'kg' | 'kh' | 'ki' | 'kn' | 'kr' | 'kw' | 'la' | 'lb' | 'lr' | 'ly' | 'lc' | 'li' | 'lk' | 'ls' | 'lt' | 'lu' | 'lv' | 'ma' | 'mc' | 'md' | 'mg' | 'mv' | 'mx' | 'mh' | 'mk' | 'ml' | 'mt' | 'mm' | 'me' | 'mn' | 'mz' | 'mr' | 'mu' | 'mw' | 'my' | 'na' | 'ne' | 'ng' | 'ni' | 'nl' | 'false' | 'np' | 'nr' | 'nz' | 'om' | 'pk' | 'pa' | 'pe' | 'ph' | 'pw' | 'pg' | 'pl' | 'kp' | 'pt' | 'py' | 'qa' | 'ro' | 'ru' | 'rw' | 'sa' | 'sd' | 'sn' | 'sg' | 'sb' | 'sl' | 'sv' | 'sm' | 'so' | 'rs' | 'ss' | 'st' | 'sr' | 'sk' | 'si' | 'se' | 'sz' | 'sc' | 'sy' | 'td' | 'tg' | 'th' | 'tj' | 'tm' | 'tl' | 'to' | 'tt' | 'tn' | 'tr' | 'tv' | 'tz' | 'ug' | 'ua' | 'uy' | 'us' | 'uz' | 'va' | 'vc' | 've' | 'vn' | 'vu' | 'ws' | 'ye' | 'za' | 'zm' | 'zw'`<a id="code-af--ao--al--ad--ae--ar--am--ag--au--at--az--bi--be--bj--bf--bd--bg--bh--bs--ba--by--bz--bo--br--bb--bn--bt--bw--cf--ca--ch--cl--cn--ci--cm--cd--cg--co--km--cv--cr--cu--cy--cz--de--dj--dm--dk--do--dz--ec--eg--er--es--ee--et--fi--fj--fr--fm--ga--gb--ge--gh--gn--gm--gw--gq--gr--gd--gt--gy--hn--hr--ht--hu--id--in--ie--ir--iq--is--il--it--jm--jo--jp--kz--ke--kg--kh--ki--kn--kr--kw--la--lb--lr--ly--lc--li--lk--ls--lt--lu--lv--ma--mc--md--mg--mv--mx--mh--mk--ml--mt--mm--me--mn--mz--mr--mu--mw--my--na--ne--ng--ni--nl--false--np--nr--nz--om--pk--pa--pe--ph--pw--pg--pl--kp--pt--py--qa--ro--ru--rw--sa--sd--sn--sg--sb--sl--sv--sm--so--rs--ss--st--sr--sk--si--se--sz--sc--sy--td--tg--th--tj--tm--tl--to--tt--tn--tr--tv--tz--ug--ua--uy--us--uz--va--vc--ve--vn--vu--ws--ye--za--zm--zw"></a>

Country Code. ISO Alpha-2 country code format.

##### width: `number`<a id="width-number"></a>

Image width. Pass an integer between 0 to 2000. Defaults to 100.

##### height: `number`<a id="height-number"></a>

Image height. Pass an integer between 0 to 2000. Defaults to 100.

##### quality: `number`<a id="quality-number"></a>

Image quality. Pass an integer between 0 to 100. Defaults to 100.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/avatars/flags/{code}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.avatars.getCreditCardIcon`<a id="appwriteclientavatarsgetcreditcardicon"></a>

The credit card endpoint will return you the icon of the credit card provider you need. Use width, height and quality arguments to change the output settings.

When one dimension is specified and the other is 0, the image is scaled with preserved aspect ratio. If both dimensions are 0, the API provides an image at source quality. If dimensions are not specified, the default size of image returned is 100x100px.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCreditCardIconResponse =
  await appwriteclient.avatars.getCreditCardIcon({
    code: "amex",
    width: 100,
    height: 100,
    quality: 100,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### code: `'amex' | 'argencard' | 'cabal' | 'censosud' | 'diners' | 'discover' | 'elo' | 'hipercard' | 'jcb' | 'mastercard' | 'naranja' | 'targeta-shopping' | 'union-china-pay' | 'visa' | 'mir' | 'maestro'`<a id="code-amex--argencard--cabal--censosud--diners--discover--elo--hipercard--jcb--mastercard--naranja--targeta-shopping--union-china-pay--visa--mir--maestro"></a>

Credit Card Code. Possible values: amex, argencard, cabal, censosud, diners, discover, elo, hipercard, jcb, mastercard, naranja, targeta-shopping, union-china-pay, visa, mir, maestro.

##### width: `number`<a id="width-number"></a>

Image width. Pass an integer between 0 to 2000. Defaults to 100.

##### height: `number`<a id="height-number"></a>

Image height. Pass an integer between 0 to 2000. Defaults to 100.

##### quality: `number`<a id="quality-number"></a>

Image quality. Pass an integer between 0 to 100. Defaults to 100.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/avatars/credit-cards/{code}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.avatars.getFavicon`<a id="appwriteclientavatarsgetfavicon"></a>

Use this endpoint to fetch the favorite icon (AKA favicon) of any remote website URL.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFaviconResponse = await appwriteclient.avatars.getFavicon({
  url: "url_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### url: `string`<a id="url-string"></a>

Website URL which you want to fetch the favicon from.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/avatars/favicon` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.avatars.getRemoteImage`<a id="appwriteclientavatarsgetremoteimage"></a>

Use this endpoint to fetch a remote image URL and crop it to any image size you want. This endpoint is very useful if you need to crop and display remote images in your app or in case you want to make sure a 3rd party image is properly served using a TLS protocol.

When one dimension is specified and the other is 0, the image is scaled with preserved aspect ratio. If both dimensions are 0, the API provides an image at source quality. If dimensions are not specified, the default size of image returned is 400x400px.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getRemoteImageResponse = await appwriteclient.avatars.getRemoteImage({
  url: "url_example",
  width: 400,
  height: 400,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### url: `string`<a id="url-string"></a>

Image URL which you want to crop.

##### width: `number`<a id="width-number"></a>

Resize preview image width, Pass an integer between 0 to 2000. Defaults to 400.

##### height: `number`<a id="height-number"></a>

Resize preview image height, Pass an integer between 0 to 2000. Defaults to 400.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/avatars/image` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.avatars.getUserInitials`<a id="appwriteclientavatarsgetuserinitials"></a>

Use this endpoint to show your user initials avatar icon on your website or app. By default, this route will try to print your logged-in user name or email initials. You can also overwrite the user name if you pass the 'name' parameter. If no name is given and no user is logged, an empty avatar will be returned.

You can use the color and background params to change the avatar colors. By default, a random theme will be selected. The random theme will persist for the user's initials when reloading the same theme will always return for the same initials.

When one dimension is specified and the other is 0, the image is scaled with preserved aspect ratio. If both dimensions are 0, the API provides an image at source quality. If dimensions are not specified, the default size of image returned is 100x100px.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserInitialsResponse = await appwriteclient.avatars.getUserInitials({
  name: "",
  width: 500,
  height: 500,
  background: "",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Full Name. When empty, current user name or email will be used. Max length: 128 chars.

##### width: `number`<a id="width-number"></a>

Image width. Pass an integer between 0 to 2000. Defaults to 100.

##### height: `number`<a id="height-number"></a>

Image height. Pass an integer between 0 to 2000. Defaults to 100.

##### background: `string`<a id="background-string"></a>

Changes background color. By default a random color will be picked and stay will persistent to the given name.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/avatars/initials` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.databases.createDocument`<a id="appwriteclientdatabasescreatedocument"></a>

Create a new Document. Before using this route, you should create a new collection resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection) API or directly from your database console.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createDocumentResponse = await appwriteclient.databases.createDocument({
  databaseId: "databaseId_example",
  collectionId: "collectionId_example",
  documentId: "documentId_example",
  data: {},
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### documentId: `string`<a id="documentid-string"></a>

Document ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### data: `object`<a id="data-object"></a>

Document data as JSON object.

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). Make sure to define attributes before creating documents.

##### permissions: `string`[]<a id="permissions-string"></a>

An array of permissions strings. By default, only the current user is granted all permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).

#### 🔄 Return<a id="🔄-return"></a>

[Document](./models/document.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/documents` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.databases.deleteDocumentById`<a id="appwriteclientdatabasesdeletedocumentbyid"></a>

Delete a document by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteDocumentByIdResponse =
  await appwriteclient.databases.deleteDocumentById({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    documentId: "documentId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### documentId: `string`<a id="documentid-string"></a>

Document ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/documents/{documentId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.databases.getDocumentById`<a id="appwriteclientdatabasesgetdocumentbyid"></a>

Get a document by its unique ID. This endpoint response returns a JSON object with the document data.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDocumentByIdResponse = await appwriteclient.databases.getDocumentById({
  databaseId: "databaseId_example",
  collectionId: "collectionId_example",
  documentId: "documentId_example",
  queries: [],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### documentId: `string`<a id="documentid-string"></a>

Document ID.

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.

#### 🔄 Return<a id="🔄-return"></a>

[Document](./models/document.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/documents/{documentId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.databases.listUserDocuments`<a id="appwriteclientdatabaseslistuserdocuments"></a>

Get a list of all the user's documents in a given collection. You can use the query params to filter your results.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listUserDocumentsResponse =
  await appwriteclient.databases.listUserDocuments({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    queries: [],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.

#### 🔄 Return<a id="🔄-return"></a>

[DocumentList](./models/document-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/documents` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.databases.updateDocumentById`<a id="appwriteclientdatabasesupdatedocumentbyid"></a>

Update a document by its unique ID. Using the patch method you can pass only specific fields that will get updated.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateDocumentByIdResponse =
  await appwriteclient.databases.updateDocumentById({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    documentId: "documentId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID.

##### documentId: `string`<a id="documentid-string"></a>

Document ID.

##### data: `object`<a id="data-object"></a>

Document data as JSON object. Include only attribute and value pairs to be updated.

##### permissions: `string`[]<a id="permissions-string"></a>

An array of permissions strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).

#### 🔄 Return<a id="🔄-return"></a>

[Document](./models/document.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/documents/{documentId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.functions.getExecutionLog`<a id="appwriteclientfunctionsgetexecutionlog"></a>

Get a function execution log by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getExecutionLogResponse = await appwriteclient.functions.getExecutionLog({
  functionId: "functionId_example",
  executionId: "executionId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### functionId: `string`<a id="functionid-string"></a>

Function ID.

##### executionId: `string`<a id="executionid-string"></a>

Execution ID.

#### 🔄 Return<a id="🔄-return"></a>

[Execution](./models/execution.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/functions/{functionId}/executions/{executionId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.functions.listExecutions`<a id="appwriteclientfunctionslistexecutions"></a>

Get a list of all the current user function execution logs. You can use the query params to filter your results.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listExecutionsResponse = await appwriteclient.functions.listExecutions({
  functionId: "functionId_example",
  queries: [],
  search: "",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### functionId: `string`<a id="functionid-string"></a>

Function ID.

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: trigger, status, responseStatusCode, duration

##### search: `string`<a id="search-string"></a>

Search term to filter your list results. Max length: 256 chars.

#### 🔄 Return<a id="🔄-return"></a>

[ExecutionList](./models/execution-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/functions/{functionId}/executions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.functions.triggerFunctionExecution`<a id="appwriteclientfunctionstriggerfunctionexecution"></a>

Trigger a function execution. The returned object will return you the current execution status. You can ping the `Get Execution` endpoint to get updates on the current execution status. Once this endpoint is called, your function execution process will start asynchronously.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const triggerFunctionExecutionResponse =
  await appwriteclient.functions.triggerFunctionExecution({
    functionId: "functionId_example",
    method: "GET",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### functionId: `string`<a id="functionid-string"></a>

Function ID.

##### body: `string`<a id="body-string"></a>

HTTP body of execution. Default value is empty string.

##### async: `boolean`<a id="async-boolean"></a>

Execute code in the background. Default value is false.

##### path: `string`<a id="path-string"></a>

HTTP path of execution. Path can include query params. Default value is /

##### method: `string`<a id="method-string"></a>

HTTP method of execution. Default value is GET.

##### headers: `object`<a id="headers-object"></a>

HTTP headers of execution. Defaults to empty.

#### 🔄 Return<a id="🔄-return"></a>

[Execution](./models/execution.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/functions/{functionId}/executions` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.graphql.executeMutation`<a id="appwriteclientgraphqlexecutemutation"></a>

Execute a GraphQL mutation.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const executeMutationResponse = await appwriteclient.graphql.executeMutation();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/graphql` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.graphql.executeMutationOperation`<a id="appwriteclientgraphqlexecutemutationoperation"></a>

Execute a GraphQL mutation.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const executeMutationOperationResponse =
  await appwriteclient.graphql.executeMutationOperation();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/graphql/mutation` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.locale.getCurrencies`<a id="appwriteclientlocalegetcurrencies"></a>

List of all currencies, including currency symbol, name, plural, and decimal digits for all major and minor currencies. You can use the locale header to get the data in a supported language.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCurrenciesResponse = await appwriteclient.locale.getCurrencies();
```

#### 🔄 Return<a id="🔄-return"></a>

[CurrencyList](./models/currency-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/locale/currencies` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.locale.getEUCountries`<a id="appwriteclientlocalegeteucountries"></a>

List of all countries that are currently members of the EU. You can use the locale header to get the data in a supported language.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getEUCountriesResponse = await appwriteclient.locale.getEUCountries();
```

#### 🔄 Return<a id="🔄-return"></a>

[CountryList](./models/country-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/locale/countries/eu` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.locale.getUserLocale`<a id="appwriteclientlocalegetuserlocale"></a>

Get the current user location based on IP. Returns an object with user country code, country name, continent name, continent code, ip address and suggested currency. You can use the locale header to get the data in a supported language.

([IP Geolocation by DB-IP](https://db-ip.com))

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserLocaleResponse = await appwriteclient.locale.getUserLocale();
```

#### 🔄 Return<a id="🔄-return"></a>

[Locale](./models/locale.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/locale` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.locale.listCodes`<a id="appwriteclientlocalelistcodes"></a>

List of all locale codes in [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCodesResponse = await appwriteclient.locale.listCodes();
```

#### 🔄 Return<a id="🔄-return"></a>

[LocaleCodeList](./models/locale-code-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/locale/codes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.locale.listContinents`<a id="appwriteclientlocalelistcontinents"></a>

List of all continents. You can use the locale header to get the data in a supported language.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listContinentsResponse = await appwriteclient.locale.listContinents();
```

#### 🔄 Return<a id="🔄-return"></a>

[ContinentList](./models/continent-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/locale/continents` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.locale.listCountries`<a id="appwriteclientlocalelistcountries"></a>

List of all countries. You can use the locale header to get the data in a supported language.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCountriesResponse = await appwriteclient.locale.listCountries();
```

#### 🔄 Return<a id="🔄-return"></a>

[CountryList](./models/country-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/locale/countries` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.locale.listCountriesPhones`<a id="appwriteclientlocalelistcountriesphones"></a>

List of all countries phone codes. You can use the locale header to get the data in a supported language.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCountriesPhonesResponse =
  await appwriteclient.locale.listCountriesPhones();
```

#### 🔄 Return<a id="🔄-return"></a>

[PhoneList](./models/phone-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/locale/countries/phones` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.locale.listLanguages`<a id="appwriteclientlocalelistlanguages"></a>

List of all languages classified by ISO 639-1 including 2-letter code, name in English, and name in the respective language.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listLanguagesResponse = await appwriteclient.locale.listLanguages();
```

#### 🔄 Return<a id="🔄-return"></a>

[LanguageList](./models/language-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/locale/languages` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.messaging.addNewSubscriber`<a id="appwriteclientmessagingaddnewsubscriber"></a>

Create a new subscriber.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addNewSubscriberResponse =
  await appwriteclient.messaging.addNewSubscriber({
    topicId: "topicId_example",
    subscriberId: "subscriberId_example",
    targetId: "targetId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### subscriberId: `string`<a id="subscriberid-string"></a>

Subscriber ID. Choose a custom Subscriber ID or a new Subscriber ID.

##### targetId: `string`<a id="targetid-string"></a>

Target ID. The target ID to link to the specified Topic ID.

##### topicId: `string`<a id="topicid-string"></a>

Topic ID. The topic ID to subscribe to.

#### 🔄 Return<a id="🔄-return"></a>

[Subscriber](./models/subscriber.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/topics/{topicId}/subscribers` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.messaging.deleteSubscriberById`<a id="appwriteclientmessagingdeletesubscriberbyid"></a>

Delete a subscriber by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteSubscriberByIdResponse =
  await appwriteclient.messaging.deleteSubscriberById({
    topicId: "topicId_example",
    subscriberId: "subscriberId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### topicId: `string`<a id="topicid-string"></a>

Topic ID. The topic ID subscribed to.

##### subscriberId: `string`<a id="subscriberid-string"></a>

Subscriber ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/topics/{topicId}/subscribers/{subscriberId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.storage.createFile`<a id="appwriteclientstoragecreatefile"></a>

Create a new file. Before using this route, you should create a new bucket resource using either a [server integration](https://appwrite.io/docs/server/storage#storageCreateBucket) API or directly from your Appwrite console.

Larger files should be uploaded using multiple requests with the [content-range](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Range) header to send a partial request with a maximum supported chunk of `5MB`. The `content-range` header values should always be in bytes.

When the first request is sent, the server will return the **File** object, and the subsequent part request must include the file's **id** in `x-appwrite-id` header to allow the server to know that the partial upload is for the existing file and not for a new one.

If you're creating a new file using one of the Appwrite SDKs, all the chunking logic will be managed by the SDK internally.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createFileResponse = await appwriteclient.storage.createFile({
  bucketId: "bucketId_example",
  fileId: "fileId_example",
  file: "file_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### bucketId: `string`<a id="bucketid-string"></a>

Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).

##### fileId: `string`<a id="fileid-string"></a>

File ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### file: `string`<a id="file-string"></a>

Binary file. Appwrite SDKs provide helpers to handle file input. [Learn about file input](https://appwrite.io/docs/storage#file-input).

##### permissions: `string`[]<a id="permissions-string"></a>

An array of permission strings. By default, only the current user is granted all permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/storage/buckets/{bucketId}/files` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.storage.deleteFileById`<a id="appwriteclientstoragedeletefilebyid"></a>

Delete a file by its unique ID. Only users with write permissions have access to delete this resource.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteFileByIdResponse = await appwriteclient.storage.deleteFileById({
  bucketId: "bucketId_example",
  fileId: "fileId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### bucketId: `string`<a id="bucketid-string"></a>

Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).

##### fileId: `string`<a id="fileid-string"></a>

File ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/storage/buckets/{bucketId}/files/{fileId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.storage.getFileById`<a id="appwriteclientstoragegetfilebyid"></a>

Get a file by its unique ID. This endpoint response returns a JSON object with the file metadata.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFileByIdResponse = await appwriteclient.storage.getFileById({
  bucketId: "bucketId_example",
  fileId: "fileId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### bucketId: `string`<a id="bucketid-string"></a>

Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).

##### fileId: `string`<a id="fileid-string"></a>

File ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/storage/buckets/{bucketId}/files/{fileId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.storage.getFileDownload`<a id="appwriteclientstoragegetfiledownload"></a>

Get a file content by its unique ID. The endpoint response return with a 'Content-Disposition: attachment' header that tells the browser to start downloading the file to user downloads directory.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFileDownloadResponse = await appwriteclient.storage.getFileDownload({
  bucketId: "bucketId_example",
  fileId: "fileId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### bucketId: `string`<a id="bucketid-string"></a>

Storage bucket ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).

##### fileId: `string`<a id="fileid-string"></a>

File ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/storage/buckets/{bucketId}/files/{fileId}/download` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.storage.getFileForView`<a id="appwriteclientstoragegetfileforview"></a>

Get a file content by its unique ID. This endpoint is similar to the download method but returns with no  'Content-Disposition: attachment' header.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFileForViewResponse = await appwriteclient.storage.getFileForView({
  bucketId: "bucketId_example",
  fileId: "fileId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### bucketId: `string`<a id="bucketid-string"></a>

Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).

##### fileId: `string`<a id="fileid-string"></a>

File ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/storage/buckets/{bucketId}/files/{fileId}/view` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.storage.getFilePreviewImage`<a id="appwriteclientstoragegetfilepreviewimage"></a>

Get a file preview image. Currently, this method supports preview for image files (jpg, png, and gif), other supported formats, like pdf, docs, slides, and spreadsheets, will return the file icon image. You can also pass query string arguments for cutting and resizing your preview image. Preview is supported only for image files smaller than 10MB.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFilePreviewImageResponse =
  await appwriteclient.storage.getFilePreviewImage({
    bucketId: "bucketId_example",
    fileId: "fileId_example",
    width: 0,
    height: 0,
    gravity: "center",
    quality: 100,
    borderWidth: 0,
    borderColor: "",
    borderRadius: 0,
    opacity: 1,
    rotation: 0,
    background: "",
    output: "",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### bucketId: `string`<a id="bucketid-string"></a>

Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).

##### fileId: `string`<a id="fileid-string"></a>

File ID

##### width: `number`<a id="width-number"></a>

Resize preview image width, Pass an integer between 0 to 4000.

##### height: `number`<a id="height-number"></a>

Resize preview image height, Pass an integer between 0 to 4000.

##### gravity: `'center' | 'top-left' | 'top' | 'top-right' | 'left' | 'right' | 'bottom-left' | 'bottom' | 'bottom-right'`<a id="gravity-center--top-left--top--top-right--left--right--bottom-left--bottom--bottom-right"></a>

Image crop gravity. Can be one of center,top-left,top,top-right,left,right,bottom-left,bottom,bottom-right

##### quality: `number`<a id="quality-number"></a>

Preview image quality. Pass an integer between 0 to 100. Defaults to 100.

##### borderWidth: `number`<a id="borderwidth-number"></a>

Preview image border in pixels. Pass an integer between 0 to 100. Defaults to 0.

##### borderColor: `string`<a id="bordercolor-string"></a>

Preview image border color. Use a valid HEX color, no # is needed for prefix.

##### borderRadius: `number`<a id="borderradius-number"></a>

Preview image border radius in pixels. Pass an integer between 0 to 4000.

##### opacity: `number`<a id="opacity-number"></a>

Preview image opacity. Only works with images having an alpha channel (like png). Pass a number between 0 to 1.

##### rotation: `number`<a id="rotation-number"></a>

Preview image rotation in degrees. Pass an integer between -360 and 360.

##### background: `string`<a id="background-string"></a>

Preview image background color. Only works with transparent images (png). Use a valid HEX color, no # is needed for prefix.

##### output: `'jpg' | 'jpeg' | 'gif' | 'png' | 'webp'`<a id="output-jpg--jpeg--gif--png--webp"></a>

Output format type (jpeg, jpg, png, gif and webp).

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/storage/buckets/{bucketId}/files/{fileId}/preview` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.storage.listFiles`<a id="appwriteclientstoragelistfiles"></a>

Get a list of all the user files. You can use the query params to filter your results.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listFilesResponse = await appwriteclient.storage.listFiles({
  bucketId: "bucketId_example",
  queries: [],
  search: "",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### bucketId: `string`<a id="bucketid-string"></a>

Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, signature, mimeType, sizeOriginal, chunksTotal, chunksUploaded

##### search: `string`<a id="search-string"></a>

Search term to filter your list results. Max length: 256 chars.

#### 🔄 Return<a id="🔄-return"></a>

[FileList](./models/file-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/storage/buckets/{bucketId}/files` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.storage.updateFileById`<a id="appwriteclientstorageupdatefilebyid"></a>

Update a file by its unique ID. Only users with write permissions have access to update this resource.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateFileByIdResponse = await appwriteclient.storage.updateFileById({
  bucketId: "bucketId_example",
  fileId: "fileId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### bucketId: `string`<a id="bucketid-string"></a>

Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).

##### fileId: `string`<a id="fileid-string"></a>

File unique ID.

##### name: `string`<a id="name-string"></a>

Name of the file

##### permissions: `string`[]<a id="permissions-string"></a>

An array of permission string. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/storage/buckets/{bucketId}/files/{fileId}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.teams.createMembership`<a id="appwriteclientteamscreatemembership"></a>

Invite a new member to join your team. Provide an ID for existing users, or invite unregistered users using an email or phone number. If initiated from a Client SDK, Appwrite will send an email or sms with a link to join the team to the invited user, and an account will be created for them if one doesn't exist. If initiated from a Server SDK, the new member will be added automatically to the team.

You only need to provide one of a user ID, email, or phone number. Appwrite will prioritize accepting the user ID > email > phone number if you provide more than one of these parameters.

Use the `url` parameter to redirect the user from the invitation email to your app. After the user is redirected, use the [Update Team Membership Status](https://appwrite.io/docs/references/cloud/client-web/teams#updateMembershipStatus) endpoint to allow the user to accept the invitation to the team. 

Please note that to avoid a [Redirect Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md) Appwrite will accept the only redirect URLs under the domains you have added as a platform on the Appwrite Console.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createMembershipResponse = await appwriteclient.teams.createMembership({
  teamId: "teamId_example",
  roles: ["roles_example"],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### roles: `string`[]<a id="roles-string"></a>

Array of strings. Use this param to set the user roles in the team. A role can be any string. Learn more about [roles and permissions](https://appwrite.io/docs/permissions). Maximum of 100 roles are allowed, each 32 characters long.

##### teamId: `string`<a id="teamid-string"></a>

Team ID.

##### email: `string`<a id="email-string"></a>

Email of the new team member.

##### userId: `string`<a id="userid-string"></a>

ID of the user to be added to a team.

##### phone: `string`<a id="phone-string"></a>

Phone number. Format this number with a leading \\\'+\\\' and a country code, e.g., +16175551212.

##### url: `string`<a id="url-string"></a>

URL to redirect the user back to your app from the invitation email.  Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.

##### name: `string`<a id="name-string"></a>

Name of the new team member. Max length: 128 chars.

#### 🔄 Return<a id="🔄-return"></a>

[Membership](./models/membership.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{teamId}/memberships` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.teams.createNewTeam`<a id="appwriteclientteamscreatenewteam"></a>

Create a new team. The user who creates the team will automatically be assigned as the owner of the team. Only the users with the owner role can invite new members, add new owners and delete or update the team.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewTeamResponse = await appwriteclient.teams.createNewTeam({
  teamId: "teamId_example",
  name: "name_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teamId: `string`<a id="teamid-string"></a>

Team ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### name: `string`<a id="name-string"></a>

Team name. Max length: 128 chars.

##### roles: `string`[]<a id="roles-string"></a>

Array of strings. Use this param to set the roles in the team for the user who created it. The default role is **owner**. A role can be any string. Learn more about [roles and permissions](https://appwrite.io/docs/permissions). Maximum of 100 roles are allowed, each 32 characters long.

#### 🔄 Return<a id="🔄-return"></a>

[Team](./models/team.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.teams.deleteMembership`<a id="appwriteclientteamsdeletemembership"></a>

This endpoint allows a user to leave a team or for a team owner to delete the membership of any other team member. You can also use this endpoint to delete a user membership even if it is not accepted.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteMembershipResponse = await appwriteclient.teams.deleteMembership({
  teamId: "teamId_example",
  membershipId: "membershipId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teamId: `string`<a id="teamid-string"></a>

Team ID.

##### membershipId: `string`<a id="membershipid-string"></a>

Membership ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{teamId}/memberships/{membershipId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.teams.getById`<a id="appwriteclientteamsgetbyid"></a>

Get a team by its ID. All team members have read access for this resource.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await appwriteclient.teams.getById({
  teamId: "teamId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teamId: `string`<a id="teamid-string"></a>

Team ID.

#### 🔄 Return<a id="🔄-return"></a>

[Team](./models/team.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{teamId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.teams.getMembership`<a id="appwriteclientteamsgetmembership"></a>

Get a team member by the membership unique id. All team members have read access for this resource.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMembershipResponse = await appwriteclient.teams.getMembership({
  teamId: "teamId_example",
  membershipId: "membershipId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teamId: `string`<a id="teamid-string"></a>

Team ID.

##### membershipId: `string`<a id="membershipid-string"></a>

Membership ID.

#### 🔄 Return<a id="🔄-return"></a>

[Membership](./models/membership.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{teamId}/memberships/{membershipId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.teams.getPrefs`<a id="appwriteclientteamsgetprefs"></a>

Get the team's shared preferences by its unique ID. If a preference doesn't need to be shared by all team members, prefer storing them in [user preferences](https://appwrite.io/docs/references/cloud/client-web/account#getPrefs).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPrefsResponse = await appwriteclient.teams.getPrefs({
  teamId: "teamId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teamId: `string`<a id="teamid-string"></a>

Team ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{teamId}/prefs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.teams.getUserMemberships`<a id="appwriteclientteamsgetusermemberships"></a>

Get a list of all the teams in which the current user is a member. You can use the parameters to filter your results.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserMembershipsResponse =
  await appwriteclient.teams.getUserMemberships({
    queries: [],
    search: "",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, total, billingPlan

##### search: `string`<a id="search-string"></a>

Search term to filter your list results. Max length: 256 chars.

#### 🔄 Return<a id="🔄-return"></a>

[TeamList](./models/team-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.teams.listMemberships`<a id="appwriteclientteamslistmemberships"></a>

Use this endpoint to list a team's members using the team's ID. All team members have read access to this endpoint.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listMembershipsResponse = await appwriteclient.teams.listMemberships({
  teamId: "teamId_example",
  queries: [],
  search: "",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teamId: `string`<a id="teamid-string"></a>

Team ID.

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, teamId, invited, joined, confirm

##### search: `string`<a id="search-string"></a>

Search term to filter your list results. Max length: 256 chars.

#### 🔄 Return<a id="🔄-return"></a>

[MembershipList](./models/membership-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{teamId}/memberships` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.teams.removeTeam`<a id="appwriteclientteamsremoveteam"></a>

Delete a team using its ID. Only team members with the owner role can delete the team.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeTeamResponse = await appwriteclient.teams.removeTeam({
  teamId: "teamId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teamId: `string`<a id="teamid-string"></a>

Team ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{teamId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.teams.updateMembershipRoles`<a id="appwriteclientteamsupdatemembershiproles"></a>

Modify the roles of a team member. Only team members with the owner role have access to this endpoint. Learn more about [roles and permissions](https://appwrite.io/docs/permissions).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateMembershipRolesResponse =
  await appwriteclient.teams.updateMembershipRoles({
    teamId: "teamId_example",
    membershipId: "membershipId_example",
    roles: ["roles_example"],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### roles: `string`[]<a id="roles-string"></a>

An array of strings. Use this param to set the user\\\'s roles in the team. A role can be any string. Learn more about [roles and permissions](https://appwrite.io/docs/permissions). Maximum of 100 roles are allowed, each 32 characters long.

##### teamId: `string`<a id="teamid-string"></a>

Team ID.

##### membershipId: `string`<a id="membershipid-string"></a>

Membership ID.

#### 🔄 Return<a id="🔄-return"></a>

[Membership](./models/membership.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{teamId}/memberships/{membershipId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.teams.updateMembershipStatus`<a id="appwriteclientteamsupdatemembershipstatus"></a>

Use this endpoint to allow a user to accept an invitation to join a team after being redirected back to your app from the invitation email received by the user.

If the request is successful, a session for the user is automatically created.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateMembershipStatusResponse =
  await appwriteclient.teams.updateMembershipStatus({
    teamId: "teamId_example",
    membershipId: "membershipId_example",
    userId: "userId_example",
    secret: "secret_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID.

##### secret: `string`<a id="secret-string"></a>

Secret key.

##### teamId: `string`<a id="teamid-string"></a>

Team ID.

##### membershipId: `string`<a id="membershipid-string"></a>

Membership ID.

#### 🔄 Return<a id="🔄-return"></a>

[Membership](./models/membership.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{teamId}/memberships/{membershipId}/status` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.teams.updateNameById`<a id="appwriteclientteamsupdatenamebyid"></a>

Update the team's name by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateNameByIdResponse = await appwriteclient.teams.updateNameById({
  teamId: "teamId_example",
  name: "name_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

New team name. Max length: 128 chars.

##### teamId: `string`<a id="teamid-string"></a>

Team ID.

#### 🔄 Return<a id="🔄-return"></a>

[Team](./models/team.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{teamId}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteclient.teams.updatePrefsById`<a id="appwriteclientteamsupdateprefsbyid"></a>

Update the team's preferences by its unique ID. The object you pass is stored as is and replaces any previous value. The maximum allowed prefs size is 64kB and throws an error if exceeded.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePrefsByIdResponse = await appwriteclient.teams.updatePrefsById({
  teamId: "teamId_example",
  prefs: {},
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### prefs: `object`<a id="prefs-object"></a>

Prefs key-value JSON object.

##### teamId: `string`<a id="teamid-string"></a>

Team ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{teamId}/prefs` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
