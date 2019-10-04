# the-daily-ciandt

The daily CI&T is a news service made with nodejs and serverless.

## Installation

Use the package manager [NPM](https://www.npmjs.com/get-npm) to install the required packages.

```bash
npm install
```

(I just commited my .env, to make things easier to test. So you can ignore this step)
Rename .env.example to .env and add a valid mongo atlas instance.

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
