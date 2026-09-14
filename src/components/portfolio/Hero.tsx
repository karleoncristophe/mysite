import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <header id="home" className="chapter hero">
      <div className="hero-copy">
        <p className="hud-kicker">01 / EARTH</p>
        <p className="chapter-index">HABITABLE ORBIT</p>
        <h1>{siteConfig.name}</h1>
        <p className="hero-role">{siteConfig.jobTitle}</p>
        <p className="hero-lead">Building digital experiences beyond the ordinary.</p>
        <p className="hero-sub">
          Especialista em React, Next.js, Node.js e desenvolvimento mobile. Transformando ideias em
          soluções digitais no vasto universo da tecnologia.
        </p>
        <dl className="hero-meta">
          <div>
            <dt>ROLE</dt>
            <dd>FULLSTACK ENGINEER</dd>
          </div>
          <div>
            <dt>LOCATION</dt>
            <dd>EARTH / RIO</dd>
          </div>
          <div>
            <dt>STACK</dt>
            <dd>WEB · MOBILE · BACKEND</dd>
          </div>
        </dl>
      </div>
    </header>
  );
}
