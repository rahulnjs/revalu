import styled from "styled-components";
import Explorer from "./Explorer";
import List from "./List";
import { device } from "../../util/style";
import { CollectionModalAction, useRevaluStore } from "../../store";
import LightModal from "../../lib/Modal/LightModal";
import NewCollectionForm from "./NewCollectionForm/NewCollectionForm";
import DeleteCollectionForm from "./DeleteCollectionForm/DeleteCollectionForm";

const Collections = () => {

    const { isCollectionModalOpen, collectionModalAction } = useRevaluStore();

    return <CollectionsWrapper>
        <CollectionsExplorer >
            <Explorer />
        </CollectionsExplorer>
        <List />
        <LightModal isOpen={isCollectionModalOpen} ariaHideApp={false}>
            {collectionModalAction === CollectionModalAction.ADD_COLLECTION && <NewCollectionForm />}
            {collectionModalAction === CollectionModalAction.REMOVE_COLLECTION && <DeleteCollectionForm />}
        </LightModal>
    </CollectionsWrapper>
}

export default Collections;

const CollectionsWrapper = styled.div`
    display: flex;
    gap: 20px;

    @media ${device.mobile} { 
        flex-direction: column;
    }

    @media ${device.tablet} { 
        flex-direction: row;
    }


`;

const CollectionsExplorer = styled.div`
    @media ${device.mobile} { 
        width: 100%;
    }

    @media ${device.tablet} { 
            max-width: 220px;
    min-width: 220px;
    }

`;