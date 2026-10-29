export type ServiceBlock =
  | { kind: "list"; heading: string; intro?: string; items: string[] }
  | {
      kind: "steps";
      heading: string;
      intro?: string;
      items: { title: string; description?: string }[];
    };

export type Service = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  image: string;
  imageAlt: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  intro: string[];
  whatIs: { heading: string; body: string[] };
  blocks: ServiceBlock[];
  whyChoose?: { heading: string; intro?: string; items: string[] };
  closing: { heading: string; body: string };
};

export const services: Service[] = [
  {
    slug: "root-canal-treatment",
    name: "Root Canal Treatment",
    category: "Endodontics",
    summary:
      "Eliminate infection and tooth pain with advanced, painless root canal treatment while preserving your natural tooth.",
    image: "/services/root-canal-procedure-1200.webp",
    imageAlt: "Root canal treatment being performed at Molar Dental Hospital",
    metaTitle: "Root Canal Treatment in Indresham, Patancheru | Molar Dental",
    metaDescription:
      "Get advanced root canal treatment in Indresham at Molar Dental Hospital. Our experienced dentists provide comfortable RCT treatment to save damaged and infected teeth.",
    heroTitle: "Root Canal Treatment in Indresham",
    heroSubtitle: "Save Your Natural Tooth. Eliminate Pain. Smile Again.",
    intro: [
      "A severe toothache doesn't always mean your tooth has to be removed. With advanced Root Canal Treatment (RCT) in Indresham, Patancheru at Molar Dental Hospital, we can remove the infection, relieve pain, and preserve your natural tooth for years to come.",
      "Our experienced dentists use modern technology and gentle techniques to ensure your treatment is comfortable, precise, and virtually painless.",
    ],
    whatIs: {
      heading: "What is Root Canal Treatment?",
      body: [
        "A Root Canal Treatment (RCT) is a safe and effective procedure that removes infected or damaged pulp from inside a tooth. The root canals are carefully cleaned, disinfected, filled, and sealed to eliminate infection and prevent further damage.",
        "Instead of extracting the tooth, RCT preserves your natural tooth, restores its function, relieves pain, and allows you to chew, speak, and smile with confidence.",
      ],
    },
    blocks: [
      {
        kind: "list",
        heading: "Signs You May Need a Root Canal",
        intro: "Watch for these symptoms:",
        items: [
          "Persistent tooth pain",
          "Severe sensitivity to hot or cold",
          "Swollen or tender gums",
          "Tooth discoloration",
          "Pain while chewing",
          "Pimple-like swelling on the gums",
          "Deep cavity reaching the tooth nerve",
        ],
      },
      {
        kind: "list",
        heading: "Benefits of Root Canal Treatment",
        intro: "Protect Your Smile:",
        items: [
          "Relieves severe tooth pain",
          "Eliminates infection",
          "Saves your natural tooth",
          "Restores normal chewing",
          "Prevents infection from spreading",
          "Maintains jawbone health",
          "Long-lasting solution with proper care",
        ],
      },
      {
        kind: "steps",
        heading: "How Root Canal Treatment Works",
        items: [
          {
            title: "Dental Examination",
            description:
              "Our dentist evaluates the tooth using advanced digital imaging to identify the extent of infection.",
          },
          {
            title: "Remove the Infection",
            description:
              "We gently remove infected pulp while preserving your natural tooth for lasting strength and function.",
          },
          {
            title: "Cleaning & Disinfection",
            description:
              "The canals are thoroughly cleaned, shaped, and disinfected to remove bacteria and prevent further infection.",
          },
          {
            title: "Filling the Root Canal",
            description:
              "The canals are securely sealed with biocompatible material for lasting protection against reinfection.",
          },
          {
            title: "Dental Crown Placement",
            description:
              "A durable dental crown protects your treated tooth while restoring its strength, function, and natural appearance.",
          },
        ],
      },
      {
        kind: "list",
        heading: "Why a Dental Crown is Important After Root Canal",
        intro:
          "A tooth becomes more fragile after root canal treatment. A dental crown provides the strength and protection needed to prevent fractures while restoring full function and a natural appearance.",
        items: [
          "Protects the treated tooth",
          "Prevents cracks and fractures",
          "Restores chewing strength",
          "Enhances appearance",
          "Increases the lifespan of the tooth",
        ],
      },
    ],
    whyChoose: {
      heading: "Why Choose Molar Dental for Root Canal Treatment?",
      intro: "Expert care you can trust:",
      items: [
        "Experienced dentists",
        "Advanced digital diagnosis",
        "Comfortable & gentle treatment",
        "High success rate",
        "Natural tooth preservation",
      ],
    },
    closing: {
      heading: "Don't Ignore Tooth Pain—Save Your Natural Tooth Today!",
      body: "Early treatment can prevent complications and help preserve your healthy smile. Schedule your consultation with the experienced team at Molar Dental Hospital and receive advanced, comfortable root canal care.",
    },
  },
  {
    slug: "dental-implants",
    name: "Dental Implants",
    category: "Implantology",
    summary:
      "Replace missing teeth with natural-looking dental implants for a stronger bite, lasting comfort, & confident smile.",
    image: "/services/dental-implants-1200.webp",
    imageAlt: "Dental implant model showing a titanium post and crown",
    metaTitle: "Best Dental Implants in Indresham, Patancheru | Molar Dental",
    metaDescription:
      "Get advanced dental implants in Indresham at Molar Dental Hospital. Restore missing teeth with comfortable, durable and natural-looking implant treatment.",
    heroTitle: "Dental Implants in Indresham",
    heroSubtitle: "Replace missing teeth with natural-looking dental implants",
    intro: [
      "Restore your smile, confidence, and chewing ability with advanced dental implant treatment at Molar Dental. Our experienced implant dentists use modern technology and premium-quality implants to deliver long-lasting, comfortable, and natural-looking results.",
    ],
    whatIs: {
      heading: "What is a Dental Implant?",
      body: [
        "A dental implant is a modern and reliable solution for replacing missing teeth. It consists of a small titanium post that is surgically placed into the jawbone to function as an artificial tooth root. Over time, the implant naturally bonds with the bone, creating a strong and stable foundation.",
        "Once healing is complete, a custom-made dental crown is securely attached, restoring the appearance, strength, comfort, and function of your natural tooth while helping you smile, speak, and eat with confidence.",
      ],
    },
    blocks: [
      {
        kind: "list",
        heading: "Why Choose Dental Implants?",
        intro:
          "Missing teeth can affect much more than your appearance. Dental implants restore your smile while helping maintain jawbone strength, proper chewing function, and natural speech.",
        items: [
          "Looks like a natural tooth",
          "Strong and durable",
          "Prevents bone loss",
          "Comfortable while eating",
          "Long-lasting solution",
        ],
      },
      {
        kind: "steps",
        heading: "Dental Implant Treatment Process",
        intro: "Your journey to a complete smile:",
        items: [
          { title: "Consultation & Digital Scan" },
          { title: "Personalized Treatment Planning" },
          { title: "Implant Placement" },
          { title: "Healing & Bone Integration" },
          { title: "Custom Crown Placement" },
          { title: "Enjoy Your New Smile" },
        ],
      },
      {
        kind: "list",
        heading: "Benefits of Choosing Dental Implants",
        items: [
          "Natural appearance — blends seamlessly with your smile",
          "Comfortable fit — feels like your own tooth",
          "Long-term solution — designed to last for many years with proper care",
          "Better chewing — enjoy your favourite foods confidently",
          "Protects jawbone — helps preserve bone after tooth loss",
          "Improved confidence — smile, speak, and laugh without worry",
        ],
      },
    ],
    whyChoose: {
      heading: "Why Choose Molar Dental for Dental Implants?",
      intro:
        "We combine modern technology, experienced implant specialists, and personalized treatment planning to ensure predictable, comfortable, and successful implant procedures.",
      items: [
        "Experienced implant dentists",
        "Digital treatment planning",
        "Modern sterilization standards",
        "High-quality implant systems",
        "Comfortable & painless procedures",
        "Affordable treatment plans",
        "Personalized patient care",
        "Long-term follow-up support",
      ],
    },
    closing: {
      heading: "Restore Your Smile with Confidence",
      body: "Don't let missing teeth affect your quality of life. Experience the comfort, strength, and natural appearance of dental implants at Molar Dental. Book your consultation today and take the first step toward a healthier, more confident smile.",
    },
  },
  {
    slug: "invisible-aligners",
    name: "Invisible Aligners",
    category: "Orthodontics",
    summary:
      "Clear, removable aligners gently straighten your teeth without the appearance of traditional braces.",
    image: "/services/clear-aligners-1200.webp",
    imageAlt: "Clear invisible aligner being fitted on a patient's teeth",
    metaTitle: "Best Invisible Aligners in Indresham, Patancheru | Molar Dental",
    metaDescription:
      "Get invisible aligners in Indresham at Molar Dental Hospital. Straighten crooked or misaligned teeth with comfortable, discreet and personalized clear aligner treatment.",
    heroTitle: "Invisible Aligners in Indresham",
    heroSubtitle: "Straighten your smile without metal braces",
    intro: [
      "Transform your smile comfortably and discreetly with Invisible Aligners in Indresham, Patancheru at Molar Dental Hospital. These clear, removable aligners gently move your teeth into their ideal position without the discomfort or appearance of traditional metal braces.",
      "Designed using advanced 3D digital technology, invisible aligners offer a comfortable, nearly invisible, and highly effective orthodontic solution for teens and adults.",
    ],
    whatIs: {
      heading: "What Are Invisible Aligners?",
      body: [
        "Invisible aligners are custom-made, clear plastic trays designed to gradually straighten your teeth. Each aligner is precisely crafted using advanced 3D digital scans to ensure a perfect fit. Every few weeks, you'll switch to a new set of aligners that gently move your teeth step by step until your desired smile is achieved.",
        "Unlike traditional braces, invisible aligners are removable, making eating, brushing, and flossing much easier while maintaining excellent oral hygiene.",
      ],
    },
    blocks: [
      {
        kind: "list",
        heading: "3D Technology for Perfect Results",
        intro:
          "We use advanced 3D scanning and digital smile design to give you accurate and predictable results.",
        items: [
          "3D scan replaces messy traditional impressions",
          "Digital simulation shows your future smile before treatment",
          "Custom-made aligners designed for your exact teeth structure",
          "Step-by-step movement planning for safe and effective results",
        ],
      },
      {
        kind: "list",
        heading: "Benefits of Invisible Aligners",
        items: [
          "Virtually invisible appearance",
          "Comfortable without metal brackets",
          "Removable while eating",
          "Easy brushing and flossing",
          "Fewer dental visits",
          "Customized 3D treatment planning",
          "Safe, precise tooth movement",
          "Boosts confidence throughout treatment",
        ],
      },
      {
        kind: "steps",
        heading: "How the Treatment Works",
        items: [
          {
            title: "Smile Consultation",
            description:
              "Our dentist evaluates your smile and discusses your treatment goals.",
          },
          {
            title: "Digital 3D Scan",
            description:
              "Advanced 3D scanning captures a precise model of your teeth without messy impressions.",
          },
          {
            title: "Receive Your Aligners",
            description:
              "Custom-made aligners are fabricated specifically for your smile.",
          },
          {
            title: "Customized Treatment Plan",
            description:
              "A personalized digital treatment plan shows how your teeth will gradually move.",
          },
          {
            title: "Wear & Replace",
            description:
              "Wear your aligners for 20–22 hours daily and change to the next set as instructed.",
          },
          {
            title: "Enjoy Your New Smile",
            description:
              "Complete your treatment with a beautifully aligned and confident smile.",
          },
        ],
      },
      {
        kind: "list",
        heading: "Who Can Benefit from Invisible Aligners?",
        intro: "Invisible aligners may be suitable for people with:",
        items: [
          "Crooked teeth",
          "Crowded teeth",
          "Gaps between teeth",
          "Mild to moderate bite problems",
          "Relapsed teeth after previous braces",
          "Adults seeking a discreet orthodontic treatment",
        ],
      },
    ],
    whyChoose: {
      heading: "Why Choose Molar Dental Hospital?",
      intro:
        "We combine advanced 3D digital technology with personalized orthodontic care to deliver accurate, comfortable, and predictable smile transformations. From your initial consultation to your final aligner, our experienced dental team ensures every stage of your treatment is carefully planned.",
      items: [
        "Experienced dental professionals",
        "Advanced 3D digital smile planning",
        "Personalized treatment plans",
        "Comfortable & modern clinic",
        "High-quality clear aligners",
        "Affordable treatment options",
        "Patient-centered care",
        "Comprehensive follow-up support",
      ],
    },
    closing: {
      heading: "Start Your Smile Journey Today",
      body: "Get the smile you've always wanted with Invisible Aligners at Molar Dental Hospital. Book your consultation today and experience the power of modern 3D dental care. Your perfect smile is just a step away!",
    },
  },
  {
    slug: "braces",
    name: "Braces",
    category: "Orthodontics",
    summary:
      "Tooth-colored ceramic braces provide effective orthodontic treatment with a more natural appearance.",
    image: "/services/orthodontics-1200.webp",
    imageAlt: "Orthodontic braces treatment with a digital orthodontic plan on screen",
    metaTitle: "Best Braces Treatment in Indresham, Patancheru | Molar Dental",
    metaDescription:
      "Get advanced braces treatment in Indresham at Molar Dental Hospital. Our orthodontists provide personalized braces treatment for children & adults.",
    heroTitle: "Braces Treatment in Indresham",
    heroSubtitle: "Straighten your smile with advanced braces treatment",
    intro: [
      "A confident smile starts with properly aligned teeth. At Molar Dental Hospital, we provide advanced braces treatment to correct crooked teeth, gaps, overcrowding, and bite problems for both children and adults.",
      "Our experienced orthodontists create personalized treatment plans using modern techniques to deliver comfortable care and long-lasting results.",
    ],
    whatIs: {
      heading: "What Are Braces?",
      body: [
        "Braces are orthodontic devices designed to gently move teeth into their correct positions over time. They improve the appearance of your smile while also correcting bite issues, making chewing, speaking, and maintaining oral hygiene much easier.",
        "Whether your teeth are crowded, spaced apart, or misaligned, braces can help create a healthier, more balanced smile.",
      ],
    },
    blocks: [
      {
        kind: "list",
        heading: "Signs You May Need Braces",
        items: [
          "Crooked or overlapping teeth",
          "Large gaps between teeth",
          "Crowded teeth",
          "Difficulty chewing food",
          "Upper and lower teeth don't meet properly",
          "Jaw pain caused by bite problems",
          "Teeth that stick out excessively",
        ],
      },
      {
        kind: "list",
        heading: "Benefits of Braces Treatment",
        items: [
          "Creates a beautiful smile",
          "Improves chewing efficiency",
          "Corrects bite alignment",
          "Makes brushing and flossing easier",
          "Prevents uneven tooth wear",
          "Reduces jaw strain",
          "Boosts confidence",
        ],
      },
      {
        kind: "steps",
        heading: "Types of Braces We Offer",
        items: [
          {
            title: "Metal Braces",
            description:
              "Strong, reliable, and highly effective for correcting all orthodontic problems.",
          },
          {
            title: "Ceramic Braces",
            description:
              "Tooth-colored brackets that blend naturally with your smile for a more discreet appearance.",
          },
          {
            title: "Self-Ligating Braces",
            description:
              "Modern braces that reduce friction, making treatment more comfortable and easier to maintain.",
          },
          {
            title: "Invisible Aligners",
            description:
              "Nearly invisible removable trays that straighten teeth without brackets or wires.",
          },
        ],
      },
      {
        kind: "steps",
        heading: "Your Braces Treatment Journey",
        items: [
          {
            title: "Consultation",
            description: "Complete dental examination and smile assessment.",
          },
          {
            title: "Digital Scanning",
            description: "Advanced digital scans for precise treatment planning.",
          },
          {
            title: "Braces Placement",
            description: "Brackets are carefully bonded to your teeth.",
          },
          {
            title: "Regular Adjustments",
            description: "Periodic visits ensure your teeth move correctly.",
          },
          {
            title: "Beautiful Smile",
            description: "Braces are removed, revealing your new confident smile.",
          },
        ],
      },
    ],
    whyChoose: {
      heading: "Why Choose Molar Dental Hospital?",
      items: [
        "Experienced orthodontists",
        "Personalized treatment plans",
        "Modern digital technology",
        "Comfortable treatment experience",
        "Affordable payment options",
        "High-quality orthodontic materials",
        "Friendly patient care",
        "Long-term smile support",
      ],
    },
    closing: {
      heading: "Start Your Smile Transformation Today",
      body: "Ready to achieve straighter teeth and a healthier smile? Schedule your orthodontic consultation at Molar Dental Hospital and let our experts create a customized braces treatment plan designed just for you. Book your appointment today!",
    },
  },
  {
    slug: "zirconia-crowns",
    name: "Zirconia Crowns",
    category: "Restorative",
    summary:
      "Restore damaged teeth with durable zirconia crowns that blend seamlessly with your natural smile.",
    image: "/services/zirconia-crowns-1200.webp",
    imageAlt: "Zirconia crown being fitted to restore a damaged tooth",
    metaTitle: "Best Zirconia Crowns in Indresham | Dental Crowns | Molar Dental",
    metaDescription:
      "Looking for zirconia crowns in Patancheru? Molar Dental Hospital offers durable, natural-looking zirconia dental crowns in Indresham for a stronger, confident smile.",
    heroTitle: "Zirconia Crowns in Indresham",
    heroSubtitle: "Premium strength. Natural beauty.",
    intro: [
      "Transform your smile with premium Zirconia Crowns in Indresham, Patancheru at Molar Dental Hospital. Designed using advanced digital technology, zirconia crowns restore damaged, broken, or root canal-treated teeth with exceptional strength and a natural appearance.",
      "They blend seamlessly with your smile while providing long-lasting protection and comfort.",
    ],
    whatIs: {
      heading: "What is a Zirconia Crown?",
      body: [
        "A zirconia crown is a high-strength ceramic cap that completely covers a damaged or weakened tooth. It restores the tooth's shape, size, strength, and appearance while looking almost identical to a natural tooth.",
        "Zirconia is highly durable, metal-free, and biocompatible, making it one of the best choices for long-term dental restorations.",
      ],
    },
    blocks: [
      {
        kind: "list",
        heading: "Why Choose Zirconia Crowns?",
        items: [
          "Natural tooth-like appearance",
          "Exceptional strength for daily chewing",
          "Metal-free and biocompatible",
          "Highly resistant to cracks and fractures",
          "Long-lasting durability",
          "Comfortable and precise fit",
          "Stain-resistant surface",
          "Suitable for front and back teeth",
        ],
      },
      {
        kind: "list",
        heading: "Who Needs a Zirconia Crown?",
        intro: "A zirconia crown may be recommended if you have:",
        items: [
          "A severely damaged or broken tooth",
          "A tooth weakened after root canal treatment",
          "Large fillings with insufficient tooth structure",
          "Worn-down teeth",
          "Discolored or misshapen teeth",
          "Dental implants requiring a permanent crown",
        ],
      },
      {
        kind: "steps",
        heading: "Our Zirconia Crown Procedure",
        items: [
          {
            title: "Digital Examination",
            description:
              "Your dentist examines the tooth and recommends the most suitable restoration.",
          },
          {
            title: "Tooth Preparation",
            description:
              "A small amount of enamel is reshaped to create space for the crown.",
          },
          {
            title: "Digital Impression",
            description:
              "Advanced digital scanning captures precise measurements for a perfectly fitting crown.",
          },
          {
            title: "Custom Zirconia Crown",
            description:
              "Your custom zirconia crown is crafted for superior aesthetics and durability.",
          },
          {
            title: "Crown Placement",
            description:
              "The finished crown is securely bonded to restore complete function and appearance.",
          },
        ],
      },
    ],
    whyChoose: {
      heading: "Why Choose Molar Dental Hospital?",
      items: [
        "Experienced dental specialists",
        "Advanced digital dentistry",
        "High-quality zirconia materials",
        "Precision-crafted restorations",
        "Comfortable and painless treatment",
        "Personalized patient care",
        "Modern sterilization protocols",
        "Affordable treatment options",
      ],
    },
    closing: {
      heading: "Restore Your Smile with Premium Zirconia Crowns",
      body: "Protect damaged teeth with durable, natural-looking zirconia crowns at Molar Dental Hospital. Book your consultation today and enjoy a stronger, healthier, and more confident smile.",
    },
  },
  {
    slug: "digital-rvg-x-ray",
    name: "Digital RVG X-Ray",
    category: "Diagnostics",
    summary:
      "Get fast, low-radiation digital dental X-rays for accurate diagnosis, precise treatment planning, and better oral care.",
    image: "/services/dental-xray-1200.webp",
    imageAlt: "Digital dental X-ray being taken with a panoramic imaging machine",
    metaTitle: "Best Dental RVG X-Ray in Indresham, Patancheru | Molar Dental",
    metaDescription:
      "Get advanced Dental RVG X-Ray in Indresham at Molar Dental Hospital. Accurate digital dental imaging for faster diagnosis and personalized treatment.",
    heroTitle: "Digital RVG X-Ray in Indresham",
    heroSubtitle: "Fast, safe & accurate digital dental imaging",
    intro: [
      "Get a clearer view of your oral health with advanced Digital RVG (RadioVisioGraphy) X-Ray technology in Indresham, Patancheru at Molar Dental Hospital. Our high-resolution digital imaging system captures detailed images of your teeth, roots, jawbone, and surrounding tissues within seconds.",
      "With significantly lower radiation exposure than traditional X-rays, Digital RVG ensures a safer, faster, and more comfortable diagnostic experience for patients of all ages.",
    ],
    whatIs: {
      heading: "What is a Digital RVG X-Ray?",
      body: [
        "Digital RVG (RadioVisioGraphy) is a digital dental imaging system that captures detailed, high-resolution images of your teeth, roots, jawbone, and surrounding tissues within seconds.",
        "Because the image is digital, it appears instantly on screen, uses significantly less radiation than film X-rays, and can be enlarged and shared with you so you can see exactly what your dentist sees.",
      ],
    },
    blocks: [
      {
        kind: "list",
        heading: "When Do You Need a Digital RVG X-Ray?",
        intro: "Our dentists may recommend a Digital RVG X-Ray for:",
        items: [
          "Toothache and dental pain diagnosis",
          "Root canal treatment planning",
          "Dental implant evaluation",
          "Wisdom tooth assessment",
          "Cavity detection between teeth",
          "Bone loss and gum disease evaluation",
          "Braces and orthodontic treatment planning",
          "Dental trauma and fractures",
          "Post-treatment follow-up",
        ],
      },
      {
        kind: "steps",
        heading: "Benefits of Digital RVG X-Ray",
        items: [
          {
            title: "Accurate Diagnosis",
            description:
              "High-definition images help detect even the smallest dental problems before they become serious.",
          },
          {
            title: "Quick Results",
            description:
              "Images appear on-screen within seconds, reducing waiting time and allowing immediate treatment planning.",
          },
          {
            title: "Lower Radiation Exposure",
            description:
              "Digital RVG technology significantly reduces radiation, making it safer for both children and adults.",
          },
          {
            title: "Better Patient Understanding",
            description:
              "The images can be displayed on a monitor, allowing patients to clearly see and understand their dental condition.",
          },
          {
            title: "Improved Treatment Planning",
            description:
              "Detailed imaging enables our dentists to perform procedures with greater precision and confidence.",
          },
        ],
      },
      {
        kind: "steps",
        heading: "Our Digital RVG Process",
        items: [
          {
            title: "Comfortable Positioning",
            description: "A small digital sensor is gently placed inside your mouth.",
          },
          {
            title: "Digital Image Capture",
            description: "The RVG machine captures detailed images within seconds.",
          },
          {
            title: "Instant Image Display",
            description:
              "The X-ray appears immediately on the monitor for evaluation.",
          },
          {
            title: "Expert Diagnosis",
            description:
              "Our dentist carefully examines the images and explains the findings.",
          },
          {
            title: "Personalized Treatment Plan",
            description:
              "A customized treatment plan is created based on the digital diagnosis.",
          },
        ],
      },
    ],
    whyChoose: {
      heading: "Why Choose Molar Dental Hospital?",
      items: [
        "Advanced digital RVG imaging technology",
        "Highly experienced dental specialists",
        "Safe, low-radiation digital diagnostics",
        "Fast & comfortable imaging process",
        "Accurate treatment planning",
        "Modern digital dental care",
        "Patient-centered approach",
      ],
    },
    closing: {
      heading: "Get an Accurate Diagnosis in Minutes",
      body: "Don't let hidden dental problems go unnoticed. Experience fast, safe, and high-precision Digital RVG X-Ray imaging at Molar Dental Hospital. Schedule your Digital RVG X-Ray today and take the first step toward better oral health.",
    },
  },
  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    category: "Cosmetic",
    summary:
      "Professional whitening removes stains and enhances the brightness of your smile safely and effectively.",
    image: "/services/teeth-whitening-1200.webp",
    imageAlt: "Professional laser teeth whitening treatment in progress",
    metaTitle: "Best Teeth Whitening in Indresham, Patancheru | Molar Dental",
    metaDescription:
      "Get professional teeth whitening in Indresham at Molar Dental Hospital. Brighten stained or discolored teeth with safe, effective and personalized whitening treatment.",
    heroTitle: "Teeth Whitening in Indresham",
    heroSubtitle: "Brighten your smile with professional teeth whitening",
    intro: [
      "A brighter smile can boost your confidence and leave a lasting impression. At Molar Dental Hospital, we offer safe, effective, and professional Teeth Whitening treatments that remove stains and discoloration, revealing a naturally whiter smile.",
      "Using advanced whitening technology and dentist-supervised procedures, we help you achieve noticeable results comfortably and safely.",
    ],
    whatIs: {
      heading: "What is Teeth Whitening?",
      body: [
        "Teeth Whitening is a cosmetic dental treatment designed to lighten the natural shade of your teeth by removing stains caused by coffee, tea, smoking, aging, certain foods, and everyday wear.",
        "Unlike over-the-counter whitening products, professional teeth whitening provides faster, more even, and longer-lasting results while protecting your teeth and gums.",
      ],
    },
    blocks: [
      {
        kind: "list",
        heading: "Who Can Benefit from Teeth Whitening?",
        intro: "Professional teeth whitening is ideal for people who have:",
        items: [
          "Yellow or stained teeth",
          "Discoloration from coffee, tea, or soft drinks",
          "Tobacco or smoking stains",
          "Age-related tooth discoloration",
          "Dull or uneven tooth color",
        ],
      },
      {
        kind: "steps",
        heading: "Our Teeth Whitening Process",
        items: [
          {
            title: "Smile Assessment",
            description:
              "Our dentist examines your teeth and gums to determine if whitening is the right treatment for you.",
          },
          {
            title: "Professional Cleaning",
            description:
              "Plaque and surface stains are removed to prepare your teeth for whitening.",
          },
          {
            title: "Whitening Gel Application",
            description:
              "A professional whitening gel is carefully applied to your teeth while protecting the surrounding gums.",
          },
          {
            title: "Advanced Whitening",
            description:
              "A specialized dental light may be used to enhance the whitening process and deliver faster results.",
          },
          {
            title: "Reveal Your Brighter Smile",
            description:
              "After the treatment, you'll enjoy a visibly brighter, fresher, and more confident smile.",
          },
        ],
      },
      {
        kind: "steps",
        heading: "Benefits of Teeth Whitening",
        items: [
          {
            title: "Brighter Smile",
            description:
              "Restore the natural brightness of your teeth for a more youthful appearance.",
          },
          {
            title: "Improved Confidence",
            description:
              "Feel more comfortable smiling, speaking, and taking photos.",
          },
          {
            title: "Fast Results",
            description:
              "Professional whitening delivers visible improvements in a short amount of time.",
          },
          {
            title: "Safe Treatment",
            description:
              "Performed under professional supervision to protect your teeth and gums.",
          },
          {
            title: "Long-Lasting Brightness",
            description:
              "With proper oral hygiene and regular dental care, your brighter smile can last much longer.",
          },
        ],
      },
      {
        kind: "list",
        heading: "Aftercare Tips",
        items: [
          "Brush and floss daily.",
          "Avoid coffee, tea, red wine, and colored foods for the first 24–48 hours.",
          "Avoid smoking or tobacco products.",
          "Drink plenty of water.",
          "Visit your dentist for regular check-ups and cleanings.",
        ],
      },
    ],
    closing: {
      heading: "Reveal a Brighter, More Confident Smile",
      body: "Your dream smile is just one appointment away. At Molar Dental Hospital, our professional teeth whitening treatment safely removes stains and restores the natural brilliance of your teeth with fast, noticeable results. Book your teeth whitening appointment today!",
    },
  },
  {
    slug: "tooth-extraction",
    name: "Tooth Extraction",
    category: "Oral Surgery",
    summary:
      "Gentle, painless tooth extractions using advanced techniques for safe treatment, faster healing, & smooth recovery.",
    image: "/services/laser-dentistry-1200.webp",
    imageAlt: "Gentle tooth extraction using advanced laser dentistry equipment",
    metaTitle: "Tooth Extraction in Indresham, Patancheru | Molar Dental",
    metaDescription:
      "Get safe and comfortable tooth extraction in Indresham at Molar Dental Hospital. Our experienced dentists provide gentle extraction for damaged, decayed and impacted teeth.",
    heroTitle: "Tooth Extraction in Indresham",
    heroSubtitle: "Safe, gentle & comfortable tooth removal",
    intro: [
      "When a tooth is severely damaged, infected, or causing overcrowding, removing it may be the best way to protect your overall oral health. At Molar Dental Hospital, we provide safe and comfortable tooth extraction procedures using advanced techniques and modern technology.",
      "Our experienced dentists ensure minimal discomfort while helping you recover quickly and maintain a healthy smile.",
    ],
    whatIs: {
      heading: "What is Tooth Extraction?",
      body: [
        "Tooth Extraction is a dental procedure in which a damaged, decayed, infected, or problematic tooth is carefully removed from its socket. While preserving natural teeth is always our priority, extraction may be recommended when a tooth cannot be saved or when it is affecting the health of surrounding teeth and gums.",
        "After extraction, our dentists will also discuss suitable tooth replacement options, such as dental implants, bridges, or dentures, to restore your smile and chewing function.",
      ],
    },
    blocks: [
      {
        kind: "list",
        heading: "When is Tooth Extraction Needed?",
        intro: "A tooth extraction may be recommended if you have:",
        items: [
          "Severe tooth decay beyond repair",
          "Advanced gum disease causing loose teeth",
          "Broken or fractured teeth that cannot be restored",
          "Impacted or problematic wisdom teeth",
          "Overcrowded teeth before orthodontic treatment",
          "Severe tooth infection",
          "Dental trauma or injury",
          "Baby teeth that fail to fall out naturally",
        ],
      },
      {
        kind: "steps",
        heading: "Our Tooth Extraction Process",
        items: [
          {
            title: "Comprehensive Examination",
            description:
              "Our dentist performs a detailed oral examination and takes digital X-rays to evaluate the tooth.",
          },
          {
            title: "Treatment Planning",
            description:
              "Based on diagnosis, we determine whether simple or surgical extraction is the most appropriate option.",
          },
          {
            title: "Comfortable Local Anesthesia",
            description:
              "The area is gently numbed to ensure a pain-free and comfortable procedure.",
          },
          {
            title: "Gentle Tooth Removal",
            description:
              "The tooth is carefully removed using precise techniques while protecting the surrounding tissues.",
          },
          {
            title: "Recovery & Aftercare",
            description:
              "After the extraction, we provide detailed aftercare instructions and discuss tooth replacement options if needed.",
          },
        ],
      },
      {
        kind: "list",
        heading: "Benefits of Tooth Extraction",
        items: [
          "Relieves pain — removes the source of severe tooth pain and discomfort",
          "Prevents infection — stops infections from spreading to nearby teeth, gums, and bone",
          "Protects oral health — prevents further complications and preserves surrounding healthy teeth",
          "Supports orthodontic treatment — creates the necessary space for braces or aligners when required",
          "Improves comfort — eliminates damaged or loose teeth that interfere with eating and speaking",
        ],
      },
      {
        kind: "list",
        heading: "Aftercare Tips",
        items: [
          "Bite gently on the gauze as instructed.",
          "Avoid rinsing vigorously for the first 24 hours.",
          "Eat soft foods and stay hydrated.",
          "Avoid smoking, alcohol, and using straws during the initial healing period.",
          "Maintain good oral hygiene while avoiding the extraction site.",
          "Take prescribed medications as directed.",
          "Attend follow-up appointments if recommended.",
        ],
      },
    ],
    closing: {
      heading: "Relieve Tooth Pain with Safe & Gentle Care",
      body: "Don't let a damaged or painful tooth affect your daily life. At Molar Dental Hospital, we provide comfortable tooth extractions using advanced techniques to ensure a smooth procedure and faster recovery. Book your tooth extraction consultation today.",
    },
  },
];

/** Compact list used by the navigation and footer menus. */
export const serviceNav = services.map(({ slug, name, category }) => ({
  slug,
  name,
  category,
}));

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

/**
 * Responsive sources for a treatment photograph: a 640w and a 1200w WebP.
 * `image` is the 1200w file, e.g. "/services/dental-implants-1200.webp".
 */
export function serviceSrcSet(image: string) {
  const base = image.replace(/-\d+\.webp$/, "");
  return `${base}-640.webp 640w, ${base}-1200.webp 1200w`;
}
