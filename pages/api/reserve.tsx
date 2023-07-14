import { Users } from "../../helpers/api/users";
import { Tables } from "../../helpers/api/tables";
import { Reservations } from "../../helpers/api/reservations";

export default function handleReservation(req, res) {
  if (req.method === "POST") {
    const { ...data } = JSON.parse(req.body);

    const userData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
    };

    console.log(data);
    const tablesForPartySize = Tables.getByCapacity(data.guests);
    console.log("tableForPartySize", tablesForPartySize);
    const reservationsForDateTime = Reservations.getByDateTime(
      data.date,
      data.time,
    );
    let availableTable;
    if (reservationsForDateTime) {
      const bookedTables = reservationsForDateTime.map((r) => r.table_id);
      console.log("bookedTables", bookedTables);

      availableTable = tablesForPartySize.find(
        (t) => !bookedTables.includes(t.id),
      );
      console.log(availableTable);
      if (!availableTable) {
        res.status(409).json({ message: "Unable to book your reservation" });
        return;
      }
    }

    let user = Users.getByEmail(data.email);
    if (!user) {
      user = Users.create(userData);
    }

    const reservationData = {
      user_id: user.id,
      table_id: availableTable?.id || tablesForPartySize[0].id,
      date: data.date,
      time_slot: data.time,
      party_size: data.guests,
    };

    const reservation = Reservations.create(reservationData);

    res.status(201).json({ message: "Reservation Booked!" });
  }
}
