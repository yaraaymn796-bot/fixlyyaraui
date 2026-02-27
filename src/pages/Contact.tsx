import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaLocationDot, FaWhatsapp } from "react-icons/fa6";
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
          <h1 className="text-4xl font-bold text-foreground mb-4">تواصل معنا</h1>
          <p className="text-muted-foreground text-lg">نسعد بخدمتك في أي وقت</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="space-y-6">
            {[
              { icon: FaPhone, title: "الهاتف", value: "+20 1XX XXX XXXX" },
              { icon: FaWhatsapp, title: "واتساب", value: "+20 1XX XXX XXXX" },
              { icon: FaEnvelope, title: "البريد", value: "info@fixly.app" },
              { icon: FaLocationDot, title: "العنوان", value: "القاهرة، مصر" },
            ].map((item, i) => (
              <motion.div key={i} whileHover={{ x: -4 }} className="flex items-center gap-4 bg-fixly-white rounded-xl p-5 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <item.icon className="text-xl text-accent" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{item.title}</div>
                  <div className="font-semibold text-foreground">{item.value}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            {submitted ? (
              <div className="bg-fixly-white rounded-2xl p-12 text-center shadow-sm">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-foreground mb-2">تم الإرسال بنجاح!</h3>
                <p className="text-muted-foreground">هنتواصل معاك في أقرب وقت</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="bg-fixly-white rounded-2xl p-8 shadow-sm space-y-5"
              >
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">الاسم</label>
                  <input required className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all" placeholder="اسمك بالكامل" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">الهاتف</label>
                  <input required className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all" placeholder="رقم الهاتف" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">الرسالة</label>
                  <textarea required rows={4} className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all resize-none" placeholder="اكتب رسالتك هنا..." />
                </div>
                <button type="submit" className="w-full px-6 py-3 rounded-xl bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-all duration-300">
                  إرسال
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
