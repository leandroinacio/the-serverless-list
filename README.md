# the-daily-ciandt

The daily CI&T is a news service made with nodejs and serverless.

## Installation

Use the package manager [NPM](https://www.npmjs.com/get-npm) to install the required packages.

```bash
npm install
```

Rename .env.example to .env and add a valid mongo atlas instance.
Or, get Leandro's .env so you can check it out.

## Usage

To run the unit tests
```bash
npm run test
```

To run the application local
```bash
sls offline start
```

To run the application on aws
```bash
serverless deploy
```
