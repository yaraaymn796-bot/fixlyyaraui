import { motion } from "framer-motion";
import { FaCamera, FaUserCheck, FaMapPin } from "react-icons/fa6";

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              من نحن
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              <span className="font-bold text-foreground">Fixly</span> اتأسست
              عشان تحل مشكلة واحدة كبيرة — الفني بيعمل زيارتين وبيروح بدون ما
              يصلح. بنينا نظام بيضمن إن مشكلتك تتحل من أول مرة.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              زي ما أوبر غيّر تجربة التاكسي — Fixly بيغير تجربة الصيانة
              المنزلية. الصورة بتشرح، والفني بييجي جاهز.
            </p>

            <div className="space-y-4">
              {[
                { icon: FaCamera, text: "الصورة هي المفتاح — صورة العطل بتوصلنا قبل الزيارة فالفني بييجي جاهز 100%" },
                { icon: FaUserCheck, text: "فنيون مختارون بعناية بناءً على تقييمات العملاء والخبرة الموثقة" },
                { icon: FaMapPin, text: "تتبع لحظي — اعرف مكان الفني بالضبط ومتى يوصلك" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                    <item.icon className="text-accent" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { num: "+١٠٠٠", label: "عميل سعيد" },
              { num: "+٥٠", label: "فني معتمد" },
              { num: "+٨", label: "خدمة متنوعة" },
              { num: "٤.٨⭐", label: "تقييم عام" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-fixly-white rounded-2xl p-8 text-center shadow-sm"
              >
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  {stat.num}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
