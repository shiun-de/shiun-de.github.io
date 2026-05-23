export function HowItWorks() {
  return (
    <section id="how">
      <h2>how</h2>
      <ol>
        <li>Display blanks below 0.5 lux. Halo only above breach threshold.</li>
        <li>Rolling 7-day minimum, 420 ppm anchor. Calibrates without seeing outdoor air.</li>
        <li>Sample interval = f(CO₂ slope). 600 / 120 / 30 s. Two-step hysteresis.</li>
      </ol>
    </section>
  );
}
