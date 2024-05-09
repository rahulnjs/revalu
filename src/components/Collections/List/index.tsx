import styled from "styled-components";
import { initial_collections } from "../../../data/mock";
import Card from "../../../lib/Card/Card";
import Divider from "../../../lib/Divider/Divider";
import Button from "../../../lib/Button/Button";
import { FiTrash2 as TrashIcon, FiDownloadCloud as DownloadIcon, FiPlus } from 'react-icons/fi';
import { device } from "../../../util/style";
import { useState } from "react";
import LightModal from "../../../lib/Modal/LightModal";
import ControlledTextInput from "../../../lib/ControlledTextInput/ControlledTextInput";
import { FormItem } from "../../../lib/Common";


const List = () => {
    const [isOpen, setIsOpen] = useState(false);

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
        <Divider gap={1} />
        <CollectionList>
            {initial_collections.map(c => (<Card>
                <CollectionHeader>
                    <Button variant="tiny">Download data <DownloadIcon /></Button>
                    <CollectionActions>
                        <InventoryInfo>{c.count} <img src="/inventory.png" /></InventoryInfo>
                        <Button variant="fluid"><TrashIcon /></Button>
                    </CollectionActions>
                </CollectionHeader>
                <CollectionTitle>{c.title}</CollectionTitle>
                <CollectionDescription>{c.description}</CollectionDescription>
            </Card>))}
            <Card variant="action">
                <AddButtonWrapper>
                    <AddButton><Button variant="fluid" onClick={() => setIsOpen(true)}><FiPlus /></Button></AddButton>
                </AddButtonWrapper>
            </Card>
        </CollectionList>
        <LightModal isOpen={isOpen} ariaHideApp={false}>
            <h2>
                New Collection
            </h2>
            <FormItem>
                <ControlledTextInput
                    label="Collection Name"
                    maxChars={40}
                    placeholder="Collection Title"
                    isMandatory={true}
                    onChange={(v) => { }}
                    variant="input"
                />
            </FormItem>
            <FormItem>
                <ControlledTextInput
                    label="Description"
                    maxChars={140}
                    placeholder=""
                    isMandatory={true}
                    onChange={(v) => { }}
                    variant="textarea"
                />
            </FormItem>
        </LightModal>
    </ListWrapper >
}

export default List;

const ListWrapper = styled.div`
`;


const CollectionList = styled.div`
    display: grid;
    gap: 16px;
    margin-top: 16px;

    @media ${device.mobile} { 
        grid-template-columns: 1fr;
    }

    @media ${device.tablet} { 
        grid-template-columns: 1fr 1fr;
    }

    @media ${device.laptop} { 
        grid-template-columns: 1fr 1fr 1fr;
    }

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
    font-size: .65rem;
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
    font-weight: 400;
    font-size: .8rem; 
    color: #2b2b2b;

    @media${device.tablet} {
        width: 60%;
    }

    @media${device.laptop} {
        width: 30%;
    }
`;



const CollectionActions = styled.div`
    display: flex;
    gap: 10px;
    font-size: .6rem;
`;

const AddButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center; 
    cursor: pointer;
`;

const AddButton = styled.div`
    padding: 16px;
    border-radius: 50%;
    background-color: #e5e5e1;
`;

const InventoryInfo = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 16px;
    }
`;