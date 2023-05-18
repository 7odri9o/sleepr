import { ping } from 'tcp-ping';

describe('Healtcheck', () => {
  test('Auth', async () => {
    const authBaseUrl = process.env.AUTH_BASE_URL;
    const response = await fetch(authBaseUrl);
    expect(response.ok).toBeTruthy();
  });

  test('Reservations', async () => {
    const reservationsBaseUrl = process.env.RESERVATIONS_BASE_URL;
    const response = await fetch(reservationsBaseUrl);
    expect(response.ok).toBeTruthy();
  });

  test('Payments', (done) => {
    const address = process.env.PAYMENTS_HOST;
    const port = parseInt(process.env.PAYMENTS_PORT);
    ping({ address, port }, (error) => {
      if (error) {
        fail();
      }

      done();
    });
  });

  test('Notifications', (done) => {
    const address = process.env.NOTIFICATIONS_HOST;
    const port = parseInt(process.env.NOTIFICATIONS_PORT);
    ping({ address, port }, (error) => {
      if (error) {
        fail();
      }

      done();
    });
  });
});
