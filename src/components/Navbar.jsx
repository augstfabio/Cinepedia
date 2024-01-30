import { Link } from "react-router-dom"
import { BiSearchAlt2} from 'react-icons/bi'
import styles from './navbar.module.css'
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Navbar = () => {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return
    navigate(`/search?q=${search}`)
    setSearch('')
  };
  return (
    <nav id={styles.navbar}>
        <h2 className={styles.h2}>
          <Link to="/cinepedia">Cinepedia</Link>
        </h2>
        <form onSubmit={handleSubmit} className={styles.form} >
            <input  type="text" placeholder="busque um filme" onChange={(e)=>setSearch(e.target.value)} value={search} />
            <button type="submit"><BiSearchAlt2 className={styles.lupa}/></button>
        </form>
       </nav>
  )
}
