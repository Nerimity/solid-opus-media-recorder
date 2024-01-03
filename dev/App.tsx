import styles from './App.module.css'
import { useMicRecorder } from '../src'

const App = () => {
  const { record, stop } = useMicRecorder()

  const onRecordClick = async () => {
    console.log('recording...')
    const blob = await record()
    console.log('recorded', blob)
  }

  return (
    <div class={styles.App}>
      <button onClick={onRecordClick}>Record</button>
      <button onClick={stop}>Stop</button>
    </div>
  )
}

export default App
