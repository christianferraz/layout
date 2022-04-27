import { ReactElement } from "react"
import { Navbar } from "../Navbar"
import styles from "./Layout.module.scss"

type Props = {
  children: ReactElement
}

export const Layout = ({children}: Props) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
          <h1>Meu primeiro layout</h1>
      </header>
      <Navbar></Navbar>
      <main>{children}</main>  
      <footer className={styles.footer}>
        Todos direitos reservados
      </footer>
    </div>
  )
}