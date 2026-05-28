import Image from 'next/image';

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export function Hero() {
  return (
    <section id="top">
      <div className="full-bleed hero-image">
        <Image
          src={`${BASE}/product-hero-v2.png`}
          alt="Shiun bedside CO2 monitor on a nightstand"
          width={1537}
          height={1023}
          priority
          sizes="100vw"
        />
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

      <table className="comparison-table">
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
            <td data-label="Cheap &quot;CO2&quot;">MOX VOC estimator</td>
            <td data-label="shiun">Photoacoustic NDIR</td>
            <td data-label="Aranet4">NDIR</td>
          </tr>
          <tr>
            <td>Direct CO₂?</td>
            <td data-label="Cheap &quot;CO2&quot;">No</td>
            <td data-label="shiun">Yes</td>
            <td data-label="Aranet4">Yes</td>
          </tr>
          <tr>
            <td>Accuracy</td>
            <td data-label="Cheap &quot;CO2&quot;">Wide drift, uncalibrated</td>
            <td data-label="shiun">±40 ppm + 5 %</td>
            <td data-label="Aranet4">±50 ppm</td>
          </tr>
          <tr>
            <td>App / cloud</td>
            <td data-label="Cheap &quot;CO2&quot;">Often required</td>
            <td data-label="shiun">None</td>
            <td data-label="Aranet4">Optional</td>
          </tr>
          <tr>
            <td>Source</td>
            <td data-label="Cheap &quot;CO2&quot;">Closed</td>
            <td data-label="shiun">Open BOM + firmware</td>
            <td data-label="Aranet4">Closed</td>
          </tr>
          <tr>
            <td>Price</td>
            <td data-label="Cheap &quot;CO2&quot;">€15–30</td>
            <td data-label="shiun"><strong>€129</strong></td>
            <td data-label="Aranet4">€229</td>
          </tr>
        </tbody>
      </table>

      <p>
        Shiun is the first instrument. The long goal is the Apple of bedside
        health devices — premium hardware, built to last a decade, minus the
        radio, the app, and the subscription.
      </p>

      <p>Dark by default. Months per charge. No app, no cloud, no radio.</p>

      <p>
        <strong>€129</strong>. First batch Q4 2026.{' '}
        <a href="#preorder">reserve a unit →</a>
      </p>
    </section>
  );
}
