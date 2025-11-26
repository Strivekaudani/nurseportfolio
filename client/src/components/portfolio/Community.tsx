import { motion } from "framer-motion";
import studyDesk from "@assets/b5c210c9-b432-4f80-aadd-767a541f3e64_1763664397912.jpeg";
import simCPR from "@assets/978c8f8d-37b0-4694-a85f-d29f922dd3b4_1763664397912.jpeg";
import netTeam from "@assets/a33794c7-cadf-4ea5-bfcf-1097e1b73f48_1763664397912.jpeg";
import netGame from "@assets/eae347c9-9af5-4ca7-bf30-4e5848f7445c_1763664397912.jpeg";
import netShoot from "@assets/6209236a-3459-435c-9b99-cc018eeeb61d_1763664397912.jpeg";
import netTrophy from "@assets/2d9b040a-10ad-4c95-8e59-b7d0dc7a9a31_1763664397912.jpeg";
import netProfile from "@assets/7de22e57-b85e-473e-9ba7-271dce33ee4f_1763664397912.jpeg";
import { Users, Trophy, Stethoscope, Flower } from "lucide-react";

export default function Community() {
  const netballImages = [netTeam, netGame, netShoot, netTrophy, netProfile];

  return (
    <section id="community" className="py-24 bg-secondary/20 relative">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4 flex items-center justify-center gap-3">
             <Flower className="w-6 h-6 text-primary rotate-45" />
            Leadership & Collaboration
             <Flower className="w-6 h-6 text-primary -rotate-45" />
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Nursing is a team sport. My experiences on the court and in the library have honed my ability to communicate, collaborate, and lead.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Study Group Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-white/50"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-accent/20 rounded-lg text-accent-foreground">
                <Users size={24} />
              </div>
              <h3 className="font-serif text-xl font-bold">Academic Leadership</h3>
            </div>
            <div className="space-y-4 mb-6">
              <img src={studyDesk} alt="Study Group" className="w-full h-64 object-cover rounded-xl" />
            </div>
            <p className="text-muted-foreground">
              Leading peer mentorship sessions has taught me that teaching is the best way to learn. I facilitate collaborative environments where every question is valued.
            </p>
          </motion.div>

          {/* Clinical Skills Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-white/50"
          >
             <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <Stethoscope size={24} />
              </div>
              <h3 className="font-serif text-xl font-bold">Clinical Dedication</h3>
            </div>
            <div className="space-y-4 mb-6">
              <img src={simCPR} alt="Simulation Lab" className="w-full h-64 object-cover rounded-xl" />
            </div>
            <p className="text-muted-foreground">
              Hours spent in the simulation lab represent my commitment to patient safety. I believe in refining skills until they become second nature, ensuring I am ready for any situation.
            </p>
          </motion.div>
        </div>

        {/* Netball Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-white/50"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-destructive/10 rounded-lg text-destructive">
              <Trophy size={24} />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold">Team Resilience & Netball</h3>
              <p className="text-muted-foreground text-sm">Captain 2023-2024</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {/* Featured large image */}
            <div className="md:col-span-2 lg:col-span-2 row-span-2">
               <img src={netTeam} alt="Netball Team" className="w-full h-full min-h-[400px] object-cover rounded-xl" />
            </div>
            {/* Grid of smaller images */}
            <img src={netGame} alt="Netball Action" className="w-full h-48 object-cover rounded-xl" />
            <img src={netShoot} alt="Netball Shot" className="w-full h-48 object-cover rounded-xl" />
            <img src={netTrophy} alt="Netball Trophy" className="w-full h-48 object-cover rounded-xl" />
            <img src={netProfile} alt="Netball Profile" className="w-full h-48 object-cover rounded-xl" />
          </div>
          
          <p className="text-muted-foreground max-w-3xl">
            As team captain, I've learned that morale matters. Supporting teammates after a loss or celebrating a win translates directly to supporting colleagues during a difficult shift. The discipline, strategy, and physical resilience required on the court are qualities I bring to every clinical rotation.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
