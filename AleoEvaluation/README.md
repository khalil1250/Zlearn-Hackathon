
Most blockchain uses are unvailable for most people because of complexity and knowledge. Our goal was thus to make a user-friendly app that allows different depth of interaction depending on the knowledge of the user. Please keep in mind this is just a prototype so you may encounter bugs.

# React + Aleo + Leo

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/fork/github/ProvableHQ/sdk/tree/mainnet/create-leo-app/template-react)

This template provides a minimal setup to get React and Aleo working in Webpack or Vite with HMR and some ESLint rules.

This template includes a Leo program that is loaded by the web app located in
the `helloworld` directory.

### Start in development mode

```bash
npm install
npm npm run start:api // backend
npm run dev // another bash tab
```
Your app should be running on http://localhost:5173/

### features

* account creation
* company creation (account tab)
* add user to company (account tab)
* add role in company roles (account tab)
* add (not nested) json data (send_info tab) 
* validation is made on the database for now (will change)
* see what information is available and see if it's validated (see_info tab) 
* generate smart contract (see_info tab) 
* evaluations generation on smart contract and smart contract execution (tab evaluation : to come)


### Build Leo program


1. Replace `PRIVATE_KEY=user1PrivateKey` in the `.env` of helloworld with your own key (you
   can use an existing one or generate your own at https://provable.tools/account)

2. Follow instructions to install Leo here: https://github.com/ProvableHQ/leo

3.  run `leo run` to compile and update the
   Aleo instructions under `build` which are loaded by the web app once your smart contract is ready.


## Production deployment

### Build

`npm run build`

Upload `dist` folder to your host of choice.

### ⚠️ Header warnings

`DOMException: Failed to execute 'postMessage' on 'Worker': SharedArrayBuffer transfer requires self.crossOriginIsolated`

If you get a warning similar to this when deploying your application, you need
to make sure your web server is configured with the following headers:

```
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

We've included a `_headers` file that works with some web hosts (e.g. Netlify)
but depending on your host / server setup you may need to configure the headers
manually.
