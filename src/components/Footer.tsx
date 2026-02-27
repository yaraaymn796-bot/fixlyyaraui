import { Link } from "react-router-dom";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-fixly-beige-dark border-t border-border font-cairo">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & desc */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <FaScrewdriverWrench className="text-2xl text-primary" />
              <span className="text-xl font-bold text-foreground">
                Fix<span className="text-accent">ly</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              أوبر الصيانة المنزلية - اطلب فني محترف لباب بيتك في دقائق
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">روابط سريعة</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "الرئيسية", path: "/" },
                { label: "خدماتنا", path: "/services" },
                { label: "ماذا عنا", path: "/about" },
                { label: "تواصل معنا", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-foreground mb-4">خدماتنا</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span>سباكة</span>
              <span>كهرباء</span>
              <span>نجارة</span>
              <span>تكييف وتبريد</span>
              <span>دهانات</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-foreground mb-4">تواصل معنا</h4>
            <p className="text-muted-foreground text-sm mb-4">القاهرة، مصر</p>
            <div className="flex gap-3">
              {[FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-foreground transition-all duration-300"
                  >
                    <Icon className="text-sm" />
                  </a>
                )
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Fixly. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
