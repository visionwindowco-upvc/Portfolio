export interface Product {
  id: string; // The slug
  name: string;
  category: string;
  image: string;
  description: string;
  longDescription: string;
  features: string[];
  benefits: string[];
}

export const products: Product[] = [
  {
    id: 'casement-windows',
    name: 'UPVC Casement Windows',
    category: 'Windows',
    image: 'https://res.cloudinary.com/dflulie2g/image/upload/q_auto,w_1200,c_limit/v1781720948/casement-window_lctpxt.jpg',
    description: 'Classic side-hinged windows that open outward, providing excellent ventilation and unobstructed views. Perfect for modern and traditional homes.',
    longDescription: 'Our Premium UPVC Casement Windows are the pinnacle of classic design engineered with modern technology. Hinged on the side to open outward, they act as a funnel to catch and direct natural breezes into your home, offering superior ventilation compared to sliding alternatives. When closed, the multi-point locking system tightly seals the sash against the frame, providing exceptional acoustic and thermal insulation.',
    features: ['Side-hinged opening', 'Multi-point locking', 'Double/triple glazing options', 'Weather-sealed gaskets', 'Galvanized steel reinforcement'],
    benefits: ['Maximum ventilation', 'Highly secure', 'Excellent noise reduction', 'Easy to clean', 'Unobstructed panoramic views'],
  },
  {
    id: 'sliding-windows',
    name: 'UPVC Sliding Windows',
    category: 'Windows',
    image: 'https://res.cloudinary.com/dflulie2g/image/upload/q_auto,w_1200,c_limit/v1781720948/sliding-window_zdnymm.jpg',
    description: 'Sleek horizontal sliding windows that save space while maximizing natural light. Ideal for apartments and compact spaces.',
    longDescription: 'Maximize your space without compromising on style or functionality. Our UPVC Sliding Windows glide effortlessly on precision-engineered nylon rollers along an extruded track. Because they do not protrude inward or outward, they are the absolute best choice for spaces facing walkways, balconies, or tight indoor areas. The frames are fully reinforced and feature integrated drainage systems to handle heavy monsoons.',
    features: ['Space-saving horizontal glide', 'Smooth nylon roller mechanism', 'Anti-lift security blocks', 'Integrated drainage system', 'Fly-screen mesh compatibility'],
    benefits: ['Perfect for tight spaces', 'Easy, single-handed operation', 'Does not obstruct pathways', 'Safe for higher floors', 'Sleek, modern aesthetic'],
  },
  {
    id: 'tilt-turn-windows',
    name: 'UPVC Tilt & Turn Windows',
    category: 'Windows',
    image: 'https://res.cloudinary.com/dflulie2g/image/upload/q_auto,w_1200,c_limit/v1781720948/tilt-turn-window_iyymig.jpg',
    description: 'Versatile windows that tilt inward for ventilation or swing open fully for easy cleaning. European-style engineering.',
    longDescription: 'Experience European engineering excellence with our Tilt & Turn UPVC Windows. Controlled by a single, specialized handle, this window offers two distinct opening modes. Turn the handle 90 degrees to swing the window inward like a door for maximum airflow and easy exterior cleaning. Turn it 180 degrees to tilt the top of the sash inward, providing secure, draft-free ventilation that is safe for children and pets.',
    features: ['Dual-action opening mechanism', 'Inward swing and top-tilt modes', 'Heavy-duty European hardware', 'Child-safe ventilation mode', 'Continuous compression seal'],
    benefits: ['Draft-free ventilation', 'Can be cleaned safely from inside', 'Extremely high wind load resistance', 'Premium architectural look', 'Enhanced security when tilted'],
  },
  {
    id: 'fixed-windows',
    name: 'UPVC Fixed Windows',
    category: 'Windows',
    image: 'https://res.cloudinary.com/dflulie2g/image/upload/q_auto,w_1200,c_limit/v1781720949/fixed-window_mz6gxs.jpg',
    description: 'Non-opening panoramic windows designed for maximum light and views. Available in custom sizes for any architectural design.',
    longDescription: 'Sometimes a view is too spectacular to interrupt. Our UPVC Fixed Windows (Picture Windows) are designed to frame the outside world like a work of art. Because they do not open, they offer the absolute highest levels of thermal efficiency, acoustic insulation, and security. They can be installed as massive floor-to-ceiling glass walls or combined with casement and sliding windows to create striking architectural facades.',
    features: ['Non-operable fixed frame', 'Maximum glass-to-frame ratio', 'Customizable shapes and arches', 'Hermetically sealed', 'Impact-resistant glass options'],
    benefits: ['Floods rooms with natural light', 'Unmatched thermal insulation', 'Zero mechanical maintenance', 'Highest security rating', 'Perfect for framing views'],
  },
  {
    id: 'french-doors',
    name: 'UPVC French Doors',
    category: 'Doors',
    image: 'https://res.cloudinary.com/dflulie2g/image/upload/q_auto,w_1200,c_limit/v1781720948/french-door_hp6aee.jpg',
    description: 'Elegant double doors that add a touch of sophistication to any entrance. Wide openings connect indoor and outdoor living.',
    longDescription: 'Bring classic European elegance to your home with our UPVC French Doors. Featuring two operable door slabs that open outward or inward from the center, they provide a massive, unobstructed opening that seamlessly connects your living room to your patio, garden, or balcony. Despite their delicate appearance, our French Doors are incredibly robust, featuring steel cores and multi-point shootbolt locks.',
    features: ['Double-door center opening', 'Low-threshold options', 'Multi-point shootbolt security', 'Full glass or paneled options', 'Heavy-duty adjustable hinges'],
    benefits: ['Seamless indoor-outdoor flow', 'Timeless, elegant aesthetic', 'Allows large items to pass through easily', 'Brightens up living spaces', 'Highly secure against forced entry'],
  },
  {
    id: 'sliding-doors',
    name: 'UPVC Sliding Doors',
    category: 'Doors',
    image: 'https://res.cloudinary.com/dflulie2g/image/upload/q_auto,w_1200,c_limit/v1781720948/sliding-door_zjjmm6.jpg',
    description: 'Premium sliding doors for balconies and patios. Effortless glide mechanism with panoramic glass for stunning views.',
    longDescription: 'Transform your living space with our premium UPVC Sliding Doors. Engineered to handle large, heavy panes of glass with zero effort, these doors glide silently on high-quality tandem rollers. The multi-chambered UPVC profiles provide excellent insulation, keeping your home comfortable while giving you an uninterrupted, panoramic view of the outdoors. They are the ultimate modern solution for patios, balconies, and large room dividers.',
    features: ['Heavy-duty tandem rollers', 'Multi-track options (2, 3, or 4 tracks)', 'Anti-lift security mechanisms', 'Integrated bug mesh tracks', 'High wind-load resistance'],
    benefits: ['Space-saving operation', 'Panoramic, unobstructed views', 'Effortless to open and close', 'Allows massive amounts of light', 'Keeps insects out with optional mesh'],
  },
];
