import { motion } from "framer-motion";
import { Activity, Baby, Brain, Heart, Syringe, Thermometer, Users, FileText, Stethoscope } from "lucide-react";

export default function ClinicalCompetencies() {
  const competencies = [
    {
      category: "Maternal & Neonatal",
      icon: <Baby className="w-6 h-6 text-primary" />,
      skills: ["Neonatal Resuscitation", "Apgar Scoring", "Labor Support", "Breastfeeding Education", "Post-Mortem Care", "Kangaroo Mother Care"]
    },
    {
      category: "Surgical & Acute Care",
      icon: <Activity className="w-6 h-6 text-primary" />,
      skills: ["Sterile Field Maintenance", "Surgical Workflow Management", "Wound Care & Suturing", "Emergency Triage (ABC)", "Hemodynamic Stabilization"]
    },
    {
      category: "Technical Nursing Skills",
      icon: <Syringe className="w-6 h-6 text-primary" />,
      skills: ["IV Line Management", "NG Tube Assistance", "Catheter Care", "Vital Signs Monitoring", "Blood Glucose Checks", "Oxygen Therapy"]
    },
    {
      category: "Psychiatric & Holistic",
      icon: <Brain className="w-6 h-6 text-primary" />,
      skills: ["Therapeutic Communication", "Psychosis Management", "Patient Rapport Building", "Cultural Sensitivity", "Ethical Practice"]
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Technical Proficiency
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My clinical practice is built on a foundation of rigorous technical skills and compassionate, evidence-based care across diverse specialties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {competencies.map((comp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-secondary/20 rounded-2xl p-6 border border-secondary/50 hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 text-primary">
                {comp.icon}
              </div>
              <h3 className="font-serif text-lg font-bold mb-4 text-foreground">{comp.category}</h3>
              <ul className="space-y-3">
                {comp.skills.map((skill, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
