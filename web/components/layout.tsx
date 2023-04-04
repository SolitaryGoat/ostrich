import { ReactElement } from 'react';
import { Container } from 'react-bootstrap';

interface Props {
  children: ReactElement;
}

const Layout = ({ children }: Props) => (
  <Container>
    <h1 className="display-4">FreeSpeechMeter.com</h1>
    <p className="fs-5">How free is your community?</p>
    <hr />
    {children}
  </Container>
);

export default Layout;
