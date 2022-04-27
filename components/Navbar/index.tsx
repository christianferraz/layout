import Link from "next/link"
import { useRouter } from "next/router"
import { navigationLinks } from "../../utils/data"
import styles from "./Navbar.module.scss"

export const Navbar = () => {
  const router = useRouter()
  return (
    <ul className={styles.container}>
      {navigationLinks.map((link, index) => (
        <li key={index} className={[styles.linkItem, router.pathname === link.patch ? styles.linkActive : null].join(' ')}>
          <Link href={link.patch}>
          {link.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}