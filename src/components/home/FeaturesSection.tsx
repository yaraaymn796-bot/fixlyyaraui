import { motion } from "framer-motion";
import { FaRocket, FaShieldHalved, FaClock, FaImage, FaMoneyBill, FaMapLocationDot, FaStar, FaUserCheck } from "react-icons/fa6";

const features = [
  {
    icon: FaImage,
    title: "وداعاً لسوء الفهم",
    desc: "صورتك بتشرح للفني كل حاجة قبل ما ييجي — مش محتاج تشرح بالكلام",
  },
  {
    icon: FaRocket,
    title: "زيارة واحدة تكفي",
    desc: "وقتك غالي — بنخلص المهمة من أول مرة بدون رجعة تانية",
  },
  {
    icon: FaShieldHalved,
    title: "ضمان الخدمة",
    desc: "كل إصلاح مضمون لمدة أشهر — لو رجعت المشكلة، بنيجي مجاناً",
  },
  {
    icon: FaUserCheck,
    title: "فنيين معتمدون",
    desc: "كل فنيينا حاصلون على شهادات احترافية وخضعوا لاختبارات صارمة",
  },
  {
    icon: FaMoneyBill,
    title: "دفع بعد الخدمة",
    desc: "ادفع كاش أو بطاقة أو تحويل بعد ما تتأكد من اكتمال العمل",
  },
  {
    icon: FaMapLocationDot,
    title: "تتبع الطلب",
    desc: "تابع موقع الفني وحالة طلبك لحظة بلحظة عبر الخريطة التفاعلية",
  },
  {
    icon: FaStar,
    title: "تقييمات حقيقية",
    desc: "تقييمات شفافة ومراجعات من عملاء حقيقيين لضمان أفضل جودة",
  },
  {
    icon: FaClock,
    title: "قطع غيار جاهزة",
    desc: "الفني بيشتري القطعة الناقصة وهو في طريقه إليك — مش محتاج ينتظر",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ليه تختار <span className="text-accent">Fixly</span>؟
          </h2>
          <p className="text-muted-foreground text-lg">
            أوبر الصيانة لباب بيتك — سريع لأنقاذك منزلك
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="bg-fixly-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                <feat.icon className="text-2xl text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {feat.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
