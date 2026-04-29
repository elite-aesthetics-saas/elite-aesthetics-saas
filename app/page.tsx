export default function Home() {
  return (
    <main style={{ padding: 40, fontFamily: "Arial" }}>
      <h1 style={{ fontSize: 36, fontWeight: 700 }}>
        Elite Aesthetics & Body Contours
      </h1>

      <p style={{ marginTop: 10, fontSize: 18 }}>
        Luxury booking system for aesthetic treatments in Atlanta, GA.
      </p>

      <hr style={{ margin: "20px 0" }} />

      <h2>Services</h2>

      <ul style={{ lineHeight: 2 }}>
        <li>Teeth Whitening — $75</li>
        <li>Post-Op Massage — $55</li>
        <li>Dental Deep Cleaning — $25</li>
        <li>Dental Bracket Placement — $75</li>
        <li>Simple Facial — $75</li>
        <li>Full Service Facial — $150</li>
        <li>Facial Massage with Pedicure — $125</li>
      </ul>

      <p style={{ marginTop: 20 }}>
        Mandatory $30 deposit required for all bookings.
      </p>
    </main>
  );
}
