import { motion } from "framer-motion";
import servicePlumbing from "@/assets/service-plumbing.jpg";
import serviceCarpentry from "@/assets/service-carpentry.jpg";
import serviceAc from "@/assets/service-ac.jpg";
import servicePainting from "@/assets/service-painting.jpg";
import serviceElectrical from "@/assets/service-electrical.jpg";
import serviceKitchen from "@/assets/service-kitchen.jpg";

const services = [
  { title: "سباكة", image: servicePlumbing, desc: "إصلاح وتركيب جميع أعمال السباكة" },
  { title: "نجارة", image: serviceCarpentry, desc: "تفصيل وإصلاح الأثاث والأبواب" },
  { title: "تكييف وتبريد", image: serviceAc, desc: "صيانة وتركيب أجهزة التكييف" },
  { title: "دهانات", image: servicePainting, desc: "دهان وتجديد الحوائط والأسقف" },
  { title: "كهرباء", image: serviceElectrical, desc: "أعمال الكهرباء والتوصيلات" },
  { title: "تركيب مطابخ", image: serviceKitchen, desc: "تصميم وتركيب المطابخ العصرية" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ServicesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            خدماتنا
          </h2>
          <p className="text-muted-foreground text-lg">
            كل اللي بيتك محتاجه في مكان واحد
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-fixly-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
