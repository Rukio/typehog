import Typer from "../components/ui/Typer/Typer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.pageMain}>
      <Typer />
    </div>
  );
}
