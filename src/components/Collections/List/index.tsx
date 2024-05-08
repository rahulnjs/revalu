import styled from "styled-components";
import { initial_collections } from "../../../data/mock";
import Card from "../../../lib/Card/Card";
import Divider from "../../../lib/Divider/Divider";
import Button from "../../../lib/Button/Button";

const List = () => {
    return <ListWrapper>
        <SectionHeaderWrapper>
            <SectionHeader>My Collections</SectionHeader>
            <SectionDescription>
                Introducing collections: the ability to manage your materials your way.
            </SectionDescription>
        </SectionHeaderWrapper>
        <ResultInfo>
            Showing 118 Results
        </ResultInfo>
        <Divider />
        <CollectionList>
            {initial_collections.map(c => (<Card>
                <CollectionHeader>
                    <Button variant="tiny">Download data X</Button>
                    <CollectionActions>
                        <div>{c.count} r</div>
                        <div>del</div>
                    </CollectionActions>
                </CollectionHeader>
                <CollectionTitle>{c.title}</CollectionTitle>
                <CollectionDescription>{c.description}</CollectionDescription>
            </Card>))}
            <Card variant="action">
                <AddButtonWrapper>
                    <AddButton>+</AddButton>
                </AddButtonWrapper>
            </Card>
        </CollectionList>
    </ListWrapper >
}

export default List;

const ListWrapper = styled.div`
`;


const CollectionList = styled.div`
    display: grid;
    gap: 16px;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 16px;
`;


const CollectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;

const CollectionTitle = styled.div`
    font-size: .9rem;
    color: #2b2b2b;
`;


const CollectionDescription = styled.div`
    font-size: .7rem;
    color: #2b2b2b;
    margin-top: 8px;
`;


const ResultInfo = styled.div`
    color: #77776e;
    text-align: center;
    padding-bottom: 6px;
    font-size: .7rem;
`;

const SectionHeaderWrapper = styled.div`

`;

const SectionHeader = styled.h2`
    margin-bottom: 30px;
    color: #2b2b2b;
`;

const SectionDescription = styled.div`
    margin-bottom: 30px;
    width: 30%;
    font-weight: 400;
    font-size: .8rem; 
    color: #2b2b2b;
`;



const CollectionActions = styled.div`
    display: flex;
    gap: 10px;
`;

const AddButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center; 
    cursor: pointer;
`;

const AddButton = styled.div`
    padding: 12px 18px 16px 18px;
    border-radius: 50%;
    background-color: #e5e5e1;
`;