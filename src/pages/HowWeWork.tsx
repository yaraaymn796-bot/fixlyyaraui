import { motion } from "framer-motion";
import { FaMobileScreen, FaCamera, FaUserCheck, FaScrewdriverWrench, FaStar, FaCircleCheck } from "react-icons/fa6";

const steps = [
  { icon: FaMobileScreen, title: "افتح التطبيق", desc: "اختار نوع الخدمة اللي محتاجها" },
  { icon: FaCamera, title: "صوّر المشكلة", desc: "صورة واحدة بتشرح للفني كل حاجة" },
  { icon: FaUserCheck, title: "اختار الفني", desc: "شوف التقييمات واختار اللي يناسبك" },
  { icon: FaScrewdriverWrench, title: "الفني في الطريق", desc: "تابع موقعه على الخريطة لحظة بلحظة" },
  { icon: FaCircleCheck, title: "تم الإصلاح", desc: "الفني بيصلح من أول مرة بدون رجعة تانية" },
  { icon: FaStar, title: "قيّم الخدمة", desc: "تقييمك بيساعدنا نضمن أفضل جودة دايماً" },
];

const HowWeWork = () => {
  return (
    <div className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
          <h1 className="text-4xl font-bold text-foreground mb-4">كيف نعمل</h1>
          <p className="text-muted-foreground text-lg">٦ خطوات بسيطة والمشكلة تتحل</p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.12 }}
              className="flex items-start gap-6 bg-fixly-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                <step.icon className="text-2xl text-accent" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">الخطوة {i + 1}</div>
                <h3 className="text-lg font-bold text-foreground mb-1">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
