import AboutBranch from "@/components/aboutBranch";
import AboutComponent from "@/components/aboutComponent";
import HeaderAbout from "@/components/headerAbout";
import axios from "axios";
import Image from "next/image";
import React from "react";

type IData = {
  img: string;
  header: string;
};

async function AboutPage() {
  const response = await axios.get<IData[]>(`http://localhost:3001/branch`);
  const branches = response.data;
  return (
    <div>
      <HeaderAbout />
      <div className="w-full h-[3800px]">
        <div
          className="flex flex-row-reverse justify-center mt-10 gap-8"
          dir="rtl"
        >
          <AboutComponent
            img="/icons/icons8-map-pin-50.png"
            header="۳۲ شعبه فعال"
            text="در حال حاضر با ۳۲ شعبه فعال به همراه ۱۵ شعبه اسنپ فود و بیش از ۵۰۰ باریستا در خانواده‌مان در پُرترددترین نقاط شهر تهران و جاده‌های کشور با افتخار در خدمت عموم مردم ایران هستیم."
          />
          <AboutComponent
            img="/icons/icons8-gift-50.png"
            header="دریافت جایزه مشتری مداری"
            text="قهوه لمیز مفتخر است اعلام کند در بین ۱۰۰ برند برتر، جایزه ویژه خدمات بهینه و تکریم از مشتری را در سال ۱۴۰۱ از طرف صنعت کارگزاری رسمی کشورمان دریافت نمودیم."
          />
          <AboutComponent
            img="/icons/icons8-facebook-like-50.png"
            header="رضایت مشتری"
            text="در طول سالیان متمادی خدمت رسانی به مردم عزیز کشورمان، تا به امروز بیش از ۹۹% رضایت مشتری را در سیستم های اطلاعاتی ثبت نمودیم."
          />
        </div>
        <div
          className="flex flex-col items-center w-[1120px] mx-auto mt-20"
          dir="rtl"
        >
          <div>
            <h2 className="text-3xl font-bold">قهوه لمیز</h2>
          </div>
          <div className="mt-5 w-full">
            <p className="text-lg text-justify">
              مجموعه زال ایرانیان ، پیشرو در صنعت قهوه و کافی‌شاپ با هدف
              فرهنگ‌سازی قهوه و قهوه‌نوشی در ایران در سال ۱۳۸۸ تاسیس شد. این
              شرکت، با ساختار عمودی بهترین دانه‌های قهوه را از مزارع سراسر دنیا
              تهیه کرده، در کارخانه رُست و فرآوری و سپس در مجموعه کافی‌شاپ‌های
              قهوه لمیز (زیر مجموعه‌ی زال ایرانیان) به دست مشتریان و عموم مردم
              ایران می رساند.
            </p>
          </div>
          <div className="mt-5 w-full">
            <p className="text-lg text-justify">
              قهوه لمیز درحال حاضر با ۳۲ شعبه فعال به همراه ۱۵ شعبه اسنپ فود در
              سطح کشور بزرگ‌ترین مجموعه کافی‌شاپ زنجیره‌ای در ایران بوده و با
              افتخار به یک برند محبوب ملی و نامی آشنا تبدیل شده است.
            </p>
          </div>
          <div className="mt-5 w-full">
            <p className="text-lg text-justify">
              از سال ۸۸ و با افتتاح شدن اولین شعبه قهوه لمیز در تجریش هدف ما
              واضح و روشن بوده و هست. هدف ما ارائه بهترین محصول با بهترین قیمت و
              با بهترین سرویس و جریان انرژی و حال خوب در این مرز و بوم است.
            </p>
          </div>
          <div className="mt-10 w-full">
            <p className="text-lg text-justify">
              در حال حاضر با ۳۲ شعبه فعال به همراه ۱۵ شعبه اسنپ فود و بیش از ۵۰۰
              باریستا در خانواده‌مان در پُرترددترین نقاط شهر تهران و جاده‌های
              کشور با افتخار در خدمت عموم مردم ایران هستیم و جزئی از روزمره و
              خاطراتشان شده‌ایم.
            </p>
          </div>
          <div className="mt-10 w-full">
            <p className="text-lg text-justify">
              ما با افتخار به ایرانی بودن برند قهوه لمیز و کسب و کارمان می‌بالیم
              و شب و روز و روز و شب، با عشق و دل و جان در تکاپوییم تا هر روز
              بهتر از دیروز در خدمت‌تان باشیم.
            </p>
          </div>
        </div>
        <div className="relative w-full h-[300px] mt-10">
          <Image
            src="/img/branches-background-1.webp"
            alt="branch-background"
            fill
            className="object-cover"
          />
          <div className="w-full h-full bg-black opacity-75 flex flex-col items-center justify-center">
            <div>
              <h2 className="text-4xl text-white font-bold">
                قهوه لمیز نماینده‌ای ندارد و نمایندگی واگذار نمی‌کند
              </h2>
            </div>
            <div className="w-[1120px] mt-5" dir="rtl">
              <p className="text-white text-lg text-justify font-semibold">
                تمام شعب قهوه لمیز در تهران و سایر استان‌ها انحصاری متعلق به شخص
                مدیرعامل گروه صعنتی زال ایرانیان می باشد و اعطای نمایندگی،
                واگذاری شعبه و حق امتیاز به اشخاص را نداریم. تمامی شعب قهوه لمیز
                تحت نظر مجموعه، راه اندازی و مدیریت می شود
              </p>
            </div>
          </div>
        </div>
        <div
          className="mt-15 flex flex-col items-center mx-auto w-[1120px]"
          dir="rtl"
        >
          <div>
            <h2 className="text-3xl font-bold">شکل‌گیری قهوه لمیز</h2>
          </div>
          <div className="mt-10 w-full">
            <p className="text-lg text-justify">
              ایده و پایه‌ریزی قهوه لمیز با یک پایان‌نامه دانشگاهی شروع شد. آقای
              آرمین لمیع (مدیر‌عامل و موسس قهوه لمیز) ساکن و مقیم کانادا و
              نماینده کافی‌شاپ‌های زنجیره‌ای Blenz در حال تحصیل رشته MBA در
              دانشگاه Royal Roads بودند که موضوع تحقیق پایان‌نامه خود را (با
              همکاری دانشگاه شریف) درمورد “ایجاد فرهنگ قهوه و قهوه‌نوشی در
              جامعه‌ی چای نوش ایرانی” برنامه ریزی و به ثمر رساندند.
            </p>
          </div>
          <div className="mt-5 w-full">
            <p className="text-lg text-justify">
              تحقیق و تحلیل آکادمیک در این راستا بازار بکر و دست نخورده‌ی صنعت
              قهوه در ایران را بیش از پیش آشکار کرد و یک سال بعد قهوه لمیز با
              هدف فرهنگ‌سازی قهوه برای عموم مردم ایران در میدان تجریش (شعبه
              سعدآباد) آغاز به کار کرد.
            </p>
          </div>
          <div className="mt-5 w-full">
            <p className="text-lg text-justify">
              ارائه بهترین محصول با بهترین قیمت و بهترین سرویس در قابل
              دسترس‌ترین مناطق شهر از اصول اولیه و عوامل موفقیت قهوه لمیز بوده
              است.
            </p>
          </div>
          <div className="mt-5 w-full">
            <p className="text-lg text-justify">
              کسی که می خواهد یک کارآفرین موفق باشد باید دارای چندین خصوصیت
              باشد. از جمله اینکه باید برای کارش یک برنامه ریزی خوب و بلندمدت
              داشته باشد.
            </p>
          </div>
        </div>
        <div className="relative w-full h-[450px] mt-10">
          <Image
            src="/img/branches-background-1.webp"
            alt="branch-background"
            fill
            className="object-cover"
          />
          <div
            className="w-full h-full bg-black opacity-75 flex flex-col items-center justify-center"
            dir="rtl"
          >
            <div>
              <h2 className="text-4xl text-white font-bold">اهداف ما</h2>
            </div>
            <div className="w-[1120px] mt-5">
              <p className="text-white text-lg text-justify font-semibold">
                اهداف ما هدف ما نه تنها ارائه بهترین قهوه و محصول با بهترین قیمت
                و بهترین سرویس در قابل دسترس‌ترین نقاط شهر (و جاده‌ها) بوده و
                هست، بلکه انتقال انرژی خوب و بهتر‌کردن روز مشتریانمان، ایفای
                مسئولیت اجتماعی در راستای اصول و‌ ارزش‌هایمان و ایجاد اشتغال و
                محیط کاری سالم و قابل پیشرفت است
              </p>
            </div>
            <div className="w-[1120px] mt-10">
              <p className="text-white text-lg font-semibold text-justify">
                لمیز برندی است با ساختار عمودی، از قهوه سبز تا لیوان دست شما.
                بهترین دانه‌های قهوه با دقت و وسواس خاص به طور مستقیم از مزارع
                قهوه مناطق مختلف دنیا خریداری می‌شوند. نمونه قهوه‌های خریداری
                شده توسط گروه تحقیق و توسعه لمیز، مورد بررسی قرار میگیرند و
                متخصصین برشته کاری ما، دستورالعمل منحصر به فرد برشته کردن
                دانه‌ها را (بنا به نوع دانه) آماده می کنند
              </p>
            </div>
            <div className="w-[1120px] mt-15">
              <p className="text-white text-lg text-justify font-semibold">
                ما به کاری که می کنیم اعتقاد داریم و به تیم فوق‌العاده و در حال
                گسترشمان می‌بالیم و همیشه مشتاق به جذب نیروهای پر انگیزه، پر
                تلاش و مسئول هستیم
              </p>
            </div>
          </div>
        </div>
        <div
          className="mt-15 flex flex-col items-center mx-auto w-[1120px]"
          dir="rtl"
        >
          <div>
            <h2 className="text-3xl font-bold">شعب قهوه لمیز</h2>
          </div>
          <div className="mt-10 w-full">
            <p className="text-lg text-justify">
              مجموعه قهوه لمیز با بیش از ۳۲ شعبه فعال به همراه ۱۵ شعبه اسنپ فود
              بزرگترین مجموعه قهوه‌ ایران است. با بزرگ‌تر و بیشترشدن تعداد
              شعبه‌های قهوه لمیز، اهمیت پایبند ماندن به اصول و ارزش‌ها و فرهنگ
              کاری ما در این تیم بیشتر و مهم‌تر شده است
            </p>
          </div>
          <div className="mt-10 w-full">
            <p className="text-lg text-justify">
              به عنوان بزرگ‌ترین مجموعه قهوه در ایران با بیش از ۳۲ شعبه فعال به
              همراه ۱۵ شعبه اسنپ فود در تهران و شهرستان پایبند بودن به بالاترین
              استاندارهای کاری و اخلاقی از الزامات ماست. این استاندارد، راهنمای
              عملکرد کلی و تصمیم‌گیری‌های روزمره ما می‌باشد. همچنین از مهم‌ترین
              اهداف ما در مجموعه قهوه لمیز ارائه بهترین محصول با بهترین قیمت و
              با بهترین سرویس و جریان انرژی و حال خوب در این مرز و بوم است.
              مجموعه قهوه لمیز در نظر دارد با هدف فرهنگ‌سازی و ترویج نوشیدن قهوه
              در جامعه سبک زندگی درست را آموزش دهد و در این راستا برنامه و
              اقدامات ارزشمندی را در نظر گرفته است
            </p>
          </div>
        </div>
        <div className="w-[1120px] flex items-center mx-auto gap-3" dir="rtl">
          <div className="grid grid-cols-5 gap-3 mt-5">
            {branches.map((item) => (
              <AboutBranch img={item.img} header={item.header} key={item.img} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
