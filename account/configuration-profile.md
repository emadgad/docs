# Configuration Profile

Configuration profile allows the admin to define the behavior of the Account Management app. It is an initial set-up which should be carefully implemented by the admin to prevent information leakage. Hence, Configuration Profile provides a robust set of features for handling user registrations and/or sign ups.

<img src="/images/account/configuration-profile.png" alt="Add a New User" />

## Fields

| Field                             | Description                                                                                                                                                   |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Profile Name \*                   | The name of your configuration profile.                                                                                                                       |
| Is Active \*                      | Signifies if this configuration profile is active. A configuration profile must be active for it to be effective.                                             |
| Allow Registrations \*            | Indicates whether or not you want people to be able to register in your website. Unless you're running a public website on MixERP, this should be turned off. |
| Registration Default Office Id \* | Since MixERP is multi-establishment, and if you have multiple branch offices, you need to specify which office the registered website users will belong to.   |
| Registration Role Id \*           | Select the default role which will be used for all new accounts registered via your website.                                                                  |
| Allow Facebook Registration \*    | Select if you want your users to use their Facebook account to log in instead of username and password.                                                       |
| Allow Google Registration \*      | Select if you want your users to use their Google account to log in instead of username and password.                                                         |
