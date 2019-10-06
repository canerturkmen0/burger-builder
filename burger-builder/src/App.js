import React, { Component } from "react";

import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;

/*
FIREBASE: automatically gives you some REST API endpoints and
MongoDB like database which you can use to store data so that we don't have to write
any server side code.
*/

/*
There is an endpoint where we can send data and then
it will automatically be stored in that database.

Still we won't be connecting to the database directly.
We're just sending HTTP request and firebase is doing the mapping of HTTP endpoints
to the database,
cool thing about this service.
*/

// We don't have table structure in Firebase.
// We just have JSON like nested structure

/*
If you send a request to baseurl/orders,
it's going to create our orders node and store our orders beneath that node.
*/
