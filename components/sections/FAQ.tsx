export function FAQ() {
  return (
    <section id="faq">
      <h2>faq</h2>
      <dl>
        <dt>Does it need WiFi or Bluetooth?</dt>
        <dd>No. There is no radio on board. The device is fully standalone.</dd>

        <dt>Is there an app?</dt>
        <dd>No. The e-paper display is the interface. No app, no cloud, no account.</dd>

        <dt>How do I read my history?</dt>
        <dd>Press the touch pad — the e-paper shows the last 8 hours. Plug in USB-C for a serial console with the full log.</dd>

        <dt>Will there be a Bluetooth variant?</dt>
        <dd>Backers vote on a separate radio-equipped variant after the first batch ships. The default shiun stays radio-free.</dd>

        <dt>Battery life?</dt>
        <dd>100–140 days per charge. USB-C, hours to full.</dd>

        <dt>Aranet4 difference?</dt>
        <dd>Aranet is office-class. Shiun is bedroom-class: blanks at 0 lux, rolling-minimum baseline, slope-driven cadence.</dd>

        <dt>Can I customize it?</dt>
        <dd>No. In order to keep prices low and quality high, we don&apos;t offer any customization.</dd>

        <dt>Open source?</dt>
        <dd>Yes. Firmware, schematic, BOM at first ship. MIT.</dd>

        <dt>Where is it made?</dt>
        <dd>Europe. PCBs from Aisler.</dd>

        <dt>Battery replaceable?</dt>
        <dd>Yes. One Phillips screwdriver. Free replacement at year 8.</dd>

        <dt>Bathroom?</dt>
        <dd>No. Bedroom instrument. Out of spec above 90 % RH.</dd>
      </dl>
    </section>
  );
}
