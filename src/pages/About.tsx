import { motion } from "framer-motion";
import { FaCamera, FaUserCheck, FaMapPin, FaShieldHalved, FaStar, FaMoneyBill } from "react-icons/fa6";

const About = () => {
  return (
    <div className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
          <h1 className="text-4xl font-bold text-foreground mb-4">من نحن</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Fixly ولدت من مشكلة حقيقية — الفني بييجي ومش معاه القطعة الصح، أو مش فاهم المشكلة. ده بيضيع وقتك ومزاجك.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-fixly-white rounded-2xl p-8 md:p-12 max-w-3xl mx-auto mb-14 shadow-sm">
          <h2 className="text-2xl font-bold text-foreground mb-4">رؤيتنا: الصيانة اللي تستاهلها</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            الحل كان بسيط — خلي الصورة تشرح قبل ما الفني ييجي. زي ما أوبر غيّر تجربة التاكسي — Fixly بيغير تجربة الصيانة المنزلية.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: FaUserCheck, text: "فنيين معتمدين ومدربين باحترافية" },
              { icon: FaMoneyBill, text: "شفافية كاملة في الأسعار قبل الزيارة" },
              { icon: FaShieldHalved, text: "ضمان على كل خدمة لمدة 30 يوم" },
              { icon: FaStar, text: "تقييم الفني بعد كل زيارة لضمان الجودة" },
              { icon: FaCamera, text: "صورتك بتشرح للفني كل حاجة" },
              { icon: FaMapPin, text: "تتبع لحظي لموقع الفني" },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.08 }} className="flex items-center gap-3 p-3 rounded-xl bg-card">
                <item.icon className="text-accent shrink-0" />
                <span className="text-sm text-foreground">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
