import styled from "styled-components";
import Header from "./components/Header";
import Button from "./lib/Button/Button";
import Card from "./lib/Card/Card";
import ControlledTextInput from "./lib/ControlledTextInput/ControlledTextInput";
import Collections from "./components/Collections";

function App() {
  return (
    <div>
      <Header />

      <Body>
        <Collections />
      </Body>


      <div style={{ display: 'none' }}>
        <ControlledTextInput
          label="Collection Name"
          maxChars={5}
          placeholder="Collection Title"
          isMandatory={true}
          onChange={(v) => { }}
          variant="input"
        />
        <br />
        <br />
        <br />
        <ControlledTextInput
          label="Description"
          maxChars={5}
          placeholder=""
          isMandatory={true}
          onChange={(v) => { }}
          variant="textarea"
        />

        <Button variant="primary">I am primary</Button>
        <Button variant="primary-small">I am primary small</Button>
        <Button variant="secondary">I am secondary</Button>
        <Button variant="primary-small" disabled={true}>I am primary small but disabled</Button>


        <br />
        <br />
        <br />

        <Card>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum asperiores tenetur vitae esse similique excepturi placeat nam laboriosam voluptate dolorem?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum asperiores tenetur vitae esse similique excepturi placeat nam laboriosam voluptate dolorem?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum asperiores tenetur vitae esse similique excepturi placeat nam laboriosam voluptate dolorem?
        </Card>
        <br />
        <br />
        <br />
        <Card elevation={1}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum asperiores tenetur vitae esse similique excepturi placeat nam laboriosam voluptate dolorem?
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum asperiores tenetur vitae esse similique excepturi placeat nam laboriosam voluptate dolorem?
        </Card>
        <br />
        <br />
        <br />
        <Card elevation={1} variant="action">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum asperiores tenetur vitae esse similique excepturi placeat nam laboriosam voluptate dolorem?
        </Card>
      </div>
    </div>
  );
}

export default App;

const Body = styled.div`
  margin-top: 16px;
  padding: 12px 20px;
`;