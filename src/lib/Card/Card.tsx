import { ReactNode } from "react";
import styled from "styled-components";

type CardProps = {
    children?: ReactNode;
    elevation?: 0 | 1 | 2;
    variant?: 'basic' | 'action';
}

const Card = ({ elevation = 0, variant = 'basic', children }: CardProps) => {
    return <CardWrapper elevation={elevation} variant={variant}>
        {children}
    </CardWrapper>
}

export default Card;

const shadows: Record<number, string> = {
    0: `none`,
    1: `0px 2px 10px 3px rgba(0,0,0,0.1)`,
    2: `0px 10px 15px -3px rgba(0,0,0,0.1)`
}

const bgColor: Record<string, string> = {
    'basic': '#fff',
    'action': '#f1f1ee'
}

const CardWrapper = styled.div<{ elevation: number, variant: string }>`
    border: 1px solid #d9d9d6;
    padding: 20px 16px;
    border-radius: 8px;
    box-shadow: ${props => shadows[props.elevation]};
    background-color: ${props => bgColor[props.variant]};
    width: 100%;
`;

