import { FiChevronDown, FiChevronLeft, FiFolder, FiFolderPlus } from "react-icons/fi";
import Button from "../../../lib/Button/Button";
import Card from "../../../lib/Card/Card";
import Divider from "../../../lib/Divider/Divider";
import styled from "styled-components";


const collections = [1, 2, 3, 4];

const Explorer = () => {
    return <Card elevation={1}>
        <Header>
            My Collections <FiChevronDown />
        </Header>
        {collections.map(c => <CollectionItem key={`col-${c}`}>
            <CollectionInfo>
                <FiFolder />
                Collection {c}
            </CollectionInfo>
            <FiChevronLeft />
        </CollectionItem>)}
        <Divider gap={3} />
        <Button variant="fluid"><FiFolderPlus /> New collection</Button>
    </Card>
}


export default Explorer;


const Header = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 18px;
`;

const CollectionItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 5px 0px;
    padding: 5px 0px;
    flex-wrap: no-wrap;

`;

const CollectionInfo = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
    font-weight: 400;
`;

