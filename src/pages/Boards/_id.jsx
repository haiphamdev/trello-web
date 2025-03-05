import Container from '@mui/material/Container';
import AppBar from '../../components/AppBar';
import BoardContent from './BoarContent';
import BoardBar from './BoardBar';

const Board = () => {
    return (
        <Container disableGutters maxWidth={false} sx={{height: '100vh'}} >
            <AppBar />
            <BoardBar />
            <BoardContent />
        </Container>
    );
};

export default Board;