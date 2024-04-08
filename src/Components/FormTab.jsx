import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SingleScanForm from '../Forms/SingleScanForm';
import ContiniousScanForm from '../Forms/ContiniousScanForm';

function FormTab() {
  return (
    <Tabs
      defaultActiveKey="Single Scan"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="Single Scan" title="Single Scan">
        <SingleScanForm/>
      </Tab>
      <Tab eventKey="Continious Scan" title="Continious Scan">
      <ContiniousScanForm/>
      </Tab>
      
    </Tabs>
  );
}

export default FormTab;