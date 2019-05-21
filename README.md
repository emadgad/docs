# Welcome to MixERP

MixERP aims on being an efficient and cost-effective ERP solution. Before proceeding to the individual chapters, you may want to take a quick note on the following topics:

## Multi-Establishment

MixERP is a multi-establishment ERP software solution which facilitates you to run any number of branch offices in a centralized environment. This means, if you have multiple branch offices of the same establishment, you should not create multiple companies (and databases) or host separate application for each branch. You should, instead, create a single office with branch offices as children as shown in the image.

<img alt="Establishment" class="black and white" src="/images/config/establishment.png">

\*transaction units.

An office can contain sub-offices, thence making the office a branch group. Likewise, an office which does not have any child office makes it a transaction unit.

You can only perform transaction posting to the transaction units, whereas a branch group allows you to consolidate and produce reports of all child offices it contains.

### Remember

- Chart of Accounts is establishment-neutral. The Accounts (GL Heads) are common to all offices.
- Parties (Customers or Suppliers) are also establishment-neutral and common to all offices.
- A GL Head can have different closing balance on different offices.
- A GL Head balance when viewed on a parent office means the sum of all child offices.
- A party has a payable or receivable balance according to office. A party balance when viewed on a parent office means the sum of all child offices.
- A stock item has an inventory balance according to office. A stock item balance when viewed on parent office means the sum of all child offices.
- You cannot post transactions to an office group (an office which has child offices).
- You can create General Ledgers (Accounts), Stock Items, Parties when logged in to any office. Remember these entities are global--shared by all offices.

MixERP encapsulates a spectrum of configurable infrastructure essential to operate daily organizational activities. It covers, almost, every aspect of your business including Accounting, Finance, Human Resource Management, Sales, Inventory and Purchase.

Once you've installed MixERP, follow these steps.

- Type the URL of your hosted Frapid tenant.
- You'll be directed to the home page of default Frapid website.
- Click on the admin area, and you'll be directed to the log-in page.
- Log-in using your username and password.
- Once you log in, you will be directed to MixERP's dashboard, where you will find an assortment of business management applications.
- Click on any app in the dashboard.

<img src="/images/dashboard.png" class="black and white" alt="Dashboard" />

Once you enter into the app, navigate to the Menu Bar located on the top of the page. Menu Bar includes several tabs, each with individual functions. You will quickly note that each app has its own set of menus.

<img src="/images/app-menus.png" alt="Application Menus" />

You can also easily find any feature by using the search bar or pressing CTRL + SHIFT + F.

**PBF (Pass Back and Forth) Button**

PBF Button is located on the top left corner of the screen. This button allows you to switch back and forth between previous page and dashboard home.
