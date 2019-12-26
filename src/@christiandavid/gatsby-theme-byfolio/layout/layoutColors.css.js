import { css } from "@emotion/core"
import lineSvg from "../../../static/assets/line.svg"

const styles = css`
  body {
    --oxford-blue: #002642;
    --burgundy: #840032;
    --harvest-gold: #e59500;
    --gainsboro: #e5dada;
    --rich-black: #02040f;
  }

  .e404.layout-wrapper .layout-inner {
    background: var(--gainsboro);
  }

  .e404 .data-section {
    color: #000;
  }

  .aboutme.layout-wrapper .layout-inner {
    background: var(--gainsboro);
  }

  .aboutme .data-section {
    color: #000;
  }

  .aboutme .hamburgercolr::before,
  .aboutme .hamburgercolr::after,
  .e404 .hamburgercolr::before,
  .e404 .hamburgercolr::after {
    background-color: #000;
  }

  .home.layout-wrapper .layout-inner {
    background: var(--rich-black);
    background: var(--rich-black) url(${lineSvg}) center center fixed;
    background-size: contain;
  }

  .home.layout-wrapper h1,
  .home.layout-wrapper h2 {
    color: var(--gainsboro);
  }

  .skill.layout-wrapper .layout-inner {
    color: var(--gainsboro);
    background: var(--burgundy);
    background:
      url(${lineSvg}) center center fixed,
      linear-gradient(
        45deg,
        var(--burgundy),
        var(--harvest-gold)
      );
    background-size: cover;
  }

  .experience.layout-wrapper .layout-inner {
    background: var(--oxford-blue);
    background:
      url(${lineSvg}) center center fixed,
      linear-gradient(
        45deg,
        var(--burgundy),
        var(--oxford-blue)
      );
    background-size: cover;
  }

  .home .hamburgercolr::before,
  .home .hamburgercolr::after,
  .skill .hamburgercolr::before,
  .skill .hamburgercolr::after,
  .experience .hamburgercolr::before,
  .experience .hamburgercolr::after {
    background-color: var(--gainsboro);
  }

  .home .btn-contact-color,
  .experience .btn-contact-color {
    color: var(--gainsboro);
  }

  .aboutme .btn-contact-color,
  .e404 .btn-contact-color {
    color: #000;
  }
`

export default styles
