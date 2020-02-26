import React from "react";
import Button from "react-bootstrap/Button";

export default function ProjectDescription() {
  return (
    <div className="home__project-description-wrapper">
      <div className="home__project-description-container">
        <div className="home__project-description-title-wrapper">
          <h2 className="home__project-description-title">Film directors of Belarus</h2>
          <p className="home__project-description-first-part">
            The first Belarusian feature movie - "Liasnaia byl'"
            was made by a script of Belarusian writer M. Charot
            and Yu. Tarych in 1926.
            It was soon followed by "Da zautra" (1929, dir. Yu. Tarych),
            "Kastus' Kalinouski" (1928, dir. U. Hardzin),
            "U ahni narodzhanaia" (1930, dir. U. Korsh-Sablin),
            "Zhanchyna" (1932, dir. Ia. Dzihan).
          </p>
        </div>
        <div className="home__project-description-second-part-wrapper">
          <p className="home__project-description-second-part-intro">
            Among belarusian writers working for cinematography and professional scriptwriters were: &nbsp; <br/>
          </p>
          <ul className="home__project-description-second-part-list">
            <li>P. Brouka - "Hto tvoj siabar?", 1934</li>
            <li>Ia. Maur - "Paleskiia rabinzony", 1935</li>
            <li>Z. Biadulia - "Salavej", with M. Taube, 1937</li>
            <li>A. Vol'ny, "U ahni narodzhany", 1930</li>
            <li>R. Karabec, "Dvojchy narodzhany", 1934</li>
          </ul>
        </div>
        <div className="home__project-description-third-part-wrapper">
          <p className="home__project-description-third-part">
            In 20-30-ies Belarusian studio was located in Leningrad.
            It was moved to Miensk and became "Belarusfilm" later.
            The first sound Belarusian movie was "Pershy uzvod" directed by U.
            Korsh-Sablin in 1933. It is considered as one of the most
            significant films of pre-war Belarusian cinematography.
          </p>
        </div>
        <Button className="home__project-description-button" variant="dark">Watch All Film Makers &#8594;</Button>
      </div>
    </div>
  )
}
