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
});
