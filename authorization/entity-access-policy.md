# Entity Access Policy

Entity Access Policy next to PBS button is used to define the access rights to individual users or a group against "entities" or "database objects". For any database table or view under our database, without writing any code Frapid's Web API automatically creates several different API level features including but not limited to:

- Getting All Records
- Getting Paginated Records
- Adding an Entry
- Updating an Entry
- Deleting an Entry
- Exporting Data to Excel or PDF
- etc

<img src="/images/authorization/entity-access-policy.png" alt="Entity Access Policy" />

Entity access policy enables you to customize fine-grained privileges according to your needs. Please consult with your MixERP implementation partner for using this tool.

## Group Entity Access Policy:

This policy allows selecting a Group. To start off this process

- Select a Role: This dropdown list enables you to choose roles like Admin, Content Editor, Partner, Website User, etc. The policy you're defining is applicable to this role only.
- Select an Office: It enables you to choose between offices. The policy you're defining is applicable to this office only.
- After selecting a Role and an Office, click on the show button.
- Click to tick small boxes to grant or deny them flexibility to each permission--Read, Create, Edit, Delete, Create Filter, Delete Filter, Export, Export Data, Import Data, Execute, and Verify.

## User Entity Access Policy:

It is same as Group Entity Access Policy. Nevertheless, this time you can only grant permission to individual Users instead of Groups.
