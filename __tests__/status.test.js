import { status } from '../index.js';

describe('Status Codes', () => {
  test('HTTP_200_OK should be 200', () => {
    expect(status.HTTP_200_OK).toBe(200);
  });

  test('WS_1000_NORMAL_CLOSURE should be 1000', () => {
    expect(status.WS_1000_NORMAL_CLOSURE).toBe(1000);
  });

  test('SMTP_250_REQUEST_COMPLETED should be 250', () => {
    expect(status.SMTP_250_REQUEST_COMPLETED).toBe(250);
  });

  test('POP3_OK should be +OK', () => {
    expect(status.POP3_OK).toBe('+OK');
  });
  test('IMAP_AUTHOK should be AUTHOK', () => {
    expect(status.IMAP_AUTHOK).toBe('AUTHOK');
  });
  test('FTP_110_RESTART_MARK should be 110', () => {
    expect(status.FTP_110_RESTART_MARK).toBe(110);
  });
});
