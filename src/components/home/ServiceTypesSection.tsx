import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaBolt, FaCalendarCheck } from "react-icons/fa6";

const ServiceTypesSection = () => {
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
            خدمتان سريعتان واحد
          </h2>
          <p className="text-muted-foreground text-lg">
            اختر النموذج المناسب — الطارئ أو المجدول — بنفس الجودة والاحترافية
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Emergency */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="bg-fixly-white rounded-2xl p-8 shadow-sm border-2 border-destructive/20 hover:border-destructive/40 transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-2xl bg-destructive/10 flex items-center justify-center mb-6">
              <FaBolt className="text-3xl text-destructive" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              طوارئ فورية
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              ماسورة مية انفجرت؟ الكهرباء قاطعة؟ تسريب غاز؟ اضغط زر الطوارئ
              والنظام تلقائياً بيلاقي أقرب فني متاح ويبعتهولك فوراً — السرعة أهم.
            </p>
            <Link
              to="/contact"
              className="inline-block px-6 py-3 rounded-xl bg-destructive text-destructive-foreground font-semibold hover:opacity-90 transition-all duration-300"
            >
              اتصل بالطوارئ الآن
            </Link>
          </motion.div>

          {/* Normal */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="bg-fixly-white rounded-2xl p-8 shadow-sm border-2 border-primary/20 hover:border-primary/40 transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
              <FaCalendarCheck className="text-3xl text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              خدمة عادية
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              اختار الفني اللي انت عايزه، حدد الميعاد والتاريخ المناسب ليك،
              وشوف التقييمات والأسعار قبل ما تحجز — كل حاجة في إيدك.
            </p>
            <Link
              to="/booking"
              className="inline-block px-6 py-3 rounded-xl bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-all duration-300"
            >
              احجز خدمة عادية
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceTypesSection;
