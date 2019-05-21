# Transaction Posting Engine

Transaction Posting Engine (TPE) is core function of MixERP. It is not a module, but a collection of:

- application modules
- database functions and triggers

MixERP TPE's job is to validate and verify that the transaction posted on any level is valid and free of side-effects. TPE generally restricts activities such as:

- entering a transaction in a past date.
- maker trying to approve her own transaction.
- posting transactions that would produce negative cash balance.
- posting transactions that would make an inventory item count negative.

Transaction Posting Engine can be thought of a collection of functions, features, and workflow that enforces data integration and validity for finance, inventory, and manufacturing areas across the entire MixERP application tiers.

## Journal Verification

The verification module is a feature of MixERP's Transaction Posting Engine. The workflow provides MC (maker/checker) verification system where the transactions entered by users are presented to a group of delegated users collectively known as Voucher Administrators. Once a transaction is posted, it is sent to the verification queue. The VAs can then take further actions on what to do with the transactions in the queue.

Moreover, on a default installation, makers are generally restricted users able to only post a transaction, and cannot take decisions on their own. However, makers can withdraw their own transaction(s) stating a reason why they want it to be withdrawn. When a transaction is withdrawn, it is not sent to the Verification Queue, and thus has no effect on the balance sheet.

<img alt="Journal Verification" src="/images/finance/verification-workflow.png">

Furthermore, as seen in the above diagram, a transaction can be automatically verified by the workflow engine. According to your configuration, the TransactionGovernor module will automatically take actions to reject or approve vouchers in verification queue. This could be beneficial for offices having a relatively tight budget, since you would not need to appoint additional employee(s) to check the queue.

The automatic verification feature can be a real time-saver for certain scenarios where you could "mix" the automatic and manual verification system. For example, you could turn on the auto-verification for transactions less than a specified amount, and for larger transactions you can _examine what's going on under the hood_ in the real time.

## Transaction Checklist

Once you post any transaction, TransactionChecklist feature helps you take necessary actions such as:

- Withdraw the Posted Transaction.
- View the Document.
- Send the Document as an Email Attachment to the Customer.
- Create & Print Customer Copy of the Document.
- Print Receipt.\*
- Print GL Entry.\*
- Upload Attachments for the Document.

\*where applicable

## Verification Queue

Verification queue is a repository where transactions awaiting verification are stored. A verification queue can contain transactions of current date or later. It should be noted that a past-dated transaction cannot be entered into the system and if the queue has value dated transaction(s) prior to the current date, it usually means there is something wrong with your application and you need help.

A future dated transaction is allowed and stored in the verification queue. However, you can verify future dated transaction in the future only, when the current date becomes the future value date.
