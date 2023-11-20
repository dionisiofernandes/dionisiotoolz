import PocketBase from "pocketbase";
import { Table, Col, Row } from "react-bootstrap";
// Setup pb 
const pb = new PocketBase("http://127.0.0.1:8090");
const records = await pb.collection("dados").getFullList({
  sort: "-created",
});

function FirstApi() {
  return (
    <div className="App">
      <div className="innerbolha">

        <h2>Api data - Collection dados</h2>


        <Table bordereless  hover>
          <thead className='table-primary '>
            <tr class>
              <th className='smcol'>id</th>
              <th className='smcol'>Type</th>
              <th>Texto</th>
            </tr>
          </thead>
          <tbody>
            {records.map((records, key) => (
              <tr key={key}>
                <td className="table-data">{records.id}</td>
                <td className="table-data">{records.Type}</td>
                {/* render thmo from api into dom */}
                <td
                  className="table-data"
                  dangerouslySetInnerHTML={{ __html: records.texto }}
                  ></td>
              </tr>
            ))}
          </tbody>
        </Table>
            </div>

            </div>
    
  
  );
}

export default FirstApi;
