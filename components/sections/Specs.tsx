export function Specs() {
  return (
    <section id="specs">
      <h2>specs</h2>
      <table>
        <thead>
          <tr><th>Role</th><th>Part</th></tr>
        </thead>
        <tbody>
          <tr><td>MCU</td><td>STM32L476RGT6 · Cortex-M4F · 80 MHz</td></tr>
          <tr><td>CO₂</td><td>Sensirion SCD41 · ±40 ppm + 5%</td></tr>
          <tr><td>Light</td><td>Vishay VEML7700 · 0.005 lux</td></tr>
          <tr><td>Display</td><td>GoodDisplay GDEW0154M09 · 1.54&quot; · 200×200</td></tr>
          <tr><td>Buck</td><td>TI TPS62840 · 60 nA Iq</td></tr>
          <tr><td>Battery</td><td>1200 mAh LiPo · USB-C charge</td></tr>
          <tr><td>RTC</td><td>32.768 kHz LSE crystal</td></tr>
          <tr><td>Case</td><td>PC + anodized Al + PMMA halo · 80 × 25 mm</td></tr>
        </tbody>
      </table>
      <dl>
        <dt>Sleep current</dt><dd>~5 µA prototype</dd>
        <dt>Average draw</dt><dd>~255 µA at 600 s cadence</dd>
        <dt>Runtime</dt><dd>100–140 days a charge</dd>
        <dt>Accuracy</dt><dd>±(40 ppm + 5%), 400–5000 ppm</dd>
      </dl>
    </section>
  );
}
