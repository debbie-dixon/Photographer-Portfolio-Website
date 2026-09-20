import Header from "./Header";
import DynamicIcons from "./DynamicIcons";
export default function Contact() {
  return (
    <>
      <div
        id="contact"
        className="w-full flex flex-col items-center justify-center mt-8 mb-10 gap-6 px-4"
      >
        {/* Row container: Stacked on mobile, side-by-side on desktop */}
        <div className="flex flex-col md:flex-row md:items-start items-center justify-center gap-8 md:gap-14 lg:gap-20 mt-6 w-full max-w-5xl px-2 md:px-6">
          <div className="flex flex-col items-center md:items-start min-w-50 text-center md:text-left">
            <p className="font-bold font-serif text-2xl">Logo-Company</p> <br />
            <h1 className="font-bold text-brandPrimary">Working Hours:</h1>
            <h1>
              Monday - Saturday:
              <span className="font-semibold text-brandPrimary"> Open</span>
            </h1>
            <h1>
              Sunday:
              <span className="font-semibold text-brandPrimary"> Closed</span>
            </h1>{" "}
            <br />
            <h1 className="font-bold text-brandPrimary">
              Appointment Only - <br />{" "}
              <span className="font-medium text-sm text-center">
                via DM or Website
              </span>
            </h1>
          </div>

          {/* Section 1: Phone & Email */}
          <section className="flex flex-col items-center md:items-start space-y-3 min-w-50 text-center md:text-left">
            <DynamicIcons text="08142067810" iconName="phone" />
            <DynamicIcons
              text="examplemail@gmail.com"
              iconName="mail"
              link=""
            />
          </section>

          {/* Section 2: Location */}
          <section className="flex flex-col items-center md:items-start space-y-2 min-w-50 text-center md:text-left">
            <DynamicIcons iconName="map-pin" size={18} />
            <h1 className="text-lg leading-relaxed">
              Location, City/Town, <br />
              State/Province, Country.
            </h1>
          </section>

          {/* Section 3: Socials */}
          {/* <section className="flex flex-col items-center space-y-3 min-w-50">
            <h1 className="text-tColor font-semibold italic text-sm">
              Connect with us
            </h1>
            <div className="flex gap-4">
              <DynamicIcons
                iconName={faWhatsapp}
                color="text-green-600"
                link="https://wa.me/message/WOE2QIJLGWLAK1"
              />
              <Icon
                size="text-2xl"
                iconName={faInstagram}
                color="text-pink-600"
                link="https://www.instagram.com/hemass_artistry"
              />
              <Icon
                size="text-2xl"
                iconName={faFacebook}
                color="text-blue-600"
                link="https://www.facebook.com/profile.php?id=61577907793515"
              />
            </div>
          </section> */}
        </div>
      </div>
    </>
  );
}
