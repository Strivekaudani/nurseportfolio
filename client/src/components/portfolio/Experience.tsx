import { motion } from "framer-motion";
import ruralMain from "@assets/8789c7bf-3bce-4616-8632-0b75da8a641a_1763664397912.jpeg";
import ruralProc from "@assets/0061fe51-531b-4cdd-a370-e35977594c29_1763664397912.jpeg";
import urbanSurg from "@assets/2dbd9c09-ce78-4c1a-861e-16294d57135f_1763664397912.jpeg";
import urbanBaby from "@assets/c72547cf-9e57-48bc-8e74-70bb6758dd3b_1763664397912.jpeg";
import { MapPin, Building2, Flower2, Brain, Baby, Activity, HeartPulse } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Neonatal & Pediatric Care",
      role: "Student Nurse",
      location: "Kabwe Women, Newborn and Children's Hospital",
      period: "July 2025 - September 2025",
      mainImage: urbanBaby,
      gallery: [],
      description: "Provided critical care to premature and ill neonates, including feeding support, thermoregulation, and IV fluid assistance. I educated mothers on kangaroo care and infection control to promote neonatal stability and handled sensitive post-mortem care protocols.",
      icon: <Baby className="w-6 h-6 text-primary" />,
      tags: ["Neonatal Care", "Kangaroo Care", "Infection Control"]
    },
    {
      title: "Surgical & Trauma Care",
      role: "Student Nurse (Clinical Attachment)",
      location: "Kabwe General Hospital",
      period: "January 2025 - March 2025",
      mainImage: urbanSurg,
      gallery: [],
      description: "Maintained sterile fields and assisted in major surgeries including C-sections and amputations. I demonstrated technical competency by performing supervised suturing during abdominal closures and managing surgical workflows.",
      icon: <Activity className="w-6 h-6 text-primary" />,
      tags: ["Surgical Assistance", "Sterile Technique", "Suturing"]
    },
    {
      title: "Midwifery & Emergency Obstetrics",
      role: "Student Nurse (Midwife Rotation)",
      location: "Levy Mwanawasa Hospital",
      period: "July 2024 - August 2024",
      mainImage: null, 
      gallery: [],
      description: "Identified critical indicators of obstructed labor and escalated to the medical team for emergency surgical delivery. I also performed maternal and neonatal resuscitation, ensuring rapid response during obstetric emergencies.",
      icon: <HeartPulse className="w-6 h-6 text-primary" />,
      tags: ["Emergency Obstetrics", "Resuscitation", "Labor Management"]
    },
    {
      title: "Psychiatric Nursing",
      role: "Student Nurse",
      location: "Chainama Hills Hospital",
      period: "June 2024 - July 2024",
      mainImage: null,
      gallery: [],
      description: "Utilized therapeutic communication to build rapport with patients experiencing psychosis and medication refusal. My approach improved patient adherence by addressing paranoia and providing consistent, empathetic support.",
      icon: <Brain className="w-6 h-6 text-primary" />,
      tags: ["Mental Health", "Therapeutic Communication", "De-escalation"]
    },
    {
      title: "Rural Antenatal & Labor Care",
      role: "Student Nurse",
      location: "Mwachisompola Rural District Clinic",
      period: "April 2024 - May 2024",
      mainImage: ruralMain,
      gallery: [ruralProc],
      description: "Led neonatal resuscitation for a newborn with an APGAR of 2/10, successfully stabilizing the infant. I also provided evidence-based antenatal teaching on nutrition and hygiene to facilitate healthy pregnancy outcomes in a rural setting.",
      icon: <MapPin className="w-6 h-6 text-primary" />,
      tags: ["Rural Health", "Neonatal Resuscitation", "Health Education"]
    },
    {
      title: "Emergency & Trauma Stabilization",
      role: "Student Nurse (Night Shift)",
      location: "Matero Level 1 Hospital",
      period: "September 2023 - October 2023",
      mainImage: null,
      gallery: [],
      description: "Intervened in the emergency management of hemodynamically unstable trauma patients. I performed rapid ABC assessments and applied sterile dressings, while using therapeutic communication to reduce anxiety in distressed patients.",
      icon: <Building2 className="w-6 h-6 text-primary" />,
      tags: ["Trauma Care", "Emergency Triage", "Patient Stabilization"]
    },
    {
      title: "Post-Operative Care",
      role: "Student Nurse (Clinical Attachment)",
      location: "University Teaching Hospital",
      period: "April 2023 - May 2023",
      mainImage: null,
      gallery: [],
      description: "Nurtured post-operative patients recovering from amputations through saline wound cleansing and infection assessments. I implemented repositioning schedules to prevent pressure injuries and enhance patient comfort.",
      icon: <Building2 className="w-6 h-6 text-primary" />,
      tags: ["Wound Care", "Post-Op Recovery", "Infection Prevention"]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Flowers */}
      <Flower2 className="absolute top-10 left-0 text-secondary w-64 h-64 opacity-30 -translate-x-1/2 rotate-45" />
      <Flower2 className="absolute bottom-10 right-0 text-secondary w-48 h-48 opacity-30 translate-x-1/3 -rotate-12" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4 flex items-center justify-center gap-3">
            <Flower2 className="w-6 h-6 text-accent" />
            Clinical Rotations & Impact
            <Flower2 className="w-6 h-6 text-accent" />
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My clinical journey spans the full spectrum of care—from the quiet intensity of a rural delivery room to the complex demands of urban trauma centers and psychiatric wards.
          </p>
        </div>

        <div className="space-y-24">
          {experiences.map((exp, index) => {
            const hasImages = exp.mainImage !== null;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-start`}
              >
                {/* Image Gallery Section - Only render if images exist */}
                {hasImages && (
                  <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
                    <div className={`rounded-xl overflow-hidden shadow-lg relative group border-4 border-white ${exp.gallery.length > 0 ? 'h-80 col-span-2' : 'h-96 col-span-2'}`}>
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                      <img 
                        src={exp.mainImage!} 
                        alt={`${exp.title} Main`} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    {exp.gallery.map((img, i) => (
                      <div key={i} className="rounded-xl overflow-hidden shadow-md h-48 relative group col-span-2 border-4 border-white">
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                        <img 
                          src={img} 
                          alt={`${exp.title} Detail ${i+1}`} 
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Content Section - Expand width if no images */}
                <div className={`w-full ${hasImages ? 'lg:w-1/2' : 'lg:w-full lg:max-w-4xl lg:mx-auto'} pt-4`}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 bg-secondary/50 rounded-xl text-primary relative overflow-hidden">
                      {exp.icon}
                      <Flower2 className="absolute -bottom-2 -right-2 text-primary/20 w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-foreground">{exp.title}</h3>
                      <p className="text-primary font-medium text-lg">{exp.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground font-medium mb-6 ml-16 italic">{exp.location} • {exp.period}</p>
                  
                  <div className={`prose prose-lg text-muted-foreground mb-8 ${!hasImages ? 'max-w-none' : ''}`}>
                    <p>{exp.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="px-4 py-2 bg-secondary/30 border border-secondary text-secondary-foreground text-sm rounded-full font-medium flex items-center gap-2">
                        <Flower2 className="w-3 h-3 text-primary/50" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
