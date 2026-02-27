import { motion } from "framer-motion";
import { FaScrewdriverWrench, FaStar, FaShieldHalved, FaMoneyBill } from "react-icons/fa6";

const JoinTechnician = () => {
  return (
    <div className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
          <h1 className="text-4xl font-bold text-foreground mb-4">انضم كفني في <span className="text-accent">Fixly</span></h1>
          <p className="text-muted-foreground text-lg">اشتغل بحريتك واكسب أكتر</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {[
            { icon: FaMoneyBill, title: "دخل ثابت", desc: "طلبات مستمرة ودفع فوري" },
            { icon: FaStar, title: "تقييمات تبنيك", desc: "كل تقييم حلو بيزود طلباتك" },
            { icon: FaShieldHalved, title: "حماية كاملة", desc: "تأمين على كل مهمة" },
            { icon: FaScrewdriverWrench, title: "ادواتك جاهزة", desc: "بنوفرلك كل اللي محتاجه" },
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} whileHover={{ y: -6 }} className="bg-fixly-white rounded-2xl p-6 shadow-sm text-center">
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <item.icon className="text-2xl text-accent" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.form initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-fixly-white rounded-2xl p-8 max-w-2xl mx-auto shadow-sm space-y-5" onSubmit={(e) => e.preventDefault()}>
          <h3 className="text-xl font-bold text-foreground mb-4">سجّل بياناتك</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground focus:ring-2 focus:ring-primary/50 outline-none transition-all" placeholder="الاسم بالكامل" />
            <input className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground focus:ring-2 focus:ring-primary/50 outline-none transition-all" placeholder="رقم الهاتف" />
          </div>
          <select className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground focus:ring-2 focus:ring-primary/50 outline-none transition-all">
            <option value="">التخصص</option>
            <option>سباكة</option>
            <option>كهرباء</option>
            <option>نجارة</option>
            <option>دهانات</option>
            <option>تكييف</option>
            <option>مطابخ</option>
            <option>محارة</option>
            <option>تشطيبات</option>
          </select>
          <input className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground focus:ring-2 focus:ring-primary/50 outline-none transition-all" placeholder="سنوات الخبرة" />
          <textarea rows={3} className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground focus:ring-2 focus:ring-primary/50 outline-none transition-all resize-none" placeholder="ملاحظات إضافية" />
          <button type="submit" className="w-full px-6 py-3 rounded-xl bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-all duration-300">
            تقديم الطلب
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default JoinTechnician;
