export interface Subtrack {
  letter: string;
  title: string;
  topics: string[];
}

export interface Track {
  id: number;
  number: string;
  title: string;
  shortTitle: string;
  iconName: 'Brain' | 'Cpu' | 'HeartPulse' | 'Atom' | 'Layers' | 'Zap';
  subtracks: Subtrack[];
}

export const tracksData: Track[] = [
  {
    id: 1,
    number: 'Track 1',
    title: 'AI Foundations',
    shortTitle: 'Foundations',
    iconName: 'Brain',
    subtracks: [
      {
        letter: 'A',
        title: 'Machine Learning, Deep Learning, and Causal AI',
        topics: [
          'Supervised, unsupervised, semi-supervised, and self-supervised learning',
          'Neural network architectures and deep generative models',
          'Transfer learning and meta-learning',
          'Federated learning',
          'Foundation models and large-scale pretraining',
          'Explainable and interpretable AI (XAI)',
          'Uncertainty quantification',
          'Causal inference and causal discovery',
          'Counterfactual reasoning',
          'Bayesian learning methods',
          'Statistical learning theory',
          'Model-free and model-based reinforcement learning',
          'Multi-agent RL',
          'Safe and constrained RL',
          'RL for robotics and control',
          'Human-in-the-loop RL',
          'Reinforcement learning from human feedback (RLHF)',
          'Planning and sequential decision making under uncertainty',
          'Game-theoretic AI'
        ]
      },
      {
        letter: 'B',
        title: 'Data Science, Big Data, and Predictive Analytics',
        topics: [
          'Data mining and knowledge discovery',
          'Big data processing, integration, and visualization',
          'AI for data-driven decision making',
          'Predictive and prescriptive analytics',
          'Knowledge graphs and semantic web',
          'Time series analysis',
          'Anomaly detection',
          'AI for business intelligence'
        ]
      },
      {
        letter: 'C',
        title: 'Computer Vision, Remote Sensing, and Imaging',
        topics: [
          'Image and video analysis',
          'Object detection, recognition, and segmentation',
          'Medical image processing',
          'Remote sensing and satellite image analysis',
          'Drone and aerial imaging',
          'Hyperspectral and multispectral imaging',
          'Integrated sensing and communication (ISAC)',
          '3D vision and scene understanding',
          'Generative models for vision'
        ]
      },
      {
        letter: 'D',
        title: 'Natural Language Processing and Speech Technologies',
        topics: [
          'Large language models and generative AI',
          'Text analytics and information extraction',
          'Speech recognition and synthesis',
          'Conversational AI and dialogue systems',
          'Multilingual and low-resource NLP',
          'Question answering and retrieval-augmented generation',
          'Sentiment analysis',
          'AI for regional and indigenous languages'
        ]
      }
    ]
  },
  {
    id: 2,
    number: 'Track 2',
    title: 'AI Enabling Infrastructure and Support',
    shortTitle: 'Infrastructure',
    iconName: 'Cpu',
    subtracks: [
      {
        letter: 'A',
        title: 'AI for Power, Energy, and Smart Grids',
        topics: [
          'AI applications in power system operation and control',
          'Renewable energy forecasting and optimization',
          'Smart grid analytics and demand response',
          'Energy management systems',
          'Fault detection and predictive maintenance',
          'AI for net-zero transitions and sustainable energy planning',
          'Digital twins for energy infrastructure'
        ]
      },
      {
        letter: 'B',
        title: 'AI for IoT, Edge Computing, and Autonomous Systems',
        topics: [
          'Intelligent IoT architectures and protocols',
          'Edge AI and on-device inference',
          'Embedded intelligence for resource-constrained systems',
          'AI for 6G and next-generation networks',
          'Open RAN and AI-driven network management',
          'Cloud-edge-device continuum',
          'Autonomous vehicles and drones',
          'Human-robot interaction',
          'Intelligent manufacturing and industrial automation',
          'Cyber-physical systems',
          'Real-time AI'
        ]
      },
      {
        letter: 'C',
        title: 'Cybersecurity, Privacy, and Trustworthy AI',
        topics: [
          'AI for threat detection, intrusion prevention, and malware analysis',
          'Adversarial attacks and robust defenses',
          'Privacy-preserving and secure machine learning',
          'Federated learning for privacy',
          'Blockchain and distributed AI',
          'Certified and verifiable AI systems',
          'AI security in critical infrastructure',
          'Secure multi-party computation'
        ]
      },
      {
        letter: 'D',
        title: 'Ethics, Fairness, and Governance of AI',
        topics: [
          'Ethical and responsible AI frameworks',
          'Bias detection, fairness, and algorithmic accountability',
          'Transparency and explainability in deployed systems',
          'AI policy, regulation, and international standards',
          'Societal and economic impact of AI',
          'Human-centered AI design',
          'AI and human rights',
          'AI literacy and education'
        ]
      },
      {
        letter: 'E',
        title: 'AI Benchmarking, Testbeds, and Open-Source Ecosystems',
        topics: [
          'AI testbed design, deployment, and evaluation',
          'Reproducibility, benchmarking, and standardized evaluation protocols',
          'Open-source AI tools, frameworks, and Linux Foundation initiatives',
          'AI infrastructure, MLOps, and model governance',
          'Dataset creation, curation, and governance',
          'Energy-efficient AI and green computing benchmarks'
        ]
      }
    ]
  },
  {
    id: 3,
    number: 'Track 3',
    title: 'AI and Human Wellbeing',
    shortTitle: 'Wellbeing',
    iconName: 'HeartPulse',
    subtracks: [
      {
        letter: 'A',
        title: 'AI for Healthcare and Biomedical Engineering',
        topics: [
          'AI-assisted diagnosis and clinical decision support',
          'Medical imaging and digital pathology',
          'Bioinformatics, genomics, and precision medicine',
          'Wearable health monitoring',
          'Drug discovery and molecular design',
          'AI for mental health and behavioral analysis',
          'Hospital operations and health informatics',
          'AI for pandemic preparedness and public health'
        ]
      },
      {
        letter: 'B',
        title: 'AI for Smart Cities, Agriculture, and Sustainable Development',
        topics: [
          'Smart transportation and urban mobility',
          'Urban planning and infrastructure management',
          'AI for climate change modeling and environmental monitoring',
          'Precision agriculture and agri-tech',
          'AI for water resource management and flood prediction',
          'Rural development and digital inclusion',
          'AI for biodiversity and ecological systems',
          'Sustainable and green AI'
        ]
      },
      {
        letter: 'C',
        title: 'AI for Governance and Social Good (Odisha Government Priority)',
        topics: [
          'AI for e-governance and public service delivery',
          'AI democratization and equitable access',
          'AI for social welfare and poverty alleviation',
          'Community-centered AI deployment',
          'Open government data and transparency'
        ]
      },
      {
        letter: 'D',
        title: 'AI for Governance, Disaster Management',
        topics: [
          'AI for disaster early warning, response, and recovery',
          'Natural hazard monitoring — cyclones, floods, droughts, and earthquakes',
          'Crisis informatics and situational awareness'
        ]
      },
      {
        letter: 'E',
        title: 'AI in Art, Music and Humanities',
        topics: [
          'AI in Art, Music and Humanities'
        ]
      }
    ]
  },
  {
    id: 4,
    number: 'Track 4',
    title: 'AI Futures and Disruptions',
    shortTitle: 'Futures',
    iconName: 'Atom',
    subtracks: [
      {
        letter: 'A',
        title: 'AI for Next-Generation Networks and Connectivity',
        topics: [
          '5G and 6G Intelligent Networks',
          'AI-Driven Network Optimization',
          'Edge AI and Edge Computing',
          'Intelligent IoT Systems',
          'Autonomous Network Management',
          'AI for Wireless Communications',
          'Software-Defined Networking (SDN)',
          'Network Function Virtualization (NFV)',
          'Smart Spectrum Management',
          'Low-Latency Communication Systems',
          'Intelligent Routing and Traffic Engineering',
          'Federated Learning in Communication Networks',
          'AI for Satellite and Space Communications',
          'Digital Twin Networks',
          'AI-Enabled Network Automation'
        ]
      },
      {
        letter: 'B',
        title: 'Green AI Computing',
        topics: [
          'Energy-Efficient AI Architectures',
          'Sustainable Machine Learning',
          'Carbon-Aware Computing',
          'Green Data Centers',
          'Low-Power Edge AI',
          'AI for Energy Optimization',
          'Resource-Efficient Deep Learning',
          'TinyML and Embedded AI',
          'Energy-Aware Cloud Computing',
          'AI Hardware Acceleration',
          'Sustainable High-Performance Computing',
          'AI for Smart Grids',
          'Renewable Energy Integration',
          'Efficient Neural Network Compression',
          'Federated Learning for Green Computing',
          'AI Workload Optimization'
        ]
      }
    ]
  },
  {
    id: 5,
    number: 'Track 5',
    title: 'General Track',
    shortTitle: 'General',
    iconName: 'Layers',
    subtracks: [
      {
        letter: 'A',
        title: 'Applications of AI',
        topics: [
          'AI applications in education and e-learning',
          'AI for financial technology and banking',
          'AI in supply chain and logistics',
          'AI-driven content creation and media',
          'AI for legal and compliance automation',
          'AI in retail and consumer analytics',
          'AI for human resources and talent management',
          'AI-powered recommendation systems',
          'AI for accessibility and assistive technologies',
          'Cross-domain AI deployment and integration',
          'Real-world case studies and benchmarks',
          'Emerging AI applications and novel use cases'
        ]
      }
    ]
  },
  {
    id: 6,
    number: 'Track 6',
    title: 'Quantum Computing in AI',
    shortTitle: 'Quantum',
    iconName: 'Zap',
    subtracks: [
      {
        letter: 'A',
        title: 'Quantum Computing and AI',
        topics: [
          'Quantum machine learning algorithms and theory',
          'Quantum optimization and sampling',
          'Hybrid quantum-classical AI systems',
          'Quantum-enhanced sensing and communication',
          'Near-term quantum AI applications',
          'Quantum cryptography and post-quantum security',
          'Variational quantum algorithms for AI',
          'Quantum neural networks and circuit learning',
          'Quantum advantage in AI problem domains',
          'Quantum data encoding and feature mapping',
          'Quantum simulation for scientific AI',
          'Quantum hardware and noise mitigation for AI'
        ]
      }
    ]
  }
];
