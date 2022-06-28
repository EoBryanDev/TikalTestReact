import "./styles.css";

function Index() {
  return (
    <section className="allContainer">
      <section className="containerIndex">
        <aside className="informationSliter">
          <h1>Client List</h1>
          <hr></hr>
          <div>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Created At</th>
                  <th>Updated At</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="tableId">1</td>
                  <td>bryan</td>
                  <td>bryan@2</td>
                  <td>111-111</td>
                  <td>12/12</td>
                  <td>01/01</td>
                  <td>X | E</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>bryan</td>
                  <td>bryan@2</td>
                  <td>111-111</td>
                  <td>12/12</td>
                  <td>01/01</td>
                  <td>X | E</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>bryan</td>
                  <td>bryan@2</td>
                  <td>111-111</td>
                  <td>12/12</td>
                  <td>01/01</td>
                  <td>X | E</td>
                </tr>
              </tbody>
            </table>
          </div>
        </aside>
        <aside className="informationSliter">
        <h1>Details</h1>
        <hr></hr>
        {/*transformar card em um component*/}
        <div>
            <h2>Bryan</h2>
            <hr></hr>
            <h4>Email:</h4>
            <p>bryan@2</p>
            <hr></hr>
            <h4>Mobile:</h4>
            <p>bryan@2</p>
            <hr></hr>
            <h4>Others Informations:</h4>
            <div>
            <p>12/12    |      01/01     </p> 
            </div>

        </div>
        </aside>
      </section>
       <footer className="lowerTable">
       {/*transformar em componente o table*/}
       <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Created At</th>
                  <th>Updated At</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>bryan</td>
                  <td>bryan@2</td>
                  <td>111-111</td>
                  <td>12/12</td>
                  <td>01/01</td>
                  <td>X | E</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>bryan</td>
                  <td>bryan@2</td>
                  <td>111-111</td>
                  <td>12/12</td>
                  <td>01/01</td>
                  <td>X | E</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>bryan</td>
                  <td>bryan@2</td>
                  <td>111-111</td>
                  <td>12/12</td>
                  <td>01/01</td>
                  <td>X | E</td>
                </tr>
              </tbody>
        </table>
       </footer>
    </section>
  );
}

export default Index;
