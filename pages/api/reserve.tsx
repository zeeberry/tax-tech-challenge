export default function handleReservation(req, res) {
  if (req.method === 'POST') {
    const { phone, email, name, guests, date, time } = JSON.parse(req.body);
    res.status(200).json({ name: name });
  } else {
    res.status(200).json({ text: 'Hello' });
  }
}
