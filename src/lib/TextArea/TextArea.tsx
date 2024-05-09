import styled from "styled-components"

const TextArea = styled.textarea<{ isError?: boolean }>`
    border: 1px solid #e5e5e1;
    border-radius: 8px;
    padding: 10px 6px;
    outline: none;
    width: 100%;
    height: 100px;
    box-shadow: 0px 0px 1px 0px rgba(0,0,0,.1);

    ${props => props.isError ? `
        border-color: #fda5a5;
        outline: 2px solid #fee2e1;
    `: ``}
`;

export default TextArea;