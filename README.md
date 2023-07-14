
# Setup

System Requirements:

- Node.js 16.8 or later.


1. Clone repo
2. Install packages
```bash
npm install
```
3. Start up local dev environment

```bash
npm run dev
```


## Run Jest Tests

```bash
npm test
```

## Notes
- This project was started using create-next-app.
- The 3hr time constraint didnt allow for much. I cut a lot of corners.
- In the interest of time, I decided to use a temporary storage option -- read/writing to file. Obviously, not ideal for production but great for quick projects like this one -- it is very easy to setup. It does not scale and has limitations that are easily tackled by any other mature ORM+DB option out there. 
- There are many areas for improvement:
- More tests: both on the react ceomponents and the api helpers
- Better tests: add proper mocking and setup/teardown
- Client side error handling: Currently, not handling at all
- Storing of time slots as dates: I went with the easiest route I could think of -- a pseudo enum. I didnt not want to get hung up handling dates and told myself I'd go back to it but ran out of time.
- Enforce Typescript: There are some files that did not get typed
- Mobile Responsive View: I didnt get a chance to optimize for mobile


## Dependencies
- NextJS: Fullstack JS framework
- Chakra UI: React Component Library
- Chakra UI Icons: Basic Icons
- React Hook Form: Easy React forms.
- Jest: JS testing library

