import styled from "styled-components";


const gaps: Record<number, string> = {
    0: '',
    1: '6px 0px',
    2: '10px 0px',
    3: '12px 0px',
}


const Divider = styled.div<{ gap: 0 | 1 | 2 | 3 }>`
    height: 1px;
    background-color: #ececea;
    margin: ${props => gaps[props.gap]};
`

export default Divider;