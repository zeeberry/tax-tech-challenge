import { createMocks } from 'node-mocks-http';
import handleReservation from '@/pages/api/reserve';

describe('/api/reserve', () => {
  it('returns name', async() => {
    const { req, res } = createMocks({
      method: 'POST',
      body: JSON.stringify({
        name: 'Teresa',
        phone: '1233314059',
        email: 'test@email.com',
        guests: '4',
        date: '',
        time: '1'
      }),
    });

    await handleReservation(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        name: 'Teresa',
      }),
    );
  })
})

