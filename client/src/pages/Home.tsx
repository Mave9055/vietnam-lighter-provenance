import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Download, ExternalLink, MapPin, Zap } from "lucide-react";

/**
 * Design Philosophy: Vintage Military Document Aesthetic
 * - Cream/aged paper background with subtle texture
 * - Burnished gold (#c9a66b) accents for military insignia
 * - Deep navy (#0d1a26) for authority and text
 * - Playfair Display serif for headers, Inter for body
 * - Asymmetric layout mimicking official documents
 * - Photo cards with subtle borders and hover effects
 */

export default function Home() {
  const photos = [
    {
      id: 1,
      src: "/images/extracted-000.png",
      label: "Lighter Front: Presentation Engraving",
      alt: "Front of the lighter showing engraved presentation text",
    },
    {
      id: 2,
      src: "/images/extracted-001.png",
      label: "Lighter Reverse: Class & Hughes Logo",
      alt: "Reverse side showing class designation and manufacturer",
    },
    {
      id: 3,
      src: "/images/extracted-002.png",
      label: "Base Stamp: PARK Lighter USA",
      alt: "Base of lighter showing manufacturer mark",
    },
    {
      id: 4,
      src: "/images/extracted-003.png",
      label: "Hughes TH-55A Osage Helicopter",
      alt: "Historical photo of the training aircraft",
    },
    {
      id: 5,
      src: "/images/extracted-004.png",
      label: "Class 65-9WA Training Class Photo",
      alt: "Historical class photograph from Fort Wolters",
    },
    {
      id: 6,
      src: "/images/extracted-005.png",
      label: "Class Roster: 65-9WA Names",
      alt: "Class roster with names of trainees",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Hero Text */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5">
                <Zap className="w-4 h-4 text-accent" />
                <span className="text-sm font-semibold text-accent">
                  Authenticated Military Artifact
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                1965 U.S. Army Aviation Presentation Lighter
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                A historically significant presentation lighter from the inaugural class of
                helicopter pilots trained on the Hughes TH-55A Osage at Fort Wolters, Texas.
                This artifact documents a pivotal moment in U.S. Army Aviation history.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                >
                  View Full Provenance <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent/10"
                >
                  <Download className="mr-2 w-4 h-4" /> Download Certificate
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-96 md:h-full">
              <img
                src="/images/extracted-000.png"
                alt="1965 Army Aviation Presentation Lighter"
                className="w-full h-full object-cover rounded-lg shadow-2xl border border-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Item Identification Section */}
      <section className="py-16 md:py-20 bg-card/50">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-2">Item Identification</h2>
            <div className="h-1 w-16 bg-accent rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Specifications Table 1 */}
            <div className="document-section p-8 space-y-4">
              <h3 className="text-lg font-semibold text-primary mb-6">Object Details</h3>
              <div className="space-y-4">
                <div className="border-b border-border/50 pb-3">
                  <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wide">
                    Object Name
                  </p>
                  <p className="text-base font-medium text-foreground">Presentation Lighter</p>
                </div>
                <div className="border-b border-border/50 pb-3">
                  <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wide">
                    Manufacturer
                  </p>
                  <p className="text-base font-medium text-foreground">Park Lighter, USA</p>
                </div>
                <div className="border-b border-border/50 pb-3">
                  <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wide">
                    Material
                  </p>
                  <p className="text-base font-medium text-foreground">Chromed Metal</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wide">
                    Conflict Era
                  </p>
                  <p className="text-base font-medium text-foreground">Vietnam War</p>
                </div>
              </div>
            </div>

            {/* Specifications Table 2 */}
            <div className="document-section p-8 space-y-4">
              <h3 className="text-lg font-semibold text-primary mb-6">Training & Recipient</h3>
              <div className="space-y-4">
                <div className="border-b border-border/50 pb-3">
                  <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wide">
                    Training Site
                  </p>
                  <p className="text-base font-medium text-foreground flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-accent" /> Fort Wolters, Texas
                  </p>
                </div>
                <div className="border-b border-border/50 pb-3">
                  <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wide">
                    Recipient
                  </p>
                  <p className="text-base font-medium text-foreground">Arthur P. Lancy Jr.</p>
                </div>
                <div className="border-b border-border/50 pb-3">
                  <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wide">
                    Class Designation
                  </p>
                  <p className="text-base font-medium text-foreground">WOC 65-9WA (1965)</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wide">
                    Aircraft
                  </p>
                  <p className="text-base font-medium text-foreground">Hughes TH-55A Osage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engraved Inscriptions Section */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-2">Engraved Inscriptions</h2>
            <div className="h-1 w-16 bg-accent rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Front Face */}
            <div className="document-section p-8">
              <h3 className="text-lg font-semibold text-primary mb-6">Front Face</h3>
              <div className="bg-primary/5 border-l-4 border-accent p-6 rounded">
                <p className="inscription-text">
                  {`PRESENTED TO
WOC Arthur P. Lancy Jr.
MEMBER, FIRST GRADUATING CLASS
USING
HUGHES TH-55A HELICOPTER
U.S. Army
PRIMARY HELICOPTER TRAINING SCHOOL
FORT WOLTERS, TEXAS
1965`}
                </p>
              </div>
            </div>

            {/* Reverse Face */}
            <div className="document-section p-8">
              <h3 className="text-lg font-semibold text-primary mb-6">Reverse Face</h3>
              <div className="bg-primary/5 border-l-4 border-accent p-6 rounded">
                <p className="inscription-text">
                  {`Class 65-9WA
[Hughes Aircraft "World Leader" Logo]`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Context Section */}
      <section className="py-16 md:py-20 bg-card/50">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-2">Historical Significance</h2>
            <div className="h-1 w-16 bg-accent rounded-full" />
          </div>

          <div className="document-section p-8 md:p-10 space-y-6">
            <p className="text-lg leading-relaxed text-foreground">
              The engravings document the 1965 adoption of the <strong>Hughes TH-55A "Osage"</strong>{" "}
              as the primary trainer for U.S. Army Aviation. This lighter belonged to a member of the
              inaugural class trained on this airframe at Fort Wolters, which served as the primary
              helicopter training facility for the U.S. Army.
            </p>

            <div className="bg-secondary/10 border-l-4 border-accent p-6 rounded space-y-4">
              <h4 className="font-semibold text-primary text-lg">Service Record Correlation</h4>
              <p className="text-foreground leading-relaxed">
                Official 25th Infantry Division "Tropic Lightning News" records list{" "}
                <strong>"WO Arthur P. Lancy, Co. B, 25th Avn. Bn."</strong> as a recipient of the{" "}
                <strong>Air Medal</strong> in April 1967. This service timeline correlates precisely
                with a 1965 flight school graduation, establishing the authenticity of this artifact
                and its recipient's military service.
              </p>
              <a
                href="https://www.25thida.org/TLN/tln2-13.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold transition-colors"
              >
                View Archival Source: Tropic Lightning News (April 3, 1967)
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Physical Documentation Section */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-2">Physical Documentation</h2>
            <div className="h-1 w-16 bg-accent rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="document-section overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
              >
                <div className="relative h-64 bg-primary/10 overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm font-semibold text-accent text-center uppercase tracking-wide">
                    {photo.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-16 md:py-20 bg-card/50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <div className="relative h-96 md:h-full order-2 md:order-1">
              <img
                src="/images/extracted-001.png"
                alt="Detailed product showcase"
                className="w-full h-full object-cover rounded-lg shadow-2xl border border-border"
              />
            </div>

            {/* Product Details */}
            <div className="space-y-8 order-1 md:order-2">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">About This Artifact</h2>
                <div className="h-1 w-16 bg-accent rounded-full" />
              </div>

              <div className="space-y-6">
                <div className="document-section p-6">
                  <h3 className="font-semibold text-primary mb-2 text-lg">Authenticity</h3>
                  <p className="text-foreground leading-relaxed">
                    This lighter is an authentic military presentation piece from 1965, featuring
                    period-accurate engravings and manufacturing marks consistent with Park Lighter
                    products of that era.
                  </p>
                </div>

                <div className="document-section p-6">
                  <h3 className="font-semibold text-primary mb-2 text-lg">Condition</h3>
                  <p className="text-foreground leading-relaxed">
                    The lighter exhibits excellent condition with visible patina consistent with
                    age and careful preservation. All engravings remain clear and legible.
                  </p>
                </div>

                <div className="document-section p-6">
                  <h3 className="font-semibold text-primary mb-2 text-lg">Provenance</h3>
                  <p className="text-foreground leading-relaxed">
                    Complete provenance documentation available, including military records,
                    archival sources, and photographic evidence of the artifact and recipient's
                    service.
                  </p>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
              >
                Request More Information <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container text-center space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Interested in This Piece?
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              This authenticated military artifact represents a significant piece of U.S. Army
              Aviation history. Contact us for pricing, authentication details, and acquisition
              information.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
            >
              Get in Touch <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              View Archives <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card text-card-foreground border-t border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-primary mb-3">About</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Documenting and preserving significant military artifacts and their historical
                context.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-3">Reference</h3>
              <p className="text-sm text-muted-foreground">
                REF: ALJ-65-9WA-COA-001
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Class: WOC 65-9WA (1965)
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-3">Resources</h3>
              <a
                href="https://www.25thida.org/TLN/tln2-13.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:text-accent/80 transition-colors"
              >
                25th Infantry Division Archives
              </a>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>
              This document is prepared for historical reference based on direct examination of the
              artifact. © 2025. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
