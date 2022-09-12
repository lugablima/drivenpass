# projeto19-drivenpass
DrivenPass API, a password manager built with TypeScript, Node.js, Express and Postgres.

<h1 align="center">
  DrivenPass
</h1>
<div align="center">

  <h3>Built With</h3>

  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/>  
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express.js&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="30px"/>
  <!-- Badges source: https://dev.to/envoy_/150-badges-for-github-pnk -->
</div>

<br/>

## Description

DrivenPass is the API of a password manager.

</br>

## Features

-   Create account;
-   Access an account;
-   Create credential;
-   Search credentials;
-   Delete credential;
-   Create safe note;
-   Search safe notes;
-   Delete safe note;
-   Create card;
-   Search cards;
-   Delete card;
-   Create a wi-fi log;
-   Search wi-fi logs;
-   Delete a wi-fi log.

</br>

## API Reference

### Create account

```http
POST /sign-up
```

#### Request:

####

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `x-api-key` | `string` | **Required**. API key |

####

</br>

| Body         | Type      | Description                        |
| :----------  | :-------- | :--------------------------------- |
| `email`| `string`       | **Required**. User mail. |
| `password`       | `string`  | **Required**. User password. |    

`Password must be at least 10 characters`

#

### Access an account

```http
PUT /sign-in
```

#### Request:

| Body         | Type     | Description                              |
| :------------| :------- | :--------------------------------------- |
| `email`        | `string` | **Required**. User mail                   |
| `password`   | `string` | **Required**. User password              |

`Password must be at least 10 characters`

#### Response:

```json
{
  "token": 11111111111
}
```

#

### Create credential

```http
POST /credentials
```

#### Request:

| Body             | Type     | Description                        |
| :--------------- | :------- | :--------------------------------- |
| `title`      | `string`| **Required**. Credential name. |
| `url`         | `string`| **Required**. Valid url.              |
| `username    | `string`| **Required**. Username.       |
| `password`       | `string` | **Required**. Password.        |

#### Response:

```json
{
  "id: 1,
  "title": "name",
  "url": "url",
}
```

#

### Unlock a card

```http
PUT /unlock-card
```

#### Request:

| Body             | Type     | Description                        |
| :--------------- | :------- | :--------------------------------- |
| `cardId`         | `integer`| **Required**. Card id              |
| `password`       | `string` | **Required**. Card password        |

#

### Get the card balance and transactions

```http
GET /balance/${cardId}
```

#### Response:

```json
{
  "balance": 1,
	"transactions": [
    { "id": 1, "cardId": 1, "businessId": 1, "businessName": "Name", "timestamp": "DD/MM/YYYY", "amount": 1 }
  ],
  "recharges": [
    { "id": 1, "cardId": 1, "timestamp": "DD/MM/YYYY", "amount": 1 }
  ]
}
```

#

### Recharge a card

```http
POST /recharges
```

#### Request:

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `x-api-key` | `string` | **Required**. API key |

####

| Body             | Type      | Description                            |
| :--------------- | :-------- | :------------------------------------- |
| `cardId`         | `integer` | **Required**. Card Id                  |
| `amount`         | `integer` | **Required**. Recharge amount in cents |

#

### Make a purchase at a point of sale (POS) with the card

```http
POST /payments
```
#### Request:

| Body             | Type      | Description                           |
| :--------------- | :-------- | :------------------------------------ |
| `cardId`         | `integer` | **Required**. Card id                 |
| `password`       | `string`  | **Required**. Card password           |
| `businessId`     | `integer` | **Required**. Business id             |
| `amount`         | `integer` | **Required**. Payment amount in cents |

#

### Make an online purchase with a card

```http
POST /online-payments
```

#### Request:

| Body             | Type      | Description                           |
| :--------------- | :-------- | :------------------------------------ |
| `number`         | `string`  | **Required**. Card number             |
| `cardholderName` | `string`  | **Required**. Name in card            |
| `expirationDate` | `string`  | **Required**. Card expiration date    |
| `cvc`            | `string`  | **Required**. Card CVC                |
| `businessId`     | `integer` | **Required**. Business id             |
| `amount`         | `integer` | **Required**. Payment amount in cents |

`Expiration Date Format: "MM/YY"`

`CVC max length: 3`

#

### Create an online card

```http
POST /virtual-card
```

#### Request:

| Body                   | Type      | Description                           |
| :--------------------- | :-------- | :------------------------------------ |
| `originalCardId`       | `integer` | **Required**. Original card id        |
| `originalCardPassword` | `string`  | **Required**. Original card password  |

`Password length: 4`

`Password pattern: only numbers`

#

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT = number #recommended:5000`

`DATABASE_URL = postgres://UserName:Password@Hostname:5432/DatabaseName`

`CVC_SECRET_KEY = any string`

</br>

## Run Locally

Clone the project

```bash
  git clone https://github.com/lugablima/projeto18-valex
```

Go to the project directory

```bash
  cd projeto18-valex/
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```
