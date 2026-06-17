export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: '10 Reasons to Choose UPVC Windows Over Aluminium',
    slug: '10-reasons-to-choose-upvc-windows-over-aluminium',
    excerpt: 'Discover why UPVC windows are becoming the preferred choice for modern homeowners. From energy efficiency to low maintenance, learn the top benefits.',
    content: `
      <h2>Introduction</h2>
      <p>When it comes to upgrading your home's windows, the choice of material is crucial. While aluminium has been a traditional choice, UPVC (Unplasticized Polyvinyl Chloride) is rapidly becoming the gold standard for modern homes.</p>
      
      <h2>1. Superior Thermal Insulation</h2>
      <p>UPVC is a fantastic insulator. Unlike aluminium, which conducts heat and cold, UPVC helps maintain your indoor temperature, keeping your home warm in winter and cool in summer. This translates to significant savings on your energy bills.</p>

      <h2>2. Enhanced Acoustic Insulation</h2>
      <p>If you live near a busy road or in a noisy neighborhood, UPVC is your best friend. Its multi-chambered design combined with double glazing can reduce outside noise by up to 40 decibels, creating a peaceful indoor environment.</p>

      <h2>3. Virtually Maintenance-Free</h2>
      <p>Say goodbye to sanding, painting, and varnishing. Unlike wood which rots, or aluminium which can corrode over time, UPVC is incredibly durable. A simple wipe down with soapy water is all it needs to look brand new for decades.</p>
      
      <h2>4. Unmatched Durability</h2>
      <p>UPVC is resistant to weathering, salt water, and UV rays. It will not warp, fade, or blister, making it the perfect choice for harsh climates.</p>

      <h2>Conclusion</h2>
      <p>Investing in UPVC windows is not just an aesthetic upgrade; it's a long-term investment in your home's comfort, security, and energy efficiency. Contact Vision Window Co today to explore our premium UPVC range.</p>
    `,
    category: 'Guide',
    author: 'Vision Window Co',
    date: 'May 20, 2026',
    readTime: '5 min read',
    image: 'https://res.cloudinary.com/dflulie2g/image/upload/q_auto,w_1200,c_limit/v1781720948/casement-window_lctpxt.jpg',
  },
  {
    id: 2,
    title: 'How UPVC Windows Can Cut Your Energy Bills by 30%',
    slug: 'how-upvc-windows-can-cut-your-energy-bills',
    excerpt: 'Multi-chambered UPVC profiles combined with double glazing create an insulation barrier that significantly reduces heating and cooling costs.',
    content: `
      <h2>The Science of Insulation</h2>
      <p>Did you know that up to 30% of your home's heating and cooling energy is lost through inefficient windows? UPVC is a non-conductive material, meaning it does not transfer heat. This natural insulating property is enhanced by the multi-chambered design of the profiles.</p>
      
      <h2>Double Glazing Magic</h2>
      <p>When UPVC frames are paired with double or triple glazing, a sealed pocket of air or inert gas is created between the glass panes. This acts as a thermal barrier, preventing indoor air from escaping and outdoor weather from entering.</p>

      <h2>Return on Investment</h2>
      <p>While premium UPVC windows might have a higher initial cost than basic single-pane windows, the monthly savings on your electricity bills mean that these windows essentially pay for themselves over time.</p>
    `,
    category: 'Energy Efficiency',
    author: 'Vision Window Co',
    date: 'May 15, 2026',
    readTime: '4 min read',
    image: 'https://res.cloudinary.com/dflulie2g/image/upload/q_auto,w_1200,c_limit/v1781720949/fixed-window_mz6gxs.jpg',
  },
  {
    id: 3,
    title: 'UPVC vs Wood vs Aluminium: A Complete Comparison',
    slug: 'upvc-vs-wood-vs-aluminium-comparison',
    excerpt: 'Confused about which window material to choose? We break down the pros and cons of UPVC, wood, and aluminium to help you make an informed decision.',
    content: `
      <h2>Aesthetics vs Practicality</h2>
      <p>Wood offers a classic, premium look but requires constant, expensive maintenance to prevent rot and termite damage. Aluminium is strong and sleek but is a poor insulator.</p>
      
      <h2>The UPVC Advantage</h2>
      <p>UPVC offers the best of both worlds. With modern manufacturing, UPVC can even mimic the look of natural wood grain, providing the classic aesthetic of timber without any of the maintenance headaches.</p>

      <h2>Cost Effectiveness</h2>
      <p>When considering the lifecycle cost (including purchase, installation, and decades of maintenance), UPVC emerges as the undisputed most cost-effective option on the market.</p>
    `,
    category: 'Comparison',
    author: 'Vision Window Co',
    date: 'May 10, 2026',
    readTime: '7 min read',
    image: 'https://res.cloudinary.com/dflulie2g/image/upload/q_auto,w_1200,c_limit/v1781720948/sliding-window_zdnymm.jpg',
  },
  {
    id: 4,
    title: 'Sliding vs Casement Windows: Which Is Right for You?',
    slug: 'sliding-vs-casement-windows',
    excerpt: 'Both sliding and casement windows have their advantages. We help you understand which style works best for your space and requirements.',
    content: `
      <h2>Sliding Windows: The Space Savers</h2>
      <p>Sliding windows operate horizontally on a track. Because they don't swing inward or outward, they are the perfect solution for tight spaces, walkways, or balconies where a swinging sash would be an obstruction.</p>
      
      <h2>Casement Windows: Maximum Ventilation</h2>
      <p>Casement windows are hinged at the side and open outward. They offer excellent ventilation because the open sash can actually catch passing breezes and direct them into the house. They also provide a tighter seal when closed compared to sliding windows.</p>
    `,
    category: 'Guide',
    author: 'Vision Window Co',
    date: 'May 5, 2026',
    readTime: '4 min read',
    image: 'https://res.cloudinary.com/dflulie2g/image/upload/q_auto,w_1200,c_limit/v1781720948/tilt-turn-window_iyymig.jpg',
  },
  {
    id: 5,
    title: 'UPVC Door Designs That Elevate Your Home Entrance',
    slug: 'upvc-door-designs-elevate-home-entrance',
    excerpt: 'Your entrance makes the first impression. Explore stylish UPVC door designs that combine security, insulation, and stunning aesthetics.',
    content: `
      <h2>First Impressions Matter</h2>
      <p>Your front door is the focal point of your home's exterior. UPVC doors are no longer just basic white panels; they come in a vast array of colors, finishes, and architectural styles.</p>
      
      <h2>Uncompromising Security</h2>
      <p>Beneath the beautiful exterior, our UPVC doors feature galvanized steel reinforcement and advanced multi-point locking mechanisms to keep your family safe.</p>
    `,
    category: 'Design',
    author: 'Vision Window Co',
    date: 'Apr 28, 2026',
    readTime: '5 min read',
    image: 'https://res.cloudinary.com/dflulie2g/image/upload/q_auto,w_1200,c_limit/v1781720948/french-door_hp6aee.jpg',
  },
  {
    id: 6,
    title: 'How to Maintain Your UPVC Windows for 25+ Years',
    slug: 'how-to-maintain-upvc-windows',
    excerpt: 'UPVC windows are virtually maintenance-free, but a little care goes a long way. Follow our expert tips to keep your windows looking brand new.',
    content: `
      <h2>Routine Cleaning</h2>
      <p>Never use abrasive pads or harsh chemicals on UPVC frames. A soft cloth and mild soapy water are all you need to remove dust and dirt. Avoid glass cleaners on the frames themselves.</p>
      
      <h2>Lubricating Hardware</h2>
      <p>To ensure smooth operation, apply a few drops of light machine oil to the hinges and locking mechanisms every six months. Do not use WD-40, as it can dry out the components over time.</p>

      <h2>Clearing Drainage Channels</h2>
      <p>UPVC windows have built-in drainage channels to divert rainwater. Check these channels occasionally to ensure they are free of debris and leaves.</p>
    `,
    category: 'Maintenance',
    author: 'Vision Window Co',
    date: 'Apr 20, 2026',
    readTime: '3 min read',
    image: 'https://res.cloudinary.com/dflulie2g/image/upload/q_auto,w_1200,c_limit/v1781720948/sliding-door_zjjmm6.jpg',
  }
];
