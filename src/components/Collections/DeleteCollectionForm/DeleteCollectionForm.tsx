import styled from "styled-components";
import Button from "../../../lib/Button/Button";
import { useRevaluStore } from "../../../store";

const DeleteCollectionForm = () => {
    const { removeCollection, selectedCollection, hideCollectionsModal } = useRevaluStore();


    const onRemoveCollection = () => {
        if (selectedCollection) {
            removeCollection(selectedCollection.id)
        }
        hideCollectionsModal();
    }

    return (
        <Wrapper>
            <Heading>Delete Collection</Heading>
            <SubHeading>
                Are you sure you would like to delete this collection?
            </SubHeading>
            <SubHeading>You won't be able to undo this?</SubHeading>
            <Actions>
                <Button
                    variant="primary"
                    onClick={onRemoveCollection}
                >
                    Delete
                </Button>
                <Button variant="secondary-full" onClick={hideCollectionsModal}>Cancel</Button>
            </Actions>
        </Wrapper>
    );
};

export default DeleteCollectionForm;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

const Heading = styled.h1`
  font-weight: 500;
  color: #2b2b2b;
`;

const SubHeading = styled.div`
  font-size: 1rem;
  color: #77776e;
  text-align: center;
`;

const Actions = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;
