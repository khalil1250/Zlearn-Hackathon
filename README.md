# Zlearn-Hackathon

# Welcome in The Covenant Project.

Our project delivers a blockchain-native SaaS that enables borrowers to prove, and lenders to verify, loan covenant compliance through zero-knowledge proofs on Aleo—without exposing any financial data. 
By replacing costly, manual audits with cryptographic validation, we reduce operational costs by up to 80% and bring real-time, privacy-preserving compliance to private credit, CLOs, and ESG lending.

## Goal of the App

The app allow for now has only 3 type of users : a company whose data would be evaluated, a validator who must check the data and validate them and a third actor which could be a Bank or another organisation.
For now any user can create one and only one company. When a user have a company he can add a JSON file about his company data and the address of the validor whose role is to validate them.

To validate the data just send, the validator must go in Acceuil/Validator and then download the JSON. He must check the data write on it.
Once it's done he can Validate the data and as it is a demo version the Validator will have to write the address of the Bank, with the 2 informations whose ratio the Bank require.

The Bank will juste have to connect and then go to Acceuil/Evaluate and press the button. If this account received an evaluation, it will print on the screen.

### Validator

A Validator is a trustworthy entity that validates information emitted by a company. Nowadays it is mandatory to have such validation for companies in stock market so it is not a new constraint but rather the use a current state of things. 

### Company

The app is made for company use. Thus companies play a central part as they are the makers of data and they decide which data they want to share with who.

### Users

A user can be litterally anyone as long as they have a leo account. Nonetheless most features are currently anavailable for people not in a company. 


## Our vision 

There are currenty the "base version" in Zlearn-Hackathon-main and the "extended version" that extends it. The first one places the validator at the center of operations and make the emission of records for authorization. The second is complementary as it brings features and information management to the whole, such as : json handling, role management, company management, code generation for specific json. Both visions are complementary but real interaction through the apps is still to be made (work independatly for now).

## Next Improvement

There are 4 main improvements to come :
* Code interaction (notably back-end front-end separation) and debugging
* Better generation of smart contracts for specific json 
* Feature of evaluation transaction generation for devs
* Gestion of authorizations on data and development for role created 


