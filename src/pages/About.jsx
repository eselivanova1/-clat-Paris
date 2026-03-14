export default function About({ t }) {
  return (
    <section className="section">
      <div className="container prose">
        <h1>{t.aboutTitle}</h1>
        <p>{t.aboutText}</p>
      </div>
    </section>
  );
}
