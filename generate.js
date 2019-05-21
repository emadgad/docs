const fs = require("fs");
const path = require("path");
const raw = `Roles-->/account/roles
Add a New User-->/account/add-new-user
Change Password-->/account/change-password
Configuration Profile-->/account/configuration-profile
Email Templates-->/account/email-templates
Entity Access Policy-->/authorization/entity-access-policy
Menu Access Policy-->/authorization/menu-access-policy
Offices-->/config/offices
SMTP-->/config/smtp
File Manager-->/config/file-manager
Configuration-->/website/tasks/configuration
Categories-->/website/tasks/categories
Add a New Content-->/website/tasks/add-a-new-content
Add a New Blog Post-->/website/tasks/add-a-new-blog-post
View Blog Posts-->/website/tasks/view-blog-posts
Menu-->/website/tasks/menu
Contacts-->/website/tasks/contacts
Subscriptions-->/website/tasks/subscriptions
Layout Manager-->/website/layout-manager/readme
Editing Theme Files-->/website/layout-manager/editing-theme
Creating a New Theme-->/website/layout-manager/editing-theme
Email Templates-->/website/email-templates
Address Book-->/address-book/readme
Calendar-->/calendar/readme
Updater App-->/updater/readme
Journal Entry-->/finance/tasks/journal-entry
Exchange Rates-->/finance/tasks/exchange-rates
Journal Verification-->/finance/tasks/journal-verification
Verification Policy-->/finance/tasks/verification-policy
Account Reconciliation-->/finance/tasks/account-reconciliation
EOD Processing-->/finance/tasks/eod-processing
Import Transactions-->/finance/tasks/import-transactions
Chart of Accounts-->/finance/setup/chart-of-accounts
Currencies-->/finance/setup/currencies
Bank Accounts-->/finance/setup/bank-accounts
Cost Centers-->/finance/setup/const-centers
Cash Repositories-->/finance/setup/cash-repositories
Fiscal Years-->/finance/setup/fiscal-years
Frequency Setups-->/finance/setup/frequency-setups
Account Statement-->/finance/reports/account-statement
Trial Balance-->/finance/reports/trial-balance
Transaction Summary-->/finance/reports/transaction-summary
Profit &amp; Loss Account-->/finance/reports/profit-and-loss-account
Retained Earnings Statement-->/finance/reports/retained-earnings-statement
Balance Sheet-->/finance/reports/balance-sheet
Attendance-->/human-resource-management/tasks/attendance
Employees-->/human-resource-management/tasks/employees
Contracts-->/human-resource-management/tasks/contracts
Leave Applications-->/human-resource-management/tasks/leave-applications
Resignations-->/human-resource-management/tasks/resignations
Terminations-->/human-resource-management/tasks/terminations
Exits-->/human-resource-management/tasks/exits
Contract Verification-->/human-resource-management/verification/contracts
Leave Application Verification-->/human-resource-management/verification/leave-applications
Resignation Verification-->/human-resource-management/verification/resignations
Termination Verification-->/human-resource-management/verification/terminations
Exit Verification-->/human-resource-management/verification/exits
Employment Statuses-->/human-resource-management/setup/employment-statuses
Identification Types-->/human-resource-management/setup/identification-types
Employee Types-->/human-resource-management/setup/employee-types
Education Levels-->/human-resource-management/setup/education-levels
Job Titles-->/human-resource-management/setup/job-titles
Pay Grades-->/human-resource-management/setup/pay-grades
Shifts-->/human-resource-management/setup/shifts
Office Hours-->/human-resource-management/setup/office-hours
Leave Types-->/human-resource-management/setup/leave-types
Leave Benefits-->/human-resource-management/setup/leave-benefits
Exit Types-->/human-resource-management/setup/exit-types
Social Networks-->/human-resource-management/setup/social-networks
Nationalities-->/human-resource-management/setup/nationalities
Marital Statuses-->/human-resource-management/setup/marital-statuses
Inventory Transfers-->/inventory/tasks/inventory-transfers
Inventory Adjustment-->/inventory/tasks/inventory-adjustment
Inventory Transfer Verification-->/inventory/tasks/inventory-transfer-verification
Inventory Adjustment Verification-->/inventory/tasks/inventory-adjustment-verification
Inventory Items-->/inventory/setup/inventory-items
Item Groups-->/inventory/setup/item-groups
Item Types-->/inventory/setup/item-types
Store Types-->/inventory/setup/store-types
Stores-->/inventory/setup/stores
Counter-->/inventory/setup/counters
Customer Types-->/inventory/setup/customer-types
Customers-->/inventory/setup/customers
Supplier Types-->/inventory/setup/supplier-types
Suppliers-->/inventory/setup/suppliers
Brands-->/inventory/setup/brands
Units of Measure-->/inventory/setup/units-of-measure
Compound Units of Measure-->/inventory/setup/compound-units-of-measure
Shippers-->/inventory/setup/shippers
Attributes-->/inventory/setup/attributes
Variants-->/inventory/setup/variants
Item Variants-->/inventory/setup/item-variants
Opening Inventory-->/inventory/setup/opening-inventory
Opening Inventory Verification-->/inventory/setup/opening-inventory-verification
Inventory Setup-->/inventory/setup/inventory-setup
Inventory Account Statement-->/inventory/reports/inventory-account-statement
Physical Count-->/inventory/reports/physical-count
Customer Contacts-->/inventory/reports/customer-contacts
Low Inventory Report-->/inventory/reports/low-inventory-report
Profit Status by Item-->/inventory/reports/profit-status-by-item
Inventory Daily Report-->/inventory/reports/inventory-daily-report
Purchase Entry-->/purchases/tasks/purchase-entry
Supplier Payment-->/purchases/tasks/supplier-payment
Purchase Returns-->/purchases/tasks/purchase-returns
Purchase Quotations-->/purchases/tasks/purchase-quotations
Purchase Orders-->/purchases/tasks/purchase-orders
Purchase Verification-->/purchases/tasks/purchase-verification
Supplier Payment Verification-->/purchases/tasks/supplier-payment-verification
Purchase Return Verification-->/purchases/tasks/purchase-return-verification
Suppliers-->/purchases/setup/suppliers
Price Types-->/purchases/setup/price-types
Cost Prices-->/purchases/setup/cost-prices
Supplierwise Cost Prices-->/purchases/setup/supplierwise-cost-prices
Account Payables-->/purchases/reports/account-payables
Top Suppliers-->/purchases/reports/top-suppliers
Purchase by Office-->/purchases/reports/purchase-by-office
Low Inventory Products-->/purchases/reports/low-inventory-products
Out of Stock Products-->/purchases/reports/out-of-stock-products
Supplier Contacts-->/purchases/reports/supplier-contacts
Purchase Summary-->/purchases/reports/purchase-summary
Purchase Discount Status-->/purchases/reports/purchase-discount-status
Payment Journal Summary-->/purchases/reports/payment-journal-summary
Account Payable Vendor Report-->/purchases/reports/account-payable-vendor-report
Opening Cash-->/sales/tasks/opening-cash
Sales Entry-->/sales/tasks/sales-entry
Receipt-->/sales/tasks/receipts
Sales Returns-->/sales/tasks/sales-returns
Sales Quotations-->/sales/tasks/sales-quotations
Sales Orders-->/sales/tasks/sales-orders
Sales Entry Verification-->/sales/tasks/sales-entry-verification
Receipt Verification-->/sales/tasks/receipt-verification
Sales Return Verification-->/sales/tasks/sales-return-verification
EOD-->/sales/tasks/end-of-day
Gift Cards-->/sales/customer-loyalty/gift-cards
Add Gift Card Fund-->/sales/customer-loyalty/add-gift-card-fund
Verify Gift Card Fund-->/sales/customer-loyalty/verify-gift-card-fund
Sales Coupons-->/sales/customer-loyalty/sales-coupons
Customer Types-->/sales/setup/customer-types
Price Types-->/sales/setup/price-types
Selling Prices-->/sales/setup/selling-prices
Customerwise Selling Prices-->/sales/setup/customerwise-selling-prices
Late Fee-->/sales/setup/late-fee
Payment Terms-->/sales/setup/payment-terms
Cashiers-->/sales/setup/cashiers
Customers-->/sales/reports/customers
Account Receivables-->/sales/reports/account-receivables
All Gift Cards-->/sales/reports/all-gift-cards
Gift Card Usage Statement-->/sales/reports/gift-card-usage-statement
Customer Account Statement-->/sales/reports/customer-account-statement
Top Selling Items-->/sales/reports/top-selling-items
Sales by Office-->/sales/reports/sales-by-office
Customer Receipts-->/sales/reports/customer-receipts
Detailed Payment Report-->/sales/reports/detailed-payment-report
Gift Card Summary-->/sales/reports/gift-card-summary
Quotation Status-->/sales/reports/quotation-status
Order Status-->/sales/reports/order-status
Sales Discount Status-->/sales/reports/sales-discount-status
Account Receivable by Customer Report-->/sales/reports/account-receivable-by-customer-report
Receipt Journal Summary Report-->/sales/reports/receipt-journal-summary-report
Accountant Summary-->/sales/reports/account-summary
Closed Out Report-->/sales/reports/closed-out-report
Sales Details-->/sales/reports/sales-details
Social-->/social/readme`;

function createFile(contents, destination) {
  function createDirectory() {
    const directory = path.dirname(destination);

    if (!fs.existsSync(directory)) {
      try {
        fs.mkdirSync(directory, { recursive: true });
      } catch (err) {
        if (err.code !== "EEXIST") throw err;
      }
    }
  }

  createDirectory();

  fs.writeFileSync(destination, contents);
}

const lines = raw.split("\n");
for (let i = 0; i < lines.length; i++) {
  const parts = lines[i].split("-->");
  const title = "# " + parts[0];
  const file = "." + parts[1] + ".md";

  createFile(title, file);
}
console.log("Total files to create", lines.length);
