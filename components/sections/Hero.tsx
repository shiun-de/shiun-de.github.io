const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export function Hero() {
  return (
    <section id="top">
      <div className="full-bleed hero-image">
        <img src={`${BASE}/hero.png`} alt="shiun EVT prototype" />
      </div>

      <div className="hero-text">
        <h1>shiun</h1>
        <p className="lede">A bedside CO₂ monitor that actually measures CO₂.</p>
      </div>

      <p>
        Most &quot;CO₂ monitors&quot; under €50 are not actually CO₂ monitors. They are
        MOX VOC sensors (SGP30, CCS811, MQ-135) guessing at a number from
        unrelated air chemistry — no optical path, drift by hundreds of ppm,
        fail in ways the user can&apos;t detect. Shiun measures CO₂ directly with a
        Sensirion SCD41 photoacoustic NDIR sensor. Same measurement class as a
        €229 Aranet4, or a lab instrument.
      </p>

      <table>
        <thead>
          <tr>
            <th></th>
            <th>Cheap &quot;CO₂&quot;</th>
            <th>shiun</th>
            <th>Aranet4</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sensor</td>
            <td>MOX VOC estimator</td>
            <td>Photoacoustic NDIR</td>
            <td>NDIR</td>
          </tr>
          <tr>
            <td>Direct CO₂?</td>
            <td>No</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Accuracy</td>
            <td>Wide drift, uncalibrated</td>
            <td>±40 ppm + 5 %</td>
            <td>±50 ppm</td>
          </tr>
          <tr>
            <td>App / cloud</td>
            <td>Often required</td>
            <td>None</td>
            <td>Optional</td>
          </tr>
          <tr>
            <td>Source</td>
            <td>Closed</td>
            <td>Open BOM + firmware</td>
            <td>Closed</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>€15–30</td>
            <td><strong>€129</strong></td>
            <td>€229</td>
          </tr>
        </tbody>
      </table>

      <p>
        Shiun is the first instrument. The long goal is the Apple of bedside
        health devices — premium hardware, built to last a decade, minus the
        radio, the app, and the subscription.
      </p>

      <p>Dark by default. One charge a year. No app, no cloud, no radio.</p>

      <p>
        <strong>€129</strong>. First batch Q4 2026.{' '}
        <a href="#preorder">reserve a unit →</a>
      </p>
    </section>
  );
}
