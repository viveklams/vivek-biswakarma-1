import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import themeIcon from "../../assets/sun.svg";
import LinkedInIcon from "../../assets/linkedin-light.svg";

const Hero = () => {
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile Picture of Vivek Biswakarma"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color Mode Icon"
        />
      </div>
      <div className={styles.info}>
        <h1>
          Vivek
          <br />
          Biswakarma
        </h1>
        <h2>Full Stack Developer</h2>
        <span>
          <a
            href="https://www.linkedin.com/in/vivek-biswakarma-5b850a314/"
            target="_blank"
          >
            {" "}
            <img src={LinkedInIcon} alt="Linked In Icon" />
          </a>
        </span>
      </div>
    </section>
  );
};

export default Hero;
