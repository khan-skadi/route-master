1. In App.js the route is set up to "/drivers/:driver_id". I'm also passing props from route to the DriverProfile component(the component that renders the individual driver).

2. Drivers are created in /components/drivers/AddDriverModal.js. They are created with ActionCreator "addDriver" and they are added to redux store and passed in OurStaff.js to be rendered on the Home Page.

3. The Component - /components/layout/OurStaff.js - renders a list of all the drivers. In it each driver has a Link to /drivers + his own id. So that on click it will open their respectable route.

4. The Component - /components/driverProfileLayout/DriverProfile.js - is the component that renders the individual Driver Profile page. So far its setup to render a DriverProfileList Component which holds the looks of the page.

- DriverProfile.js has a store subscription with mapStateToProps and its passing the driver props to DriverProfileList.js

Current problems:

- Not getting the route props in DriverProfile.js. I can't define the id of the route to be equal to the id of the driver.
- Not getting the driver props from the redux store even though its connected to the store.
  P.S. Im building my own API that is just gonna contain routes that i can pick up in Find Routes section. Can't find an API with only routes from google
