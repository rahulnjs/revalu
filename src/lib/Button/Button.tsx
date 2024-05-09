import styled from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'primary' | 'secondary' | 'primary-small' | 'tiny' | 'fluid' | 'secondary-full'

}

const Button = (props: ButtonProps) => {
    const variant = props.variant;

    if (variant === 'primary') {
        return <PrimaryButton {...props} />
    } else if (variant === 'primary-small') {
        return <PrimarySmallButton {...props} />
    } else if (variant === 'secondary') {
        return <SecondaryButton {...props} />
    } else if (variant === 'tiny') {
        return <TinyButton {...props} />
    } else if (variant === 'fluid') {
        return <FluidButton {...props} />
    } else if (variant === 'secondary-full') {
        return <SecondaryFullButton {...props} />
    } else {
        throw new Error(`Unknown variant ${variant}`)
    }

};

export default Button;

const BaseButton = styled.button`
    border: none;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    justify-content: center;
`;

const PrimaryButton = styled(BaseButton)`
    background-color: #8c66e0;
    color: #fff;
    padding: 16px;
`;

const SecondaryFullButton = styled(BaseButton)`
    background-color: #f1f1ee;
    color: #2b2b2b;
    padding: 16px;
`;


const SecondaryButton = styled(BaseButton)`
    background-color: transparent;
    font-size: .7rem;
    min-width: 70px;
`;


const FluidButton = styled(SecondaryButton)`
    padding: 0px;
    min-width: fit-content;
`;

const PrimarySmallButton = styled(BaseButton)`
    background-color: #ece6fa;
    color: #2b2b2b;
    padding: 8px 10px;
    font-size: .7rem;

    &:disabled {
        color: #cbbaf1;
        background-color: #ece6fa;
        cursor: default;
    }
`;

const TinyButton = styled(BaseButton)`
    background-color: #ece6fa;
    color: #2b2b2b;
    padding: 4px 5px;
    font-size: .6rem;
    font-weight: 300;
`;