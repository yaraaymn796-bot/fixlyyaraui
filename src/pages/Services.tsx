import { motion } from "framer-motion";
import servicePlumbing from "@/assets/service-plumbing.jpg";
import serviceCarpentry from "@/assets/service-carpentry.jpg";
import serviceAc from "@/assets/service-ac.jpg";
import servicePainting from "@/assets/service-painting.jpg";
import serviceElectrical from "@/assets/service-electrical.jpg";
import serviceKitchen from "@/assets/service-kitchen.jpg";

const services = [
  { title: "سباكة", image: servicePlumbing, desc: "إصلاح وتركيب وصيانة جميع أنواع المواسير والحنفيات والسخانات" },
  { title: "نجارة", image: serviceCarpentry, desc: "تفصيل وإصلاح الأثاث والأبواب والشبابيك" },
  { title: "تكييف وتبريد", image: serviceAc, desc: "تركيب وصيانة وتنظيف جميع أنواع أجهزة التكييف" },
  { title: "دهانات", image: servicePainting, desc: "دهان الحوائط والأسقف بأحدث الألوان والتقنيات" },
  { title: "كهرباء", image: serviceElectrical, desc: "جميع أعمال الكهرباء من توصيلات وإصلاحات" },
  { title: "تركيب مطابخ", image: serviceKitchen, desc: "تصميم وتركيب المطابخ بأحدث الخامات" },
  { title: "محارة", image: servicePlumbing, desc: "أعمال المحارة والتلييس بأعلى جودة" },
  { title: "تشطيبات", image: serviceCarpentry, desc: "تشطيبات كاملة للشقق والفيلات" },
];

const Services = () => {
  return (
    <div className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl font-bold text-foreground mb-4">خدماتنا</h1>
          <p className="text-muted-foreground text-lg">كل اللي بيتك محتاجه — في مكان واحد</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="bg-fixly-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
              <div className="h-40 overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
