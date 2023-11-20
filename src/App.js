// import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Col, Row } from "react-bootstrap";
import FirstApi from "./components/FirstApi";
import AntTable from "./components/AntTable";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AntTable />
        {/* <Row>
          <Col>
            <FirstApi />
          </Col>
        </Row> */}
      </header>
    </div>
  );
}

export default App;
