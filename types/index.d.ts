declare module 'status-codes-collection' {
  // Typen für die verschiedenen Statuscode-Sammlungen
  type HttpStatusCodes = {
    [key: `HTTP_${number}`]: number;
  };

  type WsStatusCodes = {
    [key: `WS_${number}`]: number;
  };

  type SmtpStatusCodes = {
    [key: `SMTP_${number}`]: number;
  };

  type Pop3StatusCodes = {
    [key: `POP3_${string}`]: string;
  };

  type ImapStatusCodes = {
    [key: `IMAP_${string}`]: string;
  };

  type FtpStatusCodes = {
    [key: `FTP_${number}`]: number;
  };

  // Kombination aller Statuscodes
  export const status: HttpStatusCodes & WsStatusCodes & SmtpStatusCodes & Pop3StatusCodes & ImapStatusCodes & FtpStatusCodes;
}
