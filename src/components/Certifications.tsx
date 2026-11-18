import { certifications } from "../data/certifications";
import { SectionHeader } from "./SectionHeader";

export function Certifications() {
  return (
    <section id="certifications">
      <div className="container">
        <SectionHeader
          label="// 04 &nbsp; Certifications"
          title="Certifications"
          description="Professional certificates and credentials."
        />
        <div className="certifications-grid">
          {certifications.map((certification) => (
            <article
              className="certification-card"
              key={certification.id}
            >
              <div className="certification-card-top">
                <span className="certification-number">
                  CERTIFICATE {certification.number}
                </span>
                <span className="certification-placeholder">Placeholder</span>
              </div>
              <h3 className="certification-title">Certificate title</h3>
              <p className="certification-issuer">
                Issuing organization · Year
              </p>
              <p className="certification-hint">
                Replace this placeholder with your certificate details.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
