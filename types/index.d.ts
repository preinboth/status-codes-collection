declare module 'status-codes-collection' {
  type StatusCode = {
    [
      key:
        | `HTTP_${number}`
        | `WS_${number}`
        | `SMTP_${number}`
        | `POP3_${string}`
        | `IMAP_${string}`
        | `FTP_${number}`
    ]: number;
  };

  type HttpStatusCodes = StatusCode;
  type WsStatusCodes = StatusCode;
  type SmtpStatusCodes = StatusCode;
  type Pop3StatusCodes = StatusCode;
  type ImapStatusCodes = StatusCode;
  type FtpStatusCodes = StatusCode;

  export const status: StatusCode;
}
