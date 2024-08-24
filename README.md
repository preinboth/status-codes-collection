# Status Codes Collection

A comprehensive collection of status codes for HTTP, WebSockets, SMTP, POP3, IMAP, FTP and more. This package provides a central source for all important status codes used in various protocols.
[![NPM License](https://img.shields.io/npm/l/status-codes-collection)](LICENSE)

## Installation

To use the package in your project, you can install it via npm or yarn:

```bash
npm install status-codes-collection
yarn add status-codes-collection
```

## Utilisation

You can import and use the status codes directly from the package. Here is a simple example of how you can use the status codes:

```javascript
import { status } from 'status-codes-collection';

console.log(status.HTTP_200_OK); // Should return 200
console.log(status.WS_1000_NORMAL_CLOSURE); // Should return 1000
```

## Available status codes

- HTTP Statuscodes: HTTP_100_CONTINUE, HTTP_200_OK, HTTP_404_NOT_FOUND, etc.
- WebSocket Statuscodes: WS_1000_NORMAL_CLOSURE, WS_1001_GOING_AWAY, etc.
- SMTP Statuscodes: SMTP_220_SERVICE_READY, SMTP_250_REQUEST_COMPLETED, etc.
- POP3 Statuscodes: POP3_OK, POP3_ERROR
- IMAP Statuscodes: IMAP_OK, IMAP_NO, IMAP_BAD, etc.
- FTP Statuscodes: FTP_200_COMMAND_OKAY, FTP_550_REQUESTED_ACTION_NOT_TAKEN, etc.

## Contribution

Contributions are welcome! If you find bugs or want to suggest improvements, please create an issue or a pull request on GitHub.

## Licence

This project is licensed under the MIT licence.
