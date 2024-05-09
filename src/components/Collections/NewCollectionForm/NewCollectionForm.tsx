import styled from "styled-components";
import { FormItem } from "../../../lib/Common"
import ControlledTextInput from "../../../lib/ControlledTextInput/ControlledTextInput"
import Button from "../../../lib/Button/Button";
import { useRevaluStore } from "../../../store";
import { useEffect, useState } from "react";
import { ICollection } from "../../../types";
import { getNewCollction } from "../../../data/mock";

const NewCollectionForm = () => {

    const { hideCollectionsModal, createCollection } = useRevaluStore();
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const isNameOk = name.length > 0 && name.length <= 40;
        const isDescOk = desc.length > 0 && desc.length <= 140;
        setIsError(!(isNameOk && isDescOk));
    }, [name, desc]);

    const createNewCollection = () => {
        const collection = getNewCollction(name, desc);
        createCollection(collection);
        hideCollectionsModal();
    }

    return <>
        <h2>
            New Collection
        </h2>
        <FormItem>
            <ControlledTextInput
                label="Collection Name"
                maxChars={40}
                placeholder="Collection Title"
                isMandatory={true}
                onChange={(v) => setName(v)}
                variant="input"
            />
        </FormItem>
        <FormItem>
            <ControlledTextInput
                label="Description"
                maxChars={140}
                placeholder=""
                isMandatory={true}
                onChange={(v) => setDesc(v)}
                variant="textarea"
            />
        </FormItem>
        <FormAction>
            <Button variant="secondary" onClick={() => hideCollectionsModal()}>Close</Button>
            <Button variant="primary-small" disabled={isError} onClick={createNewCollection}>Create Collection</Button>
        </FormAction>
    </>
}

export default NewCollectionForm;

const FormAction = styled.div`
    display: flex;
    gap: 5px;
    justify-content: flex-end;
`;