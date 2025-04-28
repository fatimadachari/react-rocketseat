import { Header } from "./components/Header";
import './global.css';
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar";
export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <aside>
          <Sidebar/>
        </aside>
        <main>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus magni tempore ex asperiores! Error id corrupti similique rem impedit sint pariatur architecto quo eos, distinctio eum fugit doloribus cumque dolor.</main>
      </div>
    </div>
  )
}