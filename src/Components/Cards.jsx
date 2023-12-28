import { ReRender, choseCard ,handleCurrentScore} from '../State/Reducers/CardsSlice';
import styles from '../Styles/Cards.module.css';
import Card from './Card';
import {useSelector , useDispatch} from 'react-redux'

function Cards() {
    const cards=useSelector((state)=> state.cards.cards);
    const selectedCards = useSelector(state => (state.cards.clickedCards));
    const dispatch=useDispatch();
    const handleClick = (id) => {
        dispatch(ReRender());
        dispatch(choseCard(id));
        dispatch(handleCurrentScore());
    }
    return ( 
        <div className={styles.container}>
            {
                cards.map((card) => (
                    <Card name={card.name} image={card.src} key={card.id} onClick={() => handleClick(card.id)}/>
                ))
            }
        </div>
     )
    }
export default Cards;