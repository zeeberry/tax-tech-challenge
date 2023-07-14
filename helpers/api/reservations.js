const fs = require('fs');

let reservations = require('../../data/reservations.json');

export const Reservations = {
    getAll: () => reservations,
    getByDateTime: (date, time) => reservations.filter(x => x.date === date && x.time_slot === time),
    getById: id => reservations.find(x => x.id.toString() === id.toString()),
    find: x => reservations.find(x),
    create,
};

function create(reservation) {
    // generate new reservation id
    reservation.id = reservations.length ? Math.max(...reservations.map(x => x.id)) + 1 : 1;

    // set date created and updated
    reservation.dateCreated = new Date().toISOString();
    reservation.dateUpdated = new Date().toISOString();

    // add and save reservation
    reservations.push(reservation);
    saveData();

    return reservation;
}

function saveData() {
    fs.writeFileSync('data/reservations.json', JSON.stringify(reservations, null, 4));
}
