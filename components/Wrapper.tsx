import styled from 'styled-components';

//Interfaces
interface MyProps {
    children : React.ReactNode
}

//Functions
const Wrapper = (props : MyProps) => {
    return(
        <Wrap>
            {props.children}
        </Wrap>
    )
}

//Style
const Wrap = styled.div`
    border: 1px solid red;
    max-width: 1200px;
    margin: auto;
`

export default Wrapper;