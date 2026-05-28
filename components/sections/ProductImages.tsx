import Image from 'next/image';

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export function ProductImages() {
  return (
    <section id="product">
      <h2>product</h2>
      <div className="image-grid">
        <figure className="inline-figure">
          <Image
            src={`${BASE}/product-studio-v2.png`}
            alt="Off-white Shiun monitor with an amber light ring"
            width={1402}
            height={1122}
            sizes="(min-width: 900px) 38ch, calc(100vw - 44px)"
          />
          <figcaption>Desk-clean hardware. No phone required.</figcaption>
        </figure>

        <figure className="inline-figure">
          <Image
            src={`${BASE}/lifestyle-morning-v1.png`}
            alt="Shiun on a nightstand beside two adults waking up"
            width={1536}
            height={1024}
            sizes="(min-width: 900px) 38ch, calc(100vw - 44px)"
          />
          <figcaption>Bedroom-first, not office-first.</figcaption>
        </figure>
      </div>

      <div className="image-grid">
        <figure className="inline-figure">
          <Image
            src={`${BASE}/lifestyle-bedtime-v1.png`}
            alt="Shiun on a nightstand while two adults read before sleep"
            width={1537}
            height={1023}
            sizes="(min-width: 900px) 38ch, calc(100vw - 44px)"
          />
          <figcaption>Quiet at night, readable when the room is awake.</figcaption>
        </figure>

        <figure className="inline-figure">
          <Image
            src={`${BASE}/product-exploded-v2.png`}
            alt="Exploded view of the Shiun enclosure, light pipe, PCB, and battery"
            width={1024}
            height={1536}
            sizes="(min-width: 900px) 38ch, calc(100vw - 44px)"
          />
          <figcaption>Simple stack: shell, light pipe, sensor board, cell.</figcaption>
        </figure>
      </div>
    </section>
  );
}
