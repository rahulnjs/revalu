import styled from "styled-components";
import Explorer from "./Explorer";
import List from "./List";

const Collections = () => {

    return <CollectionsWrapper>
        <CollectionsExplorer >
            <Explorer />
        </CollectionsExplorer>
        <List />
    </CollectionsWrapper>
}

export default Collections;

const CollectionsWrapper = styled.div`
    display: flex;
    gap: 20px;
`;

const CollectionsExplorer = styled.div`
    max-width: 240px;
`;

const CollectionsList = styled.div`
    flex-grow: 1;
`