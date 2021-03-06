import styled from 'styled-components';

const Home = (props) => {
    return (
        <Container>
            <Section>
                <h5>
                    <a>Hiring in a hurry? - </a>
                </h5>
                <p>
                    Find talented pros in record time with upwork.
                </p>
            </Section>
            <Layout>
                <div>Left side</div>
                <div>Main</div>
                <div>Right side</div>
            </Layout>
        </Container>
    )
};

const Container = styled.div`
    padding-top: 52px;
    max-width: 100%;
`;

const Content = styled.div`
    max-width: 1128px;
    margin-left: auto;
    margin-right: auto;
`;

const Section = styled.section`
    min-height: 50px;
    padding: 16px 0;
    box-sizing: content-box;
    text-align: center;
    text-decoration: underline;
    display: flex;
    justify-content: center;
    h5 {
    color: #0a66c2;
    font-size: 14px;
    a {
      font-weight: 700;
    }
   }
  p {
    padding: 22px 0;
    font-size: 14px;
    color: #434649;
    font-weight: 600;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  }
`;

const Layout = styled.div`
    display: gird;
    grid-template-areas: "leftside main rightside";
    /* grid-template-columns: minmax(0,5fr) minmax(0,12fr) minmax(300px, 7fr); */

`;

export default Home;