import {Container, HeaderWrapper, ToggleIcon} from './styles/headerStyles';

function Header({toggleTheme}){
    return (
       <Container>
           <HeaderWrapper>
           <h1>TODO</h1>
           <ToggleIcon onClick={toggleTheme} />
           </HeaderWrapper>
       </Container>
    )
}

export default Header;