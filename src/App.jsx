import styles from './App.module.css'
import Title from './Components/Title'
import Score from './Components/Score';
import Footer from './Components/Footer';
import Cards from './Components/Cards';

function App() {
  return (
    <main className={styles.root}>
      <Title/>
      <Score/>
      <Cards/>
      <Footer/>
    </main>
  )
}

export default App;
