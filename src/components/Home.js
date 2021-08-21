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
    
    

`;

export default Home;