import { Department, NewsItem, CampusLandmark, CutoffData } from '../types';

export const DEPARTMENTS: Department[] = [
  {
    code: 'ECE',
    name: 'Electronics & Communication Engineering',
    skt: 'विद्युत् संचार',
    category: 'circuit',
    tag: 'Semiconductors · 5G/6G · VLSI · AI on Silicon',
    seats: 140,
    established: 1959,
    avgPackage: '₹17.8 LPA',
    highestPackage: '₹88 LPA',
    description: 'Pioneering semiconductor research and next-generation wireless communications since REC foundation. Hosts the newly funded MeitY Semiconductor & VLSI Design Hub and 5G Testbed.',
    curriculumHighlights: ['Advanced VLSI Design & Verilog/SystemVerilog', '5G/6G Wireless Architecture & MIMO', 'Embedded AI & Edge Computing', 'Optical & Satellite Communication', 'RF & Microwave Engineering'],
    flagshipLabs: ['VLSI & Nanotechnology Center', 'RF Microwave Anechoic Chamber', 'Signal Processing & DSP Lab', 'Embedded Systems & IoT Testbed', '5G Wireless Testbed'],
    topRecruiters: ['Qualcomm', 'Nvidia', 'Texas Instruments', 'Apple', 'Intel', 'AMD', 'Samsung R&D', 'ISRO', 'Broadcom'],
    researchAreas: ['GaN Device Modeling', 'Massive MIMO & Beamforming', 'Biomedical Signal Processing', 'Photonic Integrated Circuits', 'Neuromorphic Silicon']
  },
  {
    code: 'CSE',
    name: 'Computer Science & Engineering',
    skt: 'गणना विज्ञान',
    category: 'circuit',
    tag: 'Distributed Systems · LLMs · Cybersecurity · Cloud',
    seats: 150,
    established: 1982,
    avgPackage: '₹22.5 LPA',
    highestPackage: '₹88 LPA',
    description: 'Renowned for world-class competitive programming and distributed systems research, with alumni leading top global tech companies and research laboratories.',
    curriculumHighlights: ['Advanced Data Structures & Algorithms', 'Distributed Cloud Architecture', 'Deep Learning & Natural Language Processing', 'Cryptography & Network Defense', 'Quantum Computing Fundamentals'],
    flagshipLabs: ['Center for High Performance Computing', 'Artificial Intelligence & Vision Lab', 'Cloud & Edge Virtualization Lab', 'Cyber Defense Range'],
    topRecruiters: ['Google', 'Microsoft', 'Uber', 'Amazon', 'Atlassian', 'Oracle', 'Goldman Sachs', 'Directi'],
    researchAreas: ['Generative AI Alignment', 'Federated Learning', 'Zero-Knowledge Proofs', 'Autonomous Drone Navigation']
  },
  {
    code: 'EEE',
    name: 'Electrical Engineering',
    skt: 'विद्युच्छक्ति',
    category: 'circuit',
    tag: 'Smart Grids · EV Drives · Renewable Microgrids',
    seats: 130,
    established: 1959,
    avgPackage: '₹14.2 LPA',
    highestPackage: '₹54 LPA',
    description: 'One of the founding branches of the institute. Houses state-of-the-art power systems simulation, electric vehicle drive benches, and renewable energy research parks.',
    curriculumHighlights: ['Electric Vehicle Powertrain Design', 'Smart Grid & Renewable Integration', 'Power Electronics & Wide Bandgap Devices', 'Industrial Automation & PLC/SCADA'],
    flagshipLabs: ['Smart Grid Simulation Center', 'Electric Drives & EV Propulsion Lab', 'High Voltage Engineering Facility', 'Power System Protection Lab'],
    topRecruiters: ['L&T', 'Schneider Electric', 'Texas Instruments', 'ABB', 'Siemens', 'Tata Power', 'GE Renewable'],
    researchAreas: ['Solid-state Transformers', 'Battery Management Systems (BMS)', 'Microgrid Islanding Control']
  },
  {
    code: 'MECH',
    name: 'Mechanical Engineering',
    skt: 'यन्त्रकला',
    category: 'core',
    tag: 'Robotics · Additive Manufacturing · Thermal CFD',
    seats: 140,
    established: 1959,
    avgPackage: '₹12.6 LPA',
    highestPackage: '₹42 LPA',
    description: 'Rich heritage of mechanical innovation with cutting-edge Siemens Center of Excellence in Industry 4.0, CAD/CAM/CAE suites, and Formula Student racing workshops.',
    curriculumHighlights: ['Robotics & Mechatronics Systems', 'Computational Fluid Dynamics (CFD)', 'Additive Manufacturing (Metal 3D Printing)', 'Automotive Vehicle Dynamics'],
    flagshipLabs: ['Siemens Industry 4.0 Center', 'Rapid Prototyping & CNC Lab', 'Wind Tunnel Aerodynamics Facility', 'Advanced Combustion Engine Lab'],
    topRecruiters: ['Tata Motors', 'Mercedes-Benz R&D', 'Bajaj Auto', 'BHEL', 'L&T Heavy Civil', 'Airbus', 'John Deere'],
    researchAreas: ['Bio-inspired Robotics', 'Cryogenic Heat Transfer', 'Metal Matrix Composites', 'Hydrogen Internal Combustion']
  },
  {
    code: 'CIVIL',
    name: 'Civil Engineering',
    skt: 'निर्माण स्थापत्य',
    category: 'core',
    tag: 'Earthquake Eng · Geotech · BIM · Water Resources',
    seats: 120,
    established: 1959,
    avgPackage: '₹10.8 LPA',
    highestPackage: '₹34 LPA',
    description: 'Honoring the timeless civil engineering genius of the Kakatiyas who built monolithic stepwells and lakes across Warangal that endure after 800 years.',
    curriculumHighlights: ['Structural Dynamics & Earthquake Resistant Design', 'Building Information Modeling (BIM)', 'Geotechnical Ground Improvement', 'Intelligent Transportation Systems'],
    flagshipLabs: ['Shake Table Earthquake Testing Lab', 'Advanced Concrete & Materials Lab', 'GIS & Satellite Remote Sensing Center', 'Environmental Geotechnics Lab'],
    topRecruiters: ['L&T Infrastructure', 'Afcons', 'Tata Projects', 'Jacobs', 'Shapoorji Pallonji', 'AECOM'],
    researchAreas: ['Kakatiya Historic Mortar Characterization', 'Seismic Retrofitting', 'Smart City Urban Drainage']
  },
  {
    code: 'CHEM',
    name: 'Chemical Engineering',
    skt: 'रसायन अभियांत्रिकी',
    category: 'core',
    tag: 'Biofuels · Process Optimization · Carbon Capture',
    seats: 100,
    established: 1964,
    avgPackage: '₹11.9 LPA',
    highestPackage: '₹38 LPA',
    description: 'Focusing on green transition, hydrogen fuels, process simulation, and sustainable polymers with active pilot plants and industrial collaborations.',
    curriculumHighlights: ['Process Dynamics, Control & Simulation', 'Biochemical Engineering & Fermentation', 'Petrochemical & Polymer Tech', 'Carbon Capture & Membrane Separation'],
    flagshipLabs: ['ASPEN Plus Process Simulation Suite', 'Membrane Separations & Desalination Lab', 'Petroleum Refining Test Center', 'Multiphase Flow Facility'],
    topRecruiters: ['Reliance Industries', 'ExxonMobil', 'Shell', 'IOCL', 'BPCL', 'Dr. Reddy’s Laboratories'],
    researchAreas: ['CO2 Hydrogenation to Methanol', 'Forward Osmosis for Wastewater', 'Nano-catalytic Synthesis']
  },
  {
    code: 'MME',
    name: 'Metallurgical & Materials Engineering',
    skt: 'धातुविद्या',
    category: 'core',
    tag: 'High-Entropy Alloys · Nanomaterials · Aerospace Metals',
    seats: 80,
    established: 1965,
    avgPackage: '₹11.4 LPA',
    highestPackage: '₹36 LPA',
    description: 'Continuing the ancient Telanganite metallurgists legacy (origin of Damascus crucible steel) into the era of superalloys and biocompatible implants.',
    curriculumHighlights: ['High-Entropy Alloy Synthesis', 'Corrosion Science & Protection', 'Aerospace Superalloys & Titanium', 'Phase Transformations & Heat Treatment'],
    flagshipLabs: ['Scanning Electron Microscopy (SEM) Lab', 'X-Ray Diffraction (XRD) Center', 'Vacuum Arc Melting Facility', 'Mechanical Metallurgy Testing'],
    topRecruiters: ['Tata Steel', 'JSW', 'Vedanta', 'Midhani', 'DRDO DMRL', 'Hindalco'],
    researchAreas: ['Bulk Metallic Glasses', 'Lightweight Armor Alloys', 'Solid Electrolytes for Batteries']
  },
  {
    code: 'BIOTECH',
    name: 'Biotechnology',
    skt: 'जैव प्रौद्योगिकी',
    category: 'sciences',
    tag: 'CRISPR · Biopharma · Synthetic Biology',
    seats: 60,
    established: 2006,
    avgPackage: '₹10.5 LPA',
    highestPackage: '₹28 LPA',
    description: 'Pioneering intersection of biology, computing, and nanomedicine with modern biosafety containment and bioinformatics clusters.',
    curriculumHighlights: ['Recombinant DNA & Gene Editing', 'Bioinformatics & Molecular Modeling', 'Upstream & Downstream Bioprocessing', 'Immunology & Vaccine Development'],
    flagshipLabs: ['Genomics & Proteomics Facility', 'Bioreactor & Fermentation Center', 'Plant & Animal Tissue Culture Lab'],
    topRecruiters: ['Biocon', 'Serum Institute', 'Dr. Reddy’s', 'Novartis', 'AstraZeneca'],
    researchAreas: ['CRISPR-Cas Diagnostics', 'Algal Biofuels', 'Targeted Drug Delivery Systems']
  }
];

export const CAMPUS_LANDMARKS: CampusLandmark[] = [
  {
    id: 'admin-block',
    name: 'Administrative Building & Heritage Portico',
    teluguName: 'పరిపాలనా భవనం',
    category: 'Academic',
    description: 'The monumental heart of NITW where Pandit Jawaharlal Nehru laid the foundation stone on October 10, 1959. Houses the Director office, Senate hall, and central administration.',
    features: ['Nehru Foundation Stone plaque', 'Kakatiya Tara architectural carvings', 'Central Convocation steps'],
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    coordinates: { x: 50, y: 35 }
  },
  {
    id: 'mega-hostel',
    name: '1.8K Ultra Mega Hostel (Bheem)',
    teluguName: 'భీమ్ మెగా హాస్టల్',
    category: 'Hostel',
    description: 'One of the largest student residential complexes in Asia, housing 1,800 students with integrated dining halls, courtyards, gymnasium, and high-speed Wi-Fi.',
    features: ['1,800 capacity single & double rooms', 'Multi-cuisine central mess', 'Courtyard badminton courts', '24/7 reading rooms'],
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80',
    coordinates: { x: 75, y: 70 }
  },
  {
    id: 'ambedkar-library',
    name: 'Dr. B.R. Ambedkar Learning Centre',
    teluguName: 'డా. బి.ఆర్. అంబేడ్కర్ గ్రంథాలయం',
    category: 'Academic',
    description: 'A 6-floor architectural marvel housing over 200,000 volumes, digital IEEE/ACM repositories, 24-hour study pods, and research dissertation archives.',
    features: ['200,000+ print volumes', 'Full IEEE/Nature/Science subscriptions', 'RFID automatic checkout', 'Dedicated Ph.D research carrels'],
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
    coordinates: { x: 35, y: 45 }
  },
  {
    id: 'innovation-garage',
    name: 'Innovation Garage (IG) & T-BI',
    teluguName: 'ఇన్నోవేషన్ గ్యారేజ్',
    category: 'Innovation',
    description: 'The makerspace and student startup incubator running 24/7. Equipped with metal/resin 3D printers, laser cutters, oscilloscope benches, and seed funding support.',
    features: ['24/7 student-run makerspace', 'Rapid prototyping lab', 'Venture seed fund access', 'Incubated 45+ student startups'],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    coordinates: { x: 62, y: 28 }
  },
  {
    id: 'sports-complex',
    name: 'Major Dhyan Chand Sports Pavilion',
    teluguName: 'ధ్యాన్ చంద్ క్రీడా ప్రాంగణం',
    category: 'Sports',
    description: 'Olympic-dimension standard facilities including cricket stadium with floodlights, synthetic athletic track, basketball complex, and indoor badminton arena.',
    features: ['Floodlit cricket stadium', 'Synthetic running track', 'Indoor wooden badminton courts', 'Olympic size swimming pool'],
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    coordinates: { x: 20, y: 75 }
  },
  {
    id: 'auditorium',
    name: 'Dr. APJ Abdul Kalam Auditorium',
    teluguName: 'అబ్దుల్ కలాం ఆడిటోరియం',
    category: 'Culture',
    description: 'A 1,200-seat acoustic concert hall that serves as the epicentre for Technozion, Spring Spree, international symposia, and convocation addresses.',
    features: ['Dolby surround acoustics', 'Full theatrical lighting rigging', 'Venue for Spring Spree & Technozion', 'VIP green rooms'],
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80',
    coordinates: { x: 45, y: 60 }
  }
];

export const NEWS_BULLETINS: NewsItem[] = [
  {
    id: 'news-1',
    date: 'MAR 2025',
    title: 'MeitY sanctions ₹48 Crore for Advanced Semiconductor Fabrication & VLSI Center at NITW',
    category: 'Research',
    summary: 'The Department of Electronics and Communication Engineering will house a pilot semiconductor cleanroom supporting indigenous 28nm chip design and packaging testbeds.',
    isUrgent: true
  },
  {
    id: 'news-2',
    date: 'FEB 2025',
    title: 'JoSAA / CSAB Admissions 2025: Official Seat Matrix & Branch Eligibility Guidelines Published',
    category: 'Admissions',
    summary: 'Prospective undergraduate aspirants can check closing rank cutoffs, category reservation guidelines, and host-state (Telangana) vs other-state quotas.',
    isUrgent: true
  },
  {
    id: 'news-3',
    date: 'FEB 2025',
    title: 'Technozion 2025 Concludes with Over 8,500 Participants from 120 Colleges Across India',
    category: 'Campus',
    summary: 'Flagship events included Autonomous Drone Swarm Challenge, Silicon Hackathon, and keynote addresses by ISRO directors and AI leaders.',
    isUrgent: false
  },
  {
    id: 'news-4',
    date: 'JAN 2025',
    title: 'Campus Placements 2024-25 Phase-1 Report: 42 Students Bag ₹50+ LPA Offers; Overall Average Rises to ₹17.4 LPA',
    category: 'Placements',
    summary: 'Top recruiters include Qualcomm, Nvidia, Microsoft, Uber, Texas Instruments, Apple, and Goldman Sachs with strong recruitment in semiconductor and AI sectors.',
    isUrgent: false
  },
  {
    id: 'news-5',
    date: 'DEC 2024',
    title: 'NITW & ISRO Sign MoU for Space Technology Cell & Atmospheric Radar Satellite Link',
    category: 'Research',
    summary: 'Joint collaborative research on high-frequency phased array satellite links and ionospheric wave propagation at the Warangal telemetry station.',
    isUrgent: false
  }
];

export const CUTOFF_DATA: CutoffData[] = [
  { branchCode: 'CSE', branchName: 'Computer Science & Engineering', homeStateOpening: 950, homeStateClosing: 2950, otherStateOpening: 850, otherStateClosing: 2150, category: 'OPEN' },
  { branchCode: 'ECE', branchName: 'Electronics & Communication Engg.', homeStateOpening: 2800, homeStateClosing: 6400, otherStateOpening: 2400, otherStateClosing: 5300, category: 'OPEN' },
  { branchCode: 'EEE', branchName: 'Electrical & Electronics Engg.', homeStateOpening: 6200, homeStateClosing: 11200, otherStateOpening: 5800, otherStateClosing: 9900, category: 'OPEN' },
  { branchCode: 'MECH', branchName: 'Mechanical Engineering', homeStateOpening: 11000, homeStateClosing: 17500, otherStateOpening: 9800, otherStateClosing: 15400, category: 'OPEN' },
  { branchCode: 'CIVIL', branchName: 'Civil Engineering', homeStateOpening: 17000, homeStateClosing: 26800, otherStateOpening: 15200, otherStateClosing: 23500, category: 'OPEN' },
  { branchCode: 'CHEM', branchName: 'Chemical Engineering', homeStateOpening: 15500, homeStateClosing: 22400, otherStateOpening: 13900, otherStateClosing: 20100, category: 'OPEN' },
  { branchCode: 'MME', branchName: 'Metallurgical & Materials Engg.', homeStateOpening: 23000, homeStateClosing: 33500, otherStateOpening: 21000, otherStateClosing: 29800, category: 'OPEN' },
  { branchCode: 'BIOTECH', branchName: 'Biotechnology', homeStateOpening: 25000, homeStateClosing: 37500, otherStateOpening: 23500, otherStateClosing: 34200, category: 'OPEN' },
];
