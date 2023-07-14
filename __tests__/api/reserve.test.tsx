import { createMocks } from "node-mocks-http";
import handleReservation from "@/pages/api/reserve";

describe("/api/reserve", () => {
  it("books reservation", async () => {
    const { req, res } = createMocks({
      method: "POST",
      body: JSON.stringify({
        name: "Teresa",
        phone: "1233314059",
        email: "teresa@email.com",
        guests: "6",
        date: "2023-07-19",
        time: "1",
      }),
    });

    await handleReservation(req, res);

    expect(res._getStatusCode()).toBe(201);
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        message: "Reservation Booked!",
      }),
    );
  });

  it("books another table for same date, time and guests", async () => {
    const { req, res } = createMocks({
      method: "POST",
      body: JSON.stringify({
        name: "Tamara",
        phone: "1233314059",
        email: "tamara@email.com",
        guests: "6",
        date: "2023-07-19",
        time: "1",
      }),
    });

    await handleReservation(req, res);

    expect(res._getStatusCode()).toBe(201);
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        message: "Reservation Booked!",
      }),
    );
  });

  it("returns error when no table available", async () => {
    const { req, res } = createMocks({
      method: "POST",
      body: JSON.stringify({
        name: "Sandra",
        phone: "1233314059",
        email: "sandra@email.com",
        guests: "6",
        date: "2023-07-19",
        time: "1",
      }),
    });

    await handleReservation(req, res);

    expect(res._getStatusCode()).toBe(409);
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        message: "Unable to book your reservation",
      }),
    );
  });

  it("books a table for another date", async () => {
    const { req, res } = createMocks({
      method: "POST",
      body: JSON.stringify({
        name: "Sandra",
        phone: "1233314059",
        email: "sandra@email.com",
        guests: "6",
        date: "2023-07-20",
        time: "1",
      }),
    });

    await handleReservation(req, res);

    expect(res._getStatusCode()).toBe(201);
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        message: "Reservation Booked!",
      }),
    );
  });
});
