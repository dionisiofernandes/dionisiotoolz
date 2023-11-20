import "./AntTable.css";
import PocketBase from "pocketbase";
import { Table } from "antd";
// Setup pb
const endpoint = process.env.REACT_APP_PB
const pb = new PocketBase(endpoint);
const records = await pb.collection("Parameters").getFullList({
  sort: "-created",
});

const columns = [
  {
    title: "number",
    dataIndex: "number",
  },
  {
    title: "txt",
    dataIndex: "txt",
  },
  {
    title: "html",
    dataIndex: "html",
    render: (html) => <div dangerouslySetInnerHTML={{ __html: html }} />, //render HTML from the pb field
  },
  {
    title: "collectionId",
    dataIndex: "collectionId",
  },
  {
    title: "id",
    dataIndex: "id",
  },
  {
    title: "file",
    dataIndex: "file",
    render: (id, record) => (
      <img
        className="imgSide"
        alt="img"
        src={`${endpoint}/api/files/${record.collectionId}/${record.id}/${record.file}`}
      />
    ),
  },
];

function AntTable() {
  return (
    <div>
      <h3>Test</h3>
      <Table dataSource={records} columns={columns}></Table>
    </div>
  );
}

export default AntTable;
