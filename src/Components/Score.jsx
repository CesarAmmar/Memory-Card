import CurrentScore from './CurrentScore';
import BestScore from './BestScore';
import styles from '../Styles/Score.module.css';
import { useSelector } from 'react-redux';
function Score() {
   const score=useSelector((state)=>state.cards);
    return ( 
        <div className={styles.container}>
            <CurrentScore currentScore={score.currentScore}/>
            <BestScore bestScore={score.bestScore}/>
        </div>
     );
}

export default Score;