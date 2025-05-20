import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lang: "ar",
  dir:"rtl",
  translations: {
    en: {
      header: {
        home:"Home",
        features:"Features",
        services:"Services",
        offers:"Offers",
        contact:"Contact",
        join:"Join Us",

        login:"Login",
        signup:"Sign Up",
      },
      ourFeatures: {
        title: "Our Features",
        subTitle: "Why to choose Maintenance now?",
        features: [
          {
            title: "Save a lot of your time",
            description: "Flexible bookings at your convenient time and day",
          },
          {
            title: "Permanent prices and offers",
            description: "We offer the best prices and ongoing offers",
          },
          {
            title: "Easy to contact us",
            description: "Customer service 24/7",
          },
          {
            title: "Service guarantee",
            description: "Guarantee on services up to 30 days",
          },
        ],
      },
      home:{
        welcome:"Welcome in Maintenance Now",
        slogan:"Maintenance of your home has become easier and hassle-free",
        about:" We are a company that provides maintenance services for your home, whether you need a general maintenance or specialized maintenance, we have the best and qualified technicians to help you",
        askVisit:"demand a visit",
      },
      demandWay:{
        title:"How to demand a service",
        steps:[
          {
            title:"Demand a service",
            description:"suitable services for you"
          },
          {
            title:"Select a visit time",
            description:"and the service provider suitable for you"
          },
          {
            title:"Pay ",
            description:"and enter your personal data"
          },]
          }
    },
    ar: {
      header: {
        home:"الرئيسية",
        features:"مميزاتنا",
        services:"الخدمات",
        offers:"العروض",
        contact:"اتصل بنا",
        join:"انضم إلينا",

        login:"تسجيل الدخول",
        signup:"انشاء حساب",
      },
      ourFeatures: {
        title: "مميزاتنا",
        subTitle: "ليه تختار صيانة الآن؟",
        features: [
          {
            title: "وفر جزء كبير من وقتك",
            description: "حجوزات مرنة بالوقت واليوم المناسب لك",
          },
          {
            title: "أسعار وعروض دائمة",
            description: "نقدم لكم أفضل الأسعار والعروض المستمرة",
          },
          {
            title: "سهولة الإتصال بنا",
            description: "خدمة عملاء على مدار 24 ساعة",
          },
          {
            title: "ضمان على الخدمات",
            description: "ضمان على الخدمات يصل حتى 30 يوم",
          },
        ],
      },
      home:{
        welcome:"مرحبًا بك في صيانة الآن",
        slogan:"صيانة منزلك أصبحت أسهل وبدون تعقيد",
        about:"نقدم خدمات صيانة تغطي جميع احتياجات منزلك من أعمال السباكة والكهرباء وخدمات أخرى بجودة عالية وأسعار مناسبة، على يد فنيين محترفين يصلون إليك في أسرع وقت",
        askVisit:"اطلب زيارة"
      },
      demandWay:{
        title:"إزاى تطلب خدمة",
        steps:[
          {
            title:"اطلب الخدمة",
            description:"المناسبة لك من قائمة الخدمات"
          },
          {
            title:"اختر وقت الزيارة",
            description:"ومزود الخدمة المناسب لك"

          },
          {
            title:"قم بالدفع",
            description:"وإدخال بياناتك الشخصية"
          }
        ]

      }
    },
  },
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLang: (state, action) => {
      state.lang = action.payload;
      state.dir = action.payload === "ar" ? "rtl" : "ltr";
    },
  },
});

export const { setLang } = languageSlice.actions;
export default languageSlice.reducer;