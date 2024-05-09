import { useId, useState } from "react";
import styled from "styled-components";
import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";

type ControlledTextInputProps = {
    variant: 'input' | 'textarea'
    maxChars: number;
    label: string;
    isMandatory?: boolean;
    placeholder: string;
    onChange: (value: string) => void;
};

const ControlledTextInput = ({
    variant,
    label,
    onChange,
    maxChars,
    placeholder,
    isMandatory,
}: ControlledTextInputProps) => {
    const [value, setValue] = useState("");
    const [isError, setIsError] = useState(false);
    const id = useId();

    const onInput = (value: string) => {
        setValue(value);
        onChange(value);
        setIsError(value.length > maxChars);
    };

    return (
        <ControlledTextWrapper>
            <Label>
                <label htmlFor={id}>{label}</label>
                {isMandatory ? <Asterics>*</Asterics> : null}
            </Label>
            {variant === 'input' &&
                <Input
                    id={id}
                    onChange={(e) => onInput(e.target.value)}
                    isError={isError}
                    placeholder={placeholder}
                />
            }
            {variant === 'textarea' &&
                <TextArea id={id} onChange={(e) => onInput(e.target.value)}
                    isError={isError}
                    placeholder={placeholder} />
            }
            <TextCounter isError={isError}>{value.length} / {maxChars}</TextCounter>
        </ControlledTextWrapper>
    );
};

const ControlledTextWrapper = styled.div``;
const Label = styled.div`
    margin-bottom: 5px;
    font-weight: 500;
`;
const Asterics = styled.span`
    color: #ef4444;
`;

const TextCounter = styled.div<{ isError?: boolean }>`
    color: ${props => props.isError ? '#ef4444' : '#77776e'};
    text-align: right;
    margin-top: 2px;
    font-size: .65rem;
`;

export default ControlledTextInput;
