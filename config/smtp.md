# SMTP

In order to be able to send emails, you need to configure SMTP server. This service will enable delivery of your emails.

<img alt="SMTP" src="/images/config/smtp.png">

## Fields

| Field                | Description                                                                                                                                                                        |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Smtp Config Id\*     | Autonumber                                                                                                                                                                         |
| Configuration Name\* | A friendly name for your SMTP account or your Email service provider. (Gmail or Yahoo or any other mailing service)                                                                |
| Enabled\*            | Since you can setup several different SMTP accounts, it's basically your choice to select which SMTP service is enabled.                                                           |
| Is Default\*         | You can choose this to be the default SMTP for MixERP. Please note that if there are multiple default SMTP setup, it cannot be guaranteed which one will be chosen to send emails. |
| From Display Name\*  | Enter what will be shown as the sender's name to the email recipients.                                                                                                             |
| From Email Address\* | Enter the email address which will be used to send the outgoing emails.                                                                                                            |
| SMTP Host\*          | The DNS name or IP address of your SMTP server.                                                                                                                                    |
| SMTP Port\*          | The port on which your SMTP server accepts connection.                                                                                                                             |
| SMTP Enable SSL\*    | You can select "Yes" from the drop down if your SMTP server uses a secure communication.                                                                                           |
| SMTP Username\*      | Enter your SMTP user name. In general, it is the email address.                                                                                                                    |
| Password\*           | Your email address password.                                                                                                                                                       |

### Note

> If you are sending a lot of emails to third party, it's best to use transactional email service providers such as SendGrid instead of SMTP.
