import { BrainCircuit, Database, MessageSquareCode, LineChart, Shield, Search, Zap, Users, BarChart, Target, Repeat, Globe } from 'lucide-react';

export const services = [
  {
    id: 'advisory',
    title: 'AI Strategy & Consulting',
    description: 'Bespoke AI adoption roadmaps and marketing strategy to future-proof your business operations.',
    icon: BrainCircuit,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    id: 'automation',
    title: 'Intelligent Automation',
    description: 'Robust workflow automations to reduce manual overhead and secure your data infrastructure.',
    icon: Database,
    color: 'bg-pink-100 text-pink-500',
  },
  {
    id: 'chatbots',
    title: 'Chatbot Engineering',
    description: 'Transforming customer engagement with 24/7 intelligent conversational agents.',
    icon: MessageSquareCode,
    color: 'bg-indigo-100 text-navy-900',
  },
  {
    id: 'marketing',
    title: 'Data-Driven Marketing',
    description: 'From predictive analytics to personalized campaigns, we design for high conversion.',
    icon: LineChart,
    color: 'bg-purple-100 text-purple-600',
  },
];

export const partners = [
  "OpenAI", "Anthropic", "HubSpot", "Salesforce", "Zapier", "Google Cloud"
];

export const insights = [
  {
    id: 'marketing-automation',
    title: '5 signs your marketing workflow needs AI automation',
    date: '2 December 2025',
    category: 'Technology',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ai-ethics',
    title: 'When dealing with customer data, AI ethics must be taken seriously',
    date: '16 October 2025',
    category: 'Technology',
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'conference-recap',
    title: 'Global AI Marketing Conference 2025 Recap',
    date: '13 October 2025',
    category: 'Events',
    imageUrl: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'openai-partnership',
    title: 'GoldrushAi becomes a certified OpenAI Enterprise Partner',
    date: '4 September 2025',
    category: 'News',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  }
];

export const serviceData = {
  'advisory': {
    id: 'advisory',
    layout: 'standard',
    heroTitle: 'AI Strategy & Consulting',
    heroDescription: 'Whether you need a sounding board for your ideas or some help to navigate your way through a technical challenge, GoldrushAi is here to help.',
    experienceTitle: 'Decades of collective AI experience',
    experienceDescription: 'We have senior experts in all avenues of technology from infrastructure to business resilience, data, software development, technology risk and governance processes and more. Overall, our experience spans over 50 years, all of which was gained at market leaders.',
    experienceDescription2: 'We understand your technology issues as we have lived through them ourselves. Having worked in highly regulated and pressured environments, we have you covered for every eventuality.',
    features: [
      { title: 'CTO as a Service', description: 'GoldrushAi can act as your CTO to review your technical plans, structure and give you advice about how you can make improvements.', icon: Users },
      { title: 'AI Readiness Audits', description: 'We help with cross-functional team engagement using real-world experience to ensure your AI adoption gets the focus it deserves.', icon: Shield },
      { title: 'Technology Strategy', description: 'Before updating any part of your technical landscape, get an expert to review your existing setup and roadmap.', icon: Search }
    ],
    uniqueTitle: 'Uniquely positioned to advise you',
    uniqueDescription: "Ensuring your company is keeping up to date with the latest trends and innovations is important, and if you don't have the skills or time to do this internally then you can call on us to evaluate your proposition.",
    uniqueDescription2: 'Using our unique proposition of Advise, Execution and Support, we can give you leadership help at any stage in your journey, or from start to finish if you need it.'
  },
  'automation': {
    id: 'automation',
    layout: 'process',
    heroTitle: 'Intelligent Automation',
    heroDescription: 'Scale your operations without scaling your headcount. Our automation workflows handle the heavy lifting while you focus on growth.',
    experienceTitle: 'Efficiency built on expertise',
    experienceDescription: 'We specialize in connecting disparate systems through custom API integrations and no-code/low-code platforms like Zapier and Make. Our solutions have saved clients thousands of hours in manual data entry.',
    experienceDescription2: 'From lead processing to automated reporting, we design resilient systems that work 24/7 without error.',
    steps: [
      { number: '01', title: 'Process Audit', description: 'We map your existing manual workflows to identify high-impact automation candidates.' },
      { number: '02', title: 'Architecture', description: 'Designing secure, scalable API connections between your core software stack.' },
      { number: '03', title: 'Deployment', description: 'Rolling out robust, error-handled automations with real-time performance tracking.' }
    ],
    features: [
      { title: 'Workflow Design', description: 'Mapping out your business processes to identify bottleneck and automation opportunities.', icon: Zap },
      { title: 'CRM Integration', description: 'Syncing your sales, marketing, and support data seamlessly across your entire tech stack.', icon: Database },
      { title: 'Performance Monitoring', description: 'Real-time dashboards to track the ROI and efficiency of your automated workflows.', icon: BarChart }
    ],
    uniqueTitle: 'Automation with a human touch',
    uniqueDescription: "We don't just set and forget. We build automations that enhance human productivity rather than replace it.",
    uniqueDescription2: 'Our team provides ongoing optimization to ensure your systems evolve as your business grows.'
  },
  'chatbots': {
    id: 'chatbots',
    layout: 'feature-rows',
    heroTitle: 'Chatbot Engineering',
    heroDescription: 'Transforming customer engagement with intelligent conversational agents that are available 24/7, providing instant value and driving conversions.',
    experienceTitle: 'Intelligent Conversation, Real Results',
    experienceDescription: "Our team specializes in Large Language Models (LLMs) and custom NLP pipelines. We don't just deploy \"out of the box\" bots; we engineer agents that understand the nuances of your brand and customer needs.",
    experienceDescription2: 'From customer support to automated sales qualification, our chatbots integrate seamlessly with your existing CRM and support platforms like HubSpot, Zendesk, and Salesforce.',
    features: [
      { title: 'Custom LLM Fine-Tuning', description: 'Training models on your specific documentation and brand voice for unparalleled accuracy and zero hallucination.', icon: BrainCircuit },
      { title: 'Seamless Handoff', description: 'Smart detection for when a human touch is needed, with full context preserved for your support team to take over.', icon: MessageSquareCode },
      { title: 'Omnichannel Presence', description: 'One intelligent core powering your website, WhatsApp, Slack, and social media channels simultaneously.', icon: Globe }
    ],
    uniqueTitle: 'More than just a script',
    uniqueDescription: 'Most chatbots frustrate users with rigid menus. Ours delight them by actually solving problems and providing accurate, contextual information instantly through natural language.',
    uniqueDescription2: "We focus on the \"Solution Loop\" — ensuring every interaction moves the needle for your business, whether that's a lead captured or a complex technical ticket resolved."
  },
  'marketing': {
    id: 'marketing',
    layout: 'impact',
    heroTitle: 'Data-Driven Marketing',
    heroDescription: 'Leverage the power of predictive analytics and automated personalization to maximize every marketing dollar spent and accelerate ROI.',
    experienceTitle: 'From Data Points to Profit',
    experienceDescription: 'We bridge the gap between complex data science and actionable marketing strategy. Our team helps you identify high-value segments and automate the journey from stranger to advocate.',
    experienceDescription2: 'Using advanced machine learning modeling, we predict customer behavior and automate interventions to increase Lifetime Value (LTV) and decrease churn.',
    stats: [
      { label: 'Avg. ROI Increase', value: '140%' },
      { label: 'LTV Growth', value: '45%' },
      { label: 'Lead Quality', value: '3x' }
    ],
    features: [
      { title: 'Predictive Lead Scoring', description: 'Focus your sales team on the leads most likely to convert using ML models trained on your historical data.', icon: Target },
      { title: 'Hyper-Personalization', description: 'Automate unique content experiences for every visitor based on their historical behavior and real-time intent.', icon: Repeat },
      { title: 'Advanced Attribution', description: 'Move beyond \"last click\" and understand the true value of every touchpoint in your marketing mix.', icon: LineChart }
    ],
    uniqueTitle: 'Precision at the core of growth',
    uniqueDescription: 'Marketing is no longer about guessing. We provide the technical infrastructure to measure, test, and scale what works with absolute certainty.',
    uniqueDescription2: "Our approach combines creative marketing intuition with the raw power of AI-driven optimization, ensuring your brand stays ahead of the competition in a privacy-first world."
  }
};

export const insightData = {
  'marketing-automation': {
    id: 'marketing-automation',
    title: '5 signs your marketing workflow needs AI automation',
    date: '2 December 2025',
    category: 'Technology',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    content: {
      introduction: "As businesses grow, their marketing processes often become fragmented and labor-intensive. Automation isn't just a luxury anymore—it's a requirement for staying competitive in a digital-first world.",
      sections: [
        {
          heading: "1. You're drowning in manual data entry",
          body: "If your team is spending hours copying lead information from forms into spreadsheets or CRMs, you're losing valuable time. AI-driven integration tools can handle this in real-time with zero errors."
        },
        {
          heading: "2. Your lead response time is lagging",
          body: "In marketing, speed is everything. If it takes your team more than 5 minutes to respond to an inquiry, the chance of conversion drops by 80%. Automated chatbots and email triggers ensure no prospect is left waiting."
        },
        {
          heading: "3. Personalization feels like an impossible task",
          body: "One-size-fits-all marketing is dead. AI allows you to segment your audience and serve hyper-personalized content at scale without manually crafting every interaction."
        }
      ],
      conclusion: "Identifying these signs early can save your business thousands in lost revenue and wasted employee hours. GoldrushAi specializes in auditing these exact bottlenecks."
    }
  },
  'ai-ethics': {
    id: 'ai-ethics',
    title: 'When dealing with customer data, AI ethics must be taken seriously',
    date: '16 October 2025',
    category: 'Technology',
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800',
    content: {
      introduction: "The rapid adoption of AI in marketing has outpaced the development of ethical frameworks. Brands that prioritize data integrity and transparency today will be the trust leaders of tomorrow.",
      sections: [
        {
          heading: "The Trust Gap",
          body: "Customers are increasingly aware of how their data is used. Using AI to manipulate behavior rather than enhance experience creates a trust gap that is hard to bridge once broken."
        },
        {
          heading: "Bias in Algorithms",
          body: "Automated systems can inadvertently inherit human biases. We discuss how rigorous testing and diverse datasets are essential for creating equitable marketing tools."
        }
      ],
      conclusion: "At GoldrushAi, we build with 'Ethics by Design', ensuring your brand remains both powerful and principled."
    }
  },
  'conference-recap': {
    id: 'conference-recap',
    title: 'Global AI Marketing Conference 2025 Recap',
    date: '13 October 2025',
    category: 'Events',
    imageUrl: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=800',
    content: {
      introduction: "The 2025 Global AI Marketing Conference set the stage for the next decade of digital interaction. From multi-modal LLMs to autonomous sales agents, the landscape is shifting faster than ever.",
      sections: [
        {
          heading: "The Rise of Agentic AI",
          body: "The biggest takeaway was the shift from simple chatbots to autonomous agents. These systems don't just answer questions; they complete tasks, follow up with leads, and update CRM records without human intervention."
        },
        {
          heading: "Privacy-First Personalization",
          body: "New techniques like federated learning are allowing models to train on local data without ever moving sensitive information to the cloud, solving long-standing privacy hurdles."
        }
      ],
      conclusion: "The key to success in 2026 will be early experimentation. Those who wait for 'perfect' models will be left behind."
    }
  },
  'openai-partnership': {
    id: 'openai-partnership',
    title: 'GoldrushAi becomes a certified OpenAI Enterprise Partner',
    date: '4 September 2025',
    category: 'News',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    content: {
      introduction: "We are thrilled to announce that GoldrushAi has officially joined the OpenAI Enterprise Partner Network, marking a significant milestone in our mission to deliver gold-standard AI solutions.",
      sections: [
        {
          heading: "What this means for our clients",
          body: "Through this partnership, our clients gain priority access to the latest GPT models, advanced fine-tuning capabilities, and enterprise-grade security features for their custom AI deployments."
        },
        {
          heading: "A Commitment to Excellence",
          body: "Our team has completed rigorous training and certification to ensure every implementation meets the highest standards of performance and safety set by OpenAI."
        }
      ],
      conclusion: "This partnership cements GoldrushAi's position as a leader in the UK's burgeoning AI sector."
    }
  }
};
