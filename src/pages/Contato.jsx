import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const styles = {
  intro: {
    backgroundImage: "url(img/BackgroundAmarelo.png)",
    padding: "80px 0px 80px 0px",
    display: "flex",
    flexDirection: "column",
    gap: "40px",
  },

  title: {
    fontSize: "48px",
    fontFamily: "Pacifico",
    weight: "400",
    marginLeft: "8%",
    color: "#FBFBFB",
  },

  names: {
    fontSize: "24px",
    display: "flex",
    gap: "8px",
    fontFamily: "Poppins",
    color: "#886A19",
  },

  finalContent: {
    fontSize: "40px",
    fontFamily: "Pacifico",
    margin: "0% 0% 0% 2%",
    weight: "400",
    color: "#006207",
  },

  icon: {
    display: "flex",
    flexDirection: "column",
    height: "20px",
    marginBottom: "20px",
    color: "#FFFFFF",
    margin: "10px",
    gap: "5px",
    marginLeft: "9.5%",
    fontSize: "14px",
    fontFamily: "Poppins",
    color: "#FFFFFF",
  },

  cardNames: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
  },

  socialMedia: {
    display: "flex",
    flexDirection: "row",
    gap: "8px",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
  },

  cardRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "0% 8% 0% 8%",
  },

  contentLink: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  christmas: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0% 12% 0% 0%",
  },

  photo: {
    width: "100px",
  },
};
function Contato() {
  return (
    <>
      <div style={styles.intro}>
        <div style={styles.title}>Desenvolvedores</div>
        <div style={styles.cardRow}>
          <div style={styles.cardNames}>
            <h3 style={styles.names}>Eduardo Vitor</h3>
            <div style={styles.contentLink}>
              <a
                target="_blank"
                style={styles.socialMedia}
                href="https://www.linkedin.com/in/eduardo-vítor/"
              >
                <LinkedInIcon />
                <p>eduardo-vítor</p>
              </a>

              <a
                target="_blank"
                style={styles.socialMedia}
                href="https://github.com/EduardoVitor020"
              >
                <GitHubIcon />
                <p>EduardoVitor020</p>
              </a>
              <div />
            </div>
          </div>
          <div style={styles.cardNames}>
            <h3 style={styles.names}>Hadriel Gomes</h3>
            <div style={styles.contentLink}>
              <a
                target="_blank"
                style={styles.socialMedia}
                href="https://www.linkedin.com/in/gomeshadriel/"
              >
                <LinkedInIcon />
                <p>gomeshadriel</p>
              </a>

              <a
                target="_blank"
                style={styles.socialMedia}
                href="https://github.com/gomeshadriel"
              >
                <GitHubIcon />
                <p>gomeshadriel</p>
              </a>
              <div />
            </div>
          </div>
          <div style={styles.cardNames}>
            <h3 style={styles.names}>Juan Pablo</h3>
            <div style={styles.contentLink}>
              <a
                target="_blank"
                style={styles.socialMedia}
                href="https://www.linkedin.com/in/juanpabloflg/"
              >
                <LinkedInIcon />
                <p>juanpabloflg</p>
              </a>

              <a
                target="_blank"
                style={styles.socialMedia}
                href="https://github.com/juanpabloflg"
              >
                <GitHubIcon />
                <p>juanpabloflg</p>
              </a>
              <div />
            </div>
          </div>
          <div style={styles.cardNames}>
            <h3 style={styles.names}>Lucas Belo</h3>
            <div style={styles.contentLink}>
              <a
                target="_blank"
                style={styles.socialMedia}
                href="https://www.linkedin.com/in/lucasbelocarvalho15/"
              >
                <LinkedInIcon />
                <p>lucasbelocarvalho15</p>
              </a>

              <a
                target="_blank"
                style={styles.socialMedia}
                href="https://github.com/lucasbelo01"
              >
                <GitHubIcon />
                <p>lucasbelo01</p>
              </a>
              <div />
            </div>
          </div>
          <div style={styles.cardNames}>
            <h3 style={styles.names}>Milena Mafra</h3>
            <div style={styles.contentLink}>
              <a
                target="_blank"
                style={styles.socialMedia}
                href="https://www.linkedin.com/in/milenamafra/"
              >
                <LinkedInIcon />
                <p>milenamafra</p>
              </a>

              <a
                target="_blank"
                style={styles.socialMedia}
                href="https://github.com/milenamafra96"
              >
                <GitHubIcon />
                <p>milenamafra96</p>
              </a>
              <div />
            </div>
          </div>
          <div style={styles.cardNames}>
            <h3 style={styles.names}>Samara Alves</h3>
            <div style={styles.contentLink}>
              <a
                target="_blank"
                style={styles.socialMedia}
                href="https://www.linkedin.com/in/samaraalvesg/"
              >
                <LinkedInIcon />
                <p>samaraalvesg</p>
              </a>

              <a
                target="_blank"
                style={styles.socialMedia}
                href="https://github.com/samaraalvesgomes"
              >
                <GitHubIcon />
                <p>samaraalvesgomes</p>
              </a>
              <div />
            </div>
          </div>
        </div>
        <div style={styles.christmas}>
          <img style={styles.photo} src="./img/noelRena.svg"></img>
          <h2 style={styles.finalContent}>Boas Festas!</h2>
        </div>
      </div>
    </>
  );
}
export default Contato;
