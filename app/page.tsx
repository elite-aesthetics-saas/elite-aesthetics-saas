export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", background: "#fafafa" }}>
      
      {/* HERO SECTION */}
      <section style={{ padding: "80px 40px", textAlign: "center", background: "#ffffff" }}>
        <h1 style={{ fontSize: 42, marginBottom: 10 }}>
          Elite Aesthetics & Body Contours
        </h1>

        <p style={{ fontSize: 18, color: "#555", maxWidth: 700, margin: "0 auto" }}>
          Advanced aesthetic treatments designed for natural, balanced results.
          Serving all skin types and body goals with personalized care.
        </p>

        <button style={{
          marginTop: 30,
          padding: "12px 24px",
          fontSize: 16,
          background: "#111",
          color: "white",
          border: "none",
          borderRadius: 8,
          cursor: "pointer"
        }}>
          Book Consultation
        </button>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "60px 40px", background: "#f5f5f5" }}>
        <h2 style={{ textAlign: "center", marginBottom: 40 }}>Services</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 20,
          maxWidth: 1000,
          margin: "0 auto"
        }}>
          
          <div style={cardStyle}>
            Body Contouring
          </div>

          <div style={cardStyle}>
            Skin Rejuvenation
          </div>

          <div style={cardStyle}>
            Laser Treatments
          </div>

          <div style={cardStyle}>
            Anti-Aging Solutions
          </div>

        </div>
      </section>

      {/* BEFORE / AFTER PLACEHOLDER */}
      <section style={{ padding: "60px 40px", background: "#fff", textAlign: "center" }}>
        <h2>Before & After Results</h2>
        <p style={{ color: "#666", maxWidth: 600, margin: "10px auto" }}>
          Real patient transformations showcasing natural, balanced enhancements.
        </p>

        <div style={{
          marginTop: 30,
          height: 200,
          border: "2px dashed #ccc",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#888"
        }}>
          Image gallery coming next step
        </div>
      </section>

      {/* FOOTER CTA */}
      <section style={{ padding: "60px 40px", background: "#111", color: "white", textAlign: "center" }}>
        <h2>Ready to Begin Your Transformation?</h2>
        <p>Book your consultation today.</p>

        <button style={{
          marginTop: 20,
          padding: "12px 24px",
          fontSize: 16,
          background: "white",
          color: "#111",
          border: "none",
          borderRadius: 8,
          cursor: "pointer"
        }}>
          Book Now
        </button>
      </section>

    </main>
  );
}

const cardStyle = {
  background: "white",
  padding: "30px",
  borderRadius: "12px",
  textAlign: "center",
  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
  fontWeight: 500
};